// alert("connected");
// alert first button clicked
// document.querySelector("button").addEventListener("click",handleclick);
// function handleclick(){
//    alert("button clicked");
// }

// Anonymous function
// alert first button clicked
// document.querySelector("button").addEventListener("click", function(){
//    alert("button claicked");

// })
// every button clicked
var numberofdrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("button cliacked")
    //  console.log(this.innerHTML);
    //  this.style.color="white";
    var buttonInnerHTML = this.innerHTML;
    make_sound(buttonInnerHTML);
    button_animation(buttonInnerHTML)
  });

}

// document.addEventListener("keypress", function () {
//   alert("key press")
// });

// document.addEventListener("keypress", function (event) {
//   console.log(event)
// });

document.addEventListener("keypress", function (event) {
  make_sound(event.key);
  button_animation(event.key)
});



function make_sound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("inerHTML")
      break;
  }
}

function button_animation(current_key) {

  var activeButton = document.querySelector("." + current_key)

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove('pressed')
  }, 100);

}