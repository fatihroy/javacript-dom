// DOM Events --> adalah representasi kejadian yang ada didalam DOM
// kejadiannya bisa dilakukan oleh user atau otomatis oleh API
// cara mendengarkan event :
// 1. Event Handler(Inline HTML Attribute, Element Method)
// 2. addEventListener()

// const p2 = document.querySelector('.p2')
// // 1. inline html attribute --> simpan onclicknya di elemen pada html
// function ubahwarnap2() {
//     p2.style.backgroundColor = 'blue'
// } 


// 2. element method 
// const p3 = document.querySelector('.p3')
// p3.onclick = function () {
//     p3.style.backgroundColor = 'blue'
// }

// 3. addEventListener()
// const p4 = document.querySelector('section#b p')
// p4.addEventListener('click', function() { 
//     const ul = document.querySelector('section#b ul')
//     const ItemBaru = document.createElement('li')
//     const liTeks = document.createTextNode('list baru dibuat')
//     ItemBaru.appendChild(liTeks)
//     ul.appendChild(ItemBaru)
// })

// ---event handler vs event listener---

const p2 = document.querySelector('.p2')
// p2.onclick = function () {
//     p2.style.backgrounColor = 'lightblue'
// }
// p2.onclick = function () {
//     p2.style.color = 'yellow'
// }

// value clicknya bisa diganti : dblclick, mouseenter, mouseleave
p2.addEventListener('click', function () {
    p2.style.backgroundColor = 'blue'
})
p2.addEventListener('click', function () {
    p2.style.color = 'yellow'
})
