---
id: 1
title: 'Direct Inversion'
date: 2022-12-19 00:00:00
description: 'Preprint Publication (Under Review): Optimization-Free Text-Driven Real Image Editing with Diffusion Models.'
featured_image: '/images/direct_inversion_demo.mp4'
---
#### Paper Preview
**[Arxiv Preprint](https://arxiv.org/abs/2211.07825)**
<div class="centered">
	<img class="disp" src="/images/direct_inversion_thumbnail.png">
</div>
#### Abstract
With the rise of large, publicly-available text-to-image diffusion models, text-guided real image editing has garnered much research attention recently. Existing methods tend to either rely on some form of per-instance or per-task fine-tuning and optimization, require multiple novel views, or they inherently entangle preservation of real image identity, semantic coherence, and faithfulness to text guidance. In this paper, we propose an optimization-free and zero fine-tuning framework that applies complex and non-rigid edits to a single real image via a text prompt, avoiding all the pitfalls described above. Using widely-available generic pre-trained text-to-image diffusion models, we demonstrate the ability to modulate pose, scene, background, style, color, and even racial identity in an extremely flexible manner through a single target text detailing the desired edit. Furthermore, our method, which we name *Direct Inversion*, proposes multiple intuitively configurable hyperparameters to allow for a wide range of types and extents of real image edits. We prove our method's efficacy in producing high-quality, diverse, semantically coherent, and faithful real image edits through applying it on a variety of inputs for a multitude of tasks. We also formalize our method in well-established theory, detail future experiments for further improvement, and compare against state-of-the-art attempts.