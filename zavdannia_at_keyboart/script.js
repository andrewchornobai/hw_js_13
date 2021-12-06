// keyup, keydown, keypress

// const ball = document.querySelector('.ball');

// window.addEventListener('keydown',function(event){
//     // console.log('Event',event)
//     // console.log('Key code',event.keyCode);

//     // offset Left, rigth, bottom, top - можна вивести інформацію про відступи елементу (значення margin)
//     // innerWidth - повертає ширину екрану

//     if(event.keyCode === 37){
//         // console.log('press arrow left');
//         let goLeft = ball.offsetLeft;
//         // console.log(goLeft);
//         if(goLeft > 0){
//             ball.style.left = goLeft - 10+'px';
//         }
//     }
//     if(event.keyCode === 38){
//         let goTop = ball.offsetTop;
//         // console.log(goTop);
//         if(goTop > 0){
//             ball.style.top = goTop - 10 + 'px';
//         }
//     }
//     if(event.keyCode === 39){
//         let goRight = ball.offsetLeft;
//         if(goRight < window.innerWidth - 100){
//             ball.style.left = goRight + 10+'px';
//         }
        
//     }
//     if(event.keyCode === 40){
//         let goBottom = ball.offsetTop;
//         // console.log(goTop);
//         if(goBottom < window.innerHeight - 100){
//             ball.style.top = goBottom + 10 + 'px';
//         }
//     }
// })

// -------------------------------------------------------------------------------

// toggle - працює тільки з одним класом

const sel = selector => document.querySelector(selector);
sel('.add').addEventListener('click',function(){
    // sel('.box').classList.add('bg-red');
    sel('.box').classList.add('bg-red','shadow');
})

sel('.remove').addEventListener('click',function(){
    document.querySelector('.box').classList.remove('bg-red','shadow');
})
sel('.toggle').addEventListener('click',function(){
    document.querySelector('.box').classList.toggle('bg-red');
})

// -------------------------------------------------------------------------------
// hasAttribute() - дозволяє перевірити чи є такий атрибут в даному елементі 

function change(){
    const myLink = document.getElementById('link');
    // console.log(myLink);
    // console.dir(myLink);
    // console.dir(event.target.dataset.name);

    // Робота з атрибутами

    // console.log(myLink.hasAttribute('href'));
    // console.log(myLink.getAttribute('href'));
    // myLink.setAttribute('href', 'https://www.google.com');
    // myLink.setAttribute('target', '_blank');
    // myLink.removeAttribute('href');
}
// ---------------------------------------------------------------------------------------------
// Повернення заданих стилів елементам
document.querySelector('.check').addEventListener('click',function(){
    const box = document.querySelector('.box');
    console.log(box);
    console.log(box.style.backgroundColor);

    let st = getComputedStyle(box);
    console.log(st);
    console.log(st.backgroundColor);
})

document.querySelector('.box').onclick = function(){
    let st = getComputedStyle(this);
    console.log(st.backgroundColor);
}