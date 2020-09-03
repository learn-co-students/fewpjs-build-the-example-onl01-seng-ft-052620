// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//add hidden class to modal
let errorModal = document.getElementById("modal");
errorModal.classList.add("hidden");
let errorMessage = document.getElementById("modal-message")

//add event listener to hearts
addListenerToHearts();


function addListenerToHearts(){
  likes = document.querySelectorAll(".like-glyph");
  likes.forEach(function(like){
    like.addEventListener("click", function(e){
      if (e.target.innerHTML == EMPTY_HEART){
        mimicServerCall()
        .then(function(obj){
          e.target.innerHTML = FULL_HEART
          e.target.classList.add("activated-heart")
        })
        .catch(function(error){
          console.log(error);
          errorMessage.innerHTML = error;
          errorModal.classList.remove("hidden");
          setTimeout(() => errorModal.classList.add("hidden"), 5000);
        })
      }
      else{
        mimicServerCall()
        .then(function(obj){
          e.target.innerHTML = EMPTY_HEART
          e.target.classList.remove("activated-heart")
        })
        .catch(function(error){
          console.log(error);
          errorMessage.innerHTML = error;
          errorModal.classList.remove("hidden");
          setTimeout(() => errorModal.classList.add("hidden"), 5000);
        })
      }
    });
  });
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
