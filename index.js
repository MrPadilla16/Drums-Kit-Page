var button="w";
const buttons = document.querySelectorAll('.drum');//this creates an array with 7 elementes which are the 7 buttons

buttons.forEach(function(bucle) {//create a loop for every element of the buttons array that listens which button is clicked to trigger the sound function
bucle.addEventListener('click', passer);
beat=this.innerHTML;
});
function passer(){
beat=this.innerHTML;
sound(beat);
animeMe(beat);
}


document.addEventListener('keypress', function (event) {
    beat=event.key;
    sound(beat);
    animeMe(beat);
})



function sound(beat){
  console.log(beat);

    switch (beat){
      case "w":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;

      case "a":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

      case "s":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
      
      case "d":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

      case "j":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "k":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;    

      case "l":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      default: console.log(this.innerHTML);
    }
    
 
}
  
function animeMe(currentKey){
  var buttonAnime=document.querySelector("."+currentKey);
      buttonAnime.style.opacity= .5;
      buttonAnime.style.color='yellow';
      buttonAnime.style.width='180px';
      buttonAnime.style.height='180px';
      
      resetAnime();
  function resetAnime(){
setTimeout(function() {
  buttonAnime.style.opacity= 1;
  buttonAnime.style.color='red';
  buttonAnime.style.width='150px';
  buttonAnime.style.height='150px';
}, 100);    
}

}
//sound();