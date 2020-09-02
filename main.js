// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function addListenerToHearts(likeHearts) {
  for (let glyph of likeHearts) {
    glyph.innerHTML = EMPTY_HEART
    glyph.addEventListener("click", () => {
      if (glyph.innerHTML == EMPTY_HEART) {
      mimicServerCall()
        .then(function(response) {
          console.log(response)
          if (response == "Pretend remote server notified of action!") {
            glyph.innerHTML = FULL_HEART
            glyph.className = 'activated-heart'
          } else {
              debugger 
              alert("Bad things!")
              const errorModal = document.getElementById('modal')
              const errorMessage = document.getElementById('modal-message')
              errorModal.classList.remove('hidden')
              errorMessage.innerText = error.message
          }
        })
      } else {
        glyph.innerHTML = EMPTY_HEART
        glyph.classList.remove('activated-heart')
      }
    })
    }
}

const errorModal = document.getElementById('modal')
errorModal.className = 'hidden'

document.addEventListener("DOMContentLoaded", () => {

const likeHearts = document.getElementsByClassName('like-glyph')
addListenerToHearts(likeHearts)

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
