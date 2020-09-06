//const { server } = require("sinon")

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = () => document.querySelectorAll("li.like")
const hearts = () => document.querySelectorAll(".like-glyph")
const errDiv = () => document.querySelector("#modal")


  for (let i = 0; i < likes().length; i++ ){
    likes()[i].addEventListener("click", function(){
    
    mimicServerCall()
    .then(function(){ 
      if (hearts()[i].innerHTML === EMPTY_HEART){
      hearts()[i].innerHTML = FULL_HEART
      hearts()[i].classList.add("activated-heart")
      } else {
        hearts()[i].classList.remove("activated-heart")
        hearts()[i].innerHTML = EMPTY_HEART
      }
    })
    .catch(function(error) {
      errDiv().classList.remove("hidden")
      errDiv().textContent = error
      setTimeout(function(){errDiv().classList.add("hidden")}, 2000)
    });
    

})
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
