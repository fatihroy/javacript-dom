function pilihan_komputer() {
      // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return'orang';
    return 'semut';
    
}
// bikin fungsi spy gambar komputernya berputar dulu

     function putar() {
          imgCom = document.querySelector('.img-komputer')
          gambar = ['gajah', 'semut', 'orang']
          let i = 0
          const waktuAwal = new Date().getTime()
     setInterval(function()  {
          if (new Date().getTime() - waktuAwal > 1000) {
               clearInterval
               return 0;
          }
          imgCom.setAttribute('src', 'img/' + gambar[i++] +'.png')
          if (i == gambar.length) {
               i = 0
          }
     }, 100);
          }
     
 



function hasil(com, player) {
     // menentukan rules
     
     if( player == com) return  'SERI!';
     if( player == 'gajah' )    return ( com == 'orang' ) ? 'MENANG!' : 'KALAH!';
     if( player == 'orang' )  return ( com == 'gajah' ) ? 'KALAH!' : 'MENANG!';
     if( player == 'semut' ) return ( com == 'orang' ) ? 'KALAH' : 'MENANG!';
   
 
}
  

// cara efektif
               const imgPilihan = document.querySelectorAll('li img')
               imgPilihan.forEach(function (gambar) { //parameternya adalah gambar yang ada di li


          gambar.addEventListener('click', function () {
                    const player = gambar

                    const pilihanKomputer = pilihan_komputer()
                    const pilihanPlayer = player.className // mengambil nama kelas yaitu misal: gajah
                    hasil = hasil(pilihanKomputer, pilihanPlayer)

           // jalankan fungsi putar
                    putar()
                
                    setTimeout(function () {
                         // ganti gambar pilihan komputer
                            const imgcom = document.querySelector('.img-komputer')
                            imgcom.setAttribute('src', 'img/'+ pilihanKomputer + '.png')
             
                            // tampilkan hasil
                            const info = document.querySelector('.info')
                            info.innerHTML = hasil
                                 }, 1000)
              



})})



// cara yang tydak efektif
// // menangkap pilihan semut
// const Psemut = document.querySelector('.semut')
// Psemut.addEventListener('click', function () {
//      const pilihanKomputer = pilihan_komputer()
//      const pilihanPlayer = Psemut.className// mengambil nama kelas yaitu gajah
// hasil = hasil(pilihanKomputer, pilihanPlayer)
     
// // ganti gambar pilihan komputer
// const imgcom = document.querySelector('.img-komputer')
// imgcom.setAttribute('src', 'img/'+ pilihanKomputer + '.png')

// // tampilkan hasil
// const info = document.querySelector('.info')
// info.innerHTML = hasil
// })



// // menangkap pilihan orang
// const Porang = document.querySelector('.orang')
// Porang.addEventListener('click', function () {
//      const pilihanKomputer = pilihan_komputer()
//      const pilihanPlayer = Porang.className// mengambil nama kelas yaitu gajah
// hasil = hasil(pilihanKomputer, pilihanPlayer)
     
// // ganti gambar pilihan komputer
// const imgcom = document.querySelector('.img-komputer')
// imgcom.setAttribute('src', 'img/'+ pilihanKomputer + '.png')

// // tampilkan hasil
// const info = document.querySelector('.info')
// info.innerHTML = hasil
// })

// // menangkap pilihan gajah
// const Pgajah = document.querySelector('.gajah')
// Pgajah.addEventListener('click', function () {
//      const pilihanKomputer = pilihan_komputer()
//      const pilihanPlayer = Pgajah.className// mengambil nama kelas yaitu gajah
// hasil = hasil(pilihanKomputer, pilihanPlayer)
     
// // ganti gambar pilihan komputer
// const imgcom = document.querySelector('.img-komputer')
// imgcom.setAttribute('src', 'img/'+ pilihanKomputer + '.png')

// // tampilkan hasil
// const info = document.querySelector('.info')
// info.innerHTML = hasil
// })
