'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModel=document.querySelector('.close-modal');
const btnsOpenModel=document.querySelectorAll('.show_modal');
console.log(btnsOpenModel);
for(let i=0;i<btnsOpenModel.length;i++)
btnsOpenModel[i].addEventListener('click',function( )
{
    console.log('Button clicked');
    modal.classList.remove('hidden');

});

