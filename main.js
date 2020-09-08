// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = () => document.querySelectorAll('.like-glyph')
const errorModal = () => document.querySelector('#modal')
const errorMessage = () => document.querySelector('#modal-message')

document.addEventListener("DOMContentLoaded", () => {
  addEventListenerToLikeButtons()
});

function addEventListenerToLikeButtons() {
  likeButtons().forEach(likeButton => {
    likeButton.addEventListener('click', event => {
      mimicServerCall()
      .then(function() {
        if (event.target.innerText === EMPTY_HEART){
          likeButton.innerText = FULL_HEART;
          likeButton.classList.add("activated-heart");
        }
        else {
          likeButton.innerText = EMPTY_HEART;
          likeButton.classList.remove("activated-heart");
        }
      })
      .catch(error => {
        errorModal().classList.remove("hidden")
        errorMessage().innerText = error
        setTimeout( () => errorModal().classList.add('hidden'), 5000);
      })
    })
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
