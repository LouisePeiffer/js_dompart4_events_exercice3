// 1 
let scloop = document.querySelector('h1')
scloop.addEventListener('click',() =>{
    scloop.setAttribute('class', 'text-blue')
})

// 2
let scloopi = document.querySelector('h3')
scloopi.addEventListener('dblclick', ()=> {
    scloopi.setAttribute('class', 'text-error')
})

// 3
let para = document.querySelector('p')
let action = () => {
    if (para.getAttribute('class') == "text-style" ) {
        para.removeAttribute('class')
    } else {
        para.setAttribute('class','text-style')
    }
}
para.addEventListener('click',action)

// 4
let grandP = document.querySelectorAll('p')[1]
let span1 = grandP.querySelectorAll('span')[0]
let span2 = grandP.querySelectorAll('span')[1]
let span3 = grandP.querySelectorAll('span')[2]

span1.addEventListener('click', () => {
    span1.setAttribute('class','bolder')
})

span2.addEventListener('click', () => {
    span2.setAttribute('class','bolder')
})

span3.addEventListener('click', () => {
    span3.setAttribute('class','bolder')
})

// 5
// let autreP = document.querySelectorAll('p')[2]
// let span4 = autreP.querySelectorAll('span')[0]
// let span5 = autreP.querySelectorAll('span')[1]
// let span6 = autreP.querySelectorAll('span')[2]

// span4.addEventListener('click',()=> {

// })

let mySpan2 = Array.from(document.querySelectorAll('p')[2].children)

console.log(mySpan2);

mySpan2.forEach(el => {
    el.addEventListener('click', () =>{
        mySpan2.forEach(el => {
            el.classList.remove('bolder-red')
        });
        el.classList.t('bolder-red')
    })
});
