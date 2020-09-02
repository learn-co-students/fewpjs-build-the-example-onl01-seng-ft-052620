// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function(){

  document.querySelectorAll(".like-glyph").forEach(heart => heart.addEventListener("click", function(e) {
    if (e.target.innerHTML == EMPTY_HEART) {
      mimicServerCall()
        .then(function(obj) {
          e.target.innerHTML = FULL_HEART
          e.target.classList.add("activated-heart")
        })
        .catch(function(error){
          console.log(error)
          let modal = document.querySelector("#modal")
          modal.querySelector("p").innerHTML = error
          modal.classList.remove("hidden")

          setTimeout(function(){modal.classList.add("hidden")},5000)
        })
    
      e.preventDefault()
    } else {
      e.target.innerHTML = EMPTY_HEART
      e.target.classList.remove("activated-heart")
    }
    
  }))


})


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
