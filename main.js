// const ul=document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent="hello";
// ul.children[1].innerText="brad";
// ul.children[2].innerText="brads";
// ul.lastElementChild.innerHTML="<h1>Hello</h1>";
// const btn=document.querySelector('.btn');

// // btn.style.background="red";
// const btn=document.querySelector('.btn');
// btn.addEventListener('mouseover',(e)=>{
//     e.preventDefault();
//   document.querySelector
//   ('#my-form').style.background='yellow';
//     document.querySelector('body').classList.add('bg-dark');
//  document.querySelector('.items')
//    .lastElementChild.innerHtml='<h1>Hello</h1>';
// });

const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
 const msg=document.querySelector('.msg');
 const userlist=document.querySelector('#users');
 myForm.addEventListener('submit',onSubmit);
 function onSubmit(e){
     e.preventDefault();
       if(nameInput.value===''|| emailInput.value===''){
          msg.classList.add('error');
         msg.innerHTML='please enter all fields';
         setTimeout(()=>msg.remove(),3000);
       }
       else{
           const li=document.createElement('li');
           li.appendChild(document.createTextNode(`${nameInput.value}
           :${emailInput.value}`));
           userlist.appendChild();
        =  nameInput.value='';
        nameInput.value=
        }))
       }

 }
