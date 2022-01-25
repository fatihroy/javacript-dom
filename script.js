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
close.forEach(function (e) {
    e.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none'
    })
})

// mengembalikan :                  node         element       node          element                  node               element
// method-method dom traversal --> parentNode, parentElement, nextSibling, nextElementSibling, previousSibling, previousElementSibling


// mencoba
// kalau element itu mengabaikan enter/spasi
const nama = document.querySelector('.nama')
console.log(nama.parentElement.parentElement); //ambil kakek
// kalau node gak boleh pake enter dan spasi misal:
console.log(nama.nextSibling);