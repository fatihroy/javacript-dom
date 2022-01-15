// DOM Manipulation

// 1. innerHTML
// const judul = document.getElementById('judul')
// judul.innerHTML = '<em>My Name Is Abdillah<em>'

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = '<h2>Hai Abdillah<h2>'

// 2. element.style.<propertyCSS>
// const judul = document.querySelector('h1#judul')
// judul.style.color = 'blue'

// 3. element.setAttribute()
const judul = document.getElementsByTagName('h1')[0]
judul.setAttribute('name', 'fatih') //name = fatih

// 4. element.getAttribute()
// console.log(judul.getAttribute('id'))

// 5. element.removeAttribute()
// const ig = document.querySelector('section#a a')
// ig.removeAttribute('href')

// 6. element.classList.add()
// const p3 = document.querySelectorAll('section#a .p3')[0]
// p3.classList.add('label')

// 7. element.classList.remove()
// const p3 = document.querySelectorAll('section#a .p3')[0]
// p3.classList.remove('.p3')

// 8. element.classList.toggle() --> kalau ada dihapus, kalau tidak ada ditambahkan
// const p3 = document.querySelectorAll('section#a .p3')[0]
// p3.classList.toggle('label')

// 9. element.classList.item()
// const p3 = document.querySelectorAll('section#a .p3')[0]
// p3.classList.add('label')
// console.log(p3.classList.item(1))

// 10. element.classList.contains()
// const p3 = document.querySelectorAll('section#a .p3')[0]
// p3.classList.add('label')
// console.log(p3.classList.contains('label'))

// 11. element.classList.replace()
const p3 = document.querySelectorAll('section#a .p3')[0]
p3.classList.add('label')
p3.classList.replace('label', 'label1')
console.log(p3.classList.contains('label'))
