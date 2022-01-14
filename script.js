// DOM selection

// 1. document.getElementById() --> element
const judul = document.getElementById('judul') //menangkap id judul di index.html
    // ubah warna judul
    judul.style.color = 'yellow'

    // ubah warna bg judul
    judul.style.backgroundColor = 'blue'

    // mengubah tulisan di javascript
    judul.innerHTML = 'Abdillah Fatih Royhan'


// 2. document.getElementsBtTagName() --> html collection
const p = document.getElementsByTagName('p') //menyeleksi seluruh paragraph
    // ubah background color: pake index array(kalau ingin semua pakai looping)
    p[1].style.backgroundColor = 'lightskyblue'

// ambil h1
const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = '50px'

//  3. document.getElementsByClassName() --> HtmlCollection
const p3 = document.getElementsByClassName('p3')[0]
p3.innerHTML = 'Ini diubah from javasript'
p3.style.color = 'gold'
p3.style.backgroundColor = 'blue'