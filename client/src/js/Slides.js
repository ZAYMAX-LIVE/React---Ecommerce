window.onload = function slidesHandle(){
console.log('Hi')

let offset = 0
const slides = document.querySelector('.block');

document.querySelector('.next').addEventListener('click',function(){
    offset += -80;
    if(offset < -160){
        offset = 0
    }
    slides.style.left = offset + 'vw';
})

document.querySelector('.prev').addEventListener('click',function(){
   
    if(offset < 0){
        offset += 80;
    }
    
    slides.style.left = offset + 'vw';
})
}
