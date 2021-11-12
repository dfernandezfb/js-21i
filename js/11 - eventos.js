//! Capturing vs Bubbling

// let padre = document.getElementById('padre');
// let hijo = document.getElementById('hijo');

// padre.addEventListener('click',function(){
//   console.log('Hola soy el padre');
// },true);

// hijo.addEventListener('click', function(){
//   console.log('Hola soy el hijo');
// },true)

//! Mascota cuadrado
let x= 0;
let y= 0;
let mascota = document.querySelector('#mascota');
let corral = document.querySelector('#corral');

function moverMascota(event){
  event.preventDefault();
  console.log(event.code);
  let mascotaLimit = mascota.getBoundingClientRect();
  let corralLimit = corral.getBoundingClientRect();
  switch(event.keyCode){
    case 37:
      if(mascotaLimit.left > corralLimit.left){
        x--
      }
    break;
    case 38:
      if(mascotaLimit.top > corralLimit.top){
        y--
      }
    break;
    case 39:
      if(mascotaLimit.right < corralLimit.right){
        x++
      }
    break;
    case 40:
      if(mascotaLimit.bottom < corralLimit.bottom){
        y++
      }
    break;
  }
  mascota.style.transform = `translate(${x*10}px,${y*10}px)`

}

document.addEventListener('keydown', moverMascota);
mascota.addEventListener('click', cambiarColor);

function cambiarColor(){
  if(mascota.classList.contains('is-active')){
    mascota.classList.remove('is-active')
  }else{
    mascota.classList.add('is-active')
  }
}
