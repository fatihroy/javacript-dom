// // DOM Selection 2

// // 1. document.querySelector() --> element
// const p4 = document.querySelector('section#b p');
//     // merubah warna teks
//     p4.style.color = 'green'
//     // memperbesar teks
//     p4.style.fontSize = '40px'

// const li3 = document.querySelector('section#b ul li:nth-child(3)');
//     li3.style.backgroundColor = 'lightskyblue'



// //  2. document.querySelectorAll()
// const li = document.querySelectorAll('li')
// li[0].style.color = 'green'
// li[1].style.color = 'green'


const sectionB = document.getElementById('b')
// pake sectionB
const p4 = sectionB.querySelector('p')
    p4.style.color = 'green'
    p4.style.fontSize = '40px'