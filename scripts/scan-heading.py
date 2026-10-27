"""Extract original ink and generate a reusable paper texture; no generative models.
Usage: python scripts/scan-heading.py source.png output-directory
Requires Pillow and NumPy. Convert HEIC to PNG before running.
"""
from pathlib import Path
import argparse
import numpy as np
from PIL import Image, ImageFilter

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('source', type=Path)
parser.add_argument('output', type=Path)
parser.add_argument('--name', default='heading', help='Asset filename prefix for this article')
args = parser.parse_args()
args.output.mkdir(parents=True, exist_ok=True)
source = Image.open(args.source).convert('L')
gray = np.asarray(source, dtype=np.float32)
# Estimate the local paper brightness to cancel shadows without redrawing ink.
paper = np.asarray(source.filter(ImageFilter.GaussianBlur(25)), dtype=np.float32)
darkness = 1 - gray / np.maximum(paper, 1)
alpha = np.clip((darkness - 0.08) / 0.55, 0, 1)
# Remove isolated camera/paper specks while retaining disconnected punctuation.
mask = alpha > 0.08
visited = np.zeros(mask.shape, dtype=bool)
height, width = mask.shape
components = []
for y, x in zip(*np.nonzero(mask)):
    if visited[y, x]:
        continue
    points = []
    pending = [(y, x)]
    visited[y, x] = True
    while pending:
        cy, cx = pending.pop()
        points.append((cy, cx))
        for ny in range(max(0, cy-1), min(height, cy+2)):
            for nx in range(max(0, cx-1), min(width, cx+2)):
                if mask[ny, nx] and not visited[ny, nx]:
                    visited[ny, nx] = True
                    pending.append((ny, nx))
    components.append(points)
main_top = min(min(y for y, x in points) for points in components if len(points) >= 50)
keep = np.zeros(mask.shape, dtype=np.uint8)
for points in components:
    if len(points) < 10 or (len(points) < 50 and max(y for y, x in points) < main_top - 12):
        continue
    for py, px in points:
        keep[py, px] = 255
# Preserve antialiased edges around retained strokes.
alpha *= np.asarray(Image.fromarray(keep).filter(ImageFilter.MaxFilter(3))) / 255
ink = Image.new('RGBA', source.size, (30, 30, 30, 0))
ink.putalpha(Image.fromarray(np.uint8(alpha * 255)))
bounds = ink.getbbox()
if not bounds:
    raise SystemExit('No handwriting detected')
left, top, right, bottom = bounds
ink = ink.crop((left-24, top-14, right+24, bottom+14))
ink.save(args.output / f'{args.name}-ink.png')

# Neutral fine noise matches the white site; no coarse mottling or fibers.
rng = np.random.default_rng(84)
size = 512
fine_noise = rng.normal(0, 7.5, (size, size))
# Slightly correlated fine tooth, without broad cloudy patches.
tooth = Image.fromarray(np.uint8(np.clip(128 + rng.normal(0, 10, (size, size)), 0, 255)))
tooth = np.asarray(tooth.filter(ImageFilter.GaussianBlur(0.6)), dtype=float) - 128
luminance = np.clip(251 + fine_noise + tooth * 0.25, 0, 255).astype('uint8')
texture = Image.fromarray(np.repeat(luminance[:, :, None], 3, axis=2))
texture.save(args.output / 'paper-texture.png')
preview = texture.resize(ink.size)
preview.paste(ink, (0,0), ink)
preview_path = Path('output/heading-scan-preview.png')
preview_path.parent.mkdir(parents=True, exist_ok=True)
preview.save(preview_path)
print(f'Ink: {ink.width} × {ink.height}; original letter shapes preserved.')
