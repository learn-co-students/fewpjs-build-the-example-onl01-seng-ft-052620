// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let likedButton = null

// Your JavaScript code goes here!
const errorDiv = document.getElementById('modal')
errorDiv.className += "hidden"

const likeButtons = document.querySelectorAll('.like-glyph')
for (const button of likeButtons) {
  button.addEventListener('click', function() {
    likedButton = this
    mimicServerCall()
  })
}

function updateHeart() {
  if (likedButton.className === 'like-glyph') {
    likedButton.innerText = FULL_HEART
    likedButton.className += "activated-heart"
  } else {
    likedButton.innerText = EMPTY_HEART
    likedButton.className = "like-glyph"
  }
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
  })
  .then(response => {
    updateHeart()
  })
  .catch((error) => {
    errorDiv.classList.remove("hidden")
    errorDiv.innerText = `${error}`
    setTimeout(function() {errorDiv.className = "hidden"}, 5000)
  })
}
