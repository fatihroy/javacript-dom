// ubah warna backoground

// 1. ubah warna background kasus pertama --> pake button html
    // tangkap button
    const tUbahWarna = document.getElementsByTagName('button')[0]
    // bikin fungdi spy background body berubah
    tUbahWarna.onclick = function () {
        // ubah warna body cara 1
        // document.body.style.backgroundColor = 'red'

         // ubah warna body cara 2
        // document.body.setAttribute('class', 'biru')

        // ubah warna body cara 3
        document.body.classList.toggle('biru-royal')


    } 


// 2. ubah warna background kasus 2 --> bikin button di javascript
   
    // bikin button
    const tUbahWarna2 = document.createElement('button')
    // bikin teks + masukin teks + tampilkan
    const txtButton = document.createTextNode('Ubah WarnaAcak')
    tUbahWarna2.appendChild(txtButton)
    tUbahWarna.after(tUbahWarna2) // diletakkan setelah button yang pertama

    // bikin function
    tUbahWarna2.addEventListener('click', function () {
        // dapatkan no acak 1 - 255
        //math.round = membulatkan keatas, math.floor = membulatkan kebawah, math.ceil() = membulatkan keatas
           r = Math.round(Math.random() * 255 + 1) 
           g = Math.round(Math.random() * 255 + 1) 
           b = Math.round(Math.random() * 255 + 1)
           
        document.body.style.backgroundColor = 'rgb('+ r + ',' + g + ','+ b +')'
        
    })



// 3. ubah warna background kasus 3 --> bikin slider di html diatur dan dibaca di javascript
const SliderMerah = document.querySelector('input[name=SliderMerah]')
const SliderHijau = document.querySelector('input[name=SliderHijau]')
const SliderBiru = document.querySelector('input[name=SliderBiru]')
// kalau inputnya diganti change maka perubahan warna akan terjadi bila dilepas

SliderMerah.addEventListener('input', function () {
const r = SliderMerah.Value
const g = SliderHijau.Value
const b = SliderBiru.Value
document.body.style.backgroundColor = 'rgb('+ r + ','+g+','+ b +')'
})

SliderHijau.addEventListener('input', function () {
    const r = SliderMerah.Value
    const g = SliderHijau.Value
    const b = SliderBiru.Value
    document.body.style.backgroundColor = 'rgb('+ r + ','+g+','+ b +')'
    })

SliderBiru.addEventListener('input', function () {
    const r = SliderMerah.Value
    const g = SliderHijau.Value
    const b = SliderBiru.Value
    document.body.style.backgroundColor = 'rgb('+ r + ','+g+','+ b +')'
        })