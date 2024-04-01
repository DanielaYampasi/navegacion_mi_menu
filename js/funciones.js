document.addEventListener("DOMContentLoaded", function(){
//EMPIEZA ACÀ
let glide=  new Glide (".glide",{
    type: 'carousel',
    perView:4,
    gap: 50,
    autoplay:3000, // 3 milisegundo
    hoverpouse: true,

})

glide.mount();
   

});