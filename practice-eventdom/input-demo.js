let i = document.querySelector('input[name="shimei"]');
i.getAttribute('name');
b = document.querySelector('button#print'); 
b.addEventListener('click', greeting);
let p2 = document.querySelector('p#message'); 

function greeting() {
    p2.textContent = ('こんにちは、' + i.value +"さん");
  } 