const container = document.querySelector('.container')
const big = document.querySelector('.big')
const thumbs = document.querySelectorAll('.thumb')
container.addEventListener('click', function (e) {
    // cek apakah yang diklik adalah thumb
if (e.target.className == 'thumb') {
    big.src = e.target.src // src jumbo akan diganti dengan srcnya thumb
    big.classList.add('fade') //big dikasih class baru yaitu fade jadinya hilang karena animasinya kembali keawal 
    setTimeout(function(){
        big.classList.remove('fade')
    }, 500);
    thumbs.forEach(function(thumb){
        // if(thumb.classList.contains('active')){
        //     thumb.classList.remove('active')
        // }
      
        thumb.className = 'thumb'
       
    })
    e.target.classList.add('active')
    
}
})
