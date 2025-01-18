const fig = document.querySelector('.fig');
const img = document.querySelector('.image');

fig.addEventListener('mousemove', (e)=>{
    let x = e.offsetX;
    let y =e.offsetY;
    img.style.transformOrigin = `${x}px ${y}px`
    img.style.transform = 'scale(2.25)'
    
})
fig.addEventListener('mouseleave', (e)=>{
    img.style.transformOrigin = 'center'
    img.style.transform = 'scale(1)'
})
