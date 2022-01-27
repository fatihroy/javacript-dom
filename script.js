// dom traversal itu adalah penelusuran

// // bikin program supaya tombol x ketika diklik akan hilang
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');
// // hanya bekerja pada satu elemen (afroyhan aja) kalo pake queryselector/penyeleksi satu elemen
// close.addEventListener('click', function () {
//     card.style.display = 'none';
// })

const close = document.querySelectorAll('.close')
// // penelusuran
// for (let index = 0; index < close.length; index++) {
//     // e berisi event yang sedang terjadi
//     close[index].addEventListener('click', function (e) {
//     // // parentElement = adalah dom traversalnya
//     //     close[index].parentElement.style.display = 'none' //ambil parentnya yaitu card dan ganti displaynya jadi none
// // console.log(e) //untuk menamplan berbagai informasi e
// e.target.parentElement.style.display = 'none' //cara ini sama kayak yang diatas
//     })
// }

//e adalah untuk ambil satu elemen
// close.forEach(function (e) {
//     e.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none'
//         // prevent default --> untuk menghentikan semua aksi default yang dilakukan oleh sebuah elemen
//         e.preventDefault(); //defaultnya elemen a pd html merefresh halaman
//         e.stopPropagation() //--> spy tidak melakukan event bubling
//     })
// })

// // event bubling --> ktk kita punya event pd suatu elemen, dan  elemen pembungkusnya juga ada even maka even elemen pembungkus akan dijalankan terlebih dahulu
// const cards = document.querySelectorAll('.card')
// cards.forEach(function(c) {
//     c.addEventListener('click', function () {
//         alert('allright')
//     })
// })
  



// pake event bubling spy tobol close lebih efektif
const container = document.querySelector('.container')
// e adalah element pada container
container.addEventListener('click', function(e) {
//jika yang diklik memiliki class close maka:
 if (e.target.className == 'close') {
     e.target.parentElement.style.display = 'none'
e.preventDefault()
 }
})                            