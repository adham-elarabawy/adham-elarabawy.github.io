let cursor_blob = document.getElementById('cursor-blob');

console.log(cursor_blob)
const onMouseMove = (e) =>{
    cursor_blob.style.left = e.pageX + 'px';
    cursor_blob.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);