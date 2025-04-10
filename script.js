'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModel=document.querySelector('.close-modal');
const btnsOpenModel=document.querySelectorAll('.show_modal');
console.log(btnsOpenModel);
const openModal=function(){
     console.log('Button clicked'); 
     modal.classList.remove('hidden');
    overlay.classList.remove('hidden');}   
const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');};
for(let i=0;i<btnsOpenModel.length;i++)
btnsOpenModel[i].addEventListener('click',openModal )   
 // modal.style.display='block';
btnCloseModel.addEventListener('click',closeModal);

overlay.addEventListener('click',closeModal);
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');

