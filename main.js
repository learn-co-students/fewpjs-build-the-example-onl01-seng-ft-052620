// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!
const errorModal = document.querySelector('#modal') 
const likeBtns = () => document.querySelectorAll('.like-glyph')
const errorMessage = document.querySelector('#modal-message')
document.addEventListener("DOMContentLoaded", () => {
  addEventListenerToLikeBtns()

});

function delayedClearError() {
setTimeout(() => errorModal.classList.toggle("hidden"), 5000)
}

 

function addEventListenerToLikeBtns() {
  likeBtns().forEach( item => {
    item.addEventListener('click', (e) => {
      mimicServerCall()
      .then(response => {
        e.target.classList.toggle('activated-heart')
      })
      .catch(error => {
        console.log(error)
        errorMessage.innerText = error
        errorModal.classList.toggle("hidden")
        delayedClearError()
      })
    })
  });
};

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
