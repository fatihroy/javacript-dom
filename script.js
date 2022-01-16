// DOM Manipulation 2 - manipulasi Node

// 1. document.createElement()
// buat elemen baru
const p_baru = document.createElement('p')
const p_baruTeks = document.createTextNode('Ini adalah paragraf baru')
// simpan tulisan ke p_baru
p_baru.appendChild(p_baruTeks)
// simpan diakhir section a
const sectionA = document.querySelector('section#a')
sectionA.appendChild(p_baru)


// 2. element.insertBefore()
const liBaru = document.createElement('li')
// bikin tulisan
const liTeks = document.createTextNode('Ini adalah Item Baru')
// masukin teks kedalam li
liBaru.appendChild(liTeks)
// tangkap ul dan li2
const ul = document.querySelector('section#b ul')
const li2 = document.querySelector('section#b ul li:nth-child(2)')
// simpan sebelum li2
ul.insertBefore(liBaru, li2)

// 3. element.removeChild -->  menghapus elemen child
const a = sectionA.getElementsByTagName('a')[0]
sectionA.removeChild(a)

// 4. element.replaceChild() --> mengubah elemen child
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')
const h5 = document.createElement('h5')
const h5Teks = document.createTextNode('New Title') 
h5.appendChild(h5Teks)
sectionB.replaceChild(h5, p4)

// menambahkan style untuk element yang telah diubah
h5.style.backgroundColor = 'lightskyblue'
liBaru.style.backgroundColor = 'red'
p_baru.style.backgroundColor = 'yellow'