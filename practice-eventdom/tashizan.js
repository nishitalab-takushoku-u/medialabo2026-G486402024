let l = document.querySelector('input[name="left"]');
let r = document.querySelector('input[name="right"]');
l.getAttribute('left');
r.getAttribute('right');
let b = document.querySelector('button#calc'); 
b.addEventListener('click', keisan);
let p2 = document.querySelector('span#answer'); 

function keisan(){
    let x = Number(l.value);
    let y = Number(r.value);
    p2.textContent = (x+y);
}