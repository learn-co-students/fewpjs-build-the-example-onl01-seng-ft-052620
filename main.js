// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll("span.like-glyph");
let modal = document.getElementById("modal");

document.addEventListener("DOMContentLoaded", event => {
  hearts.forEach(like => like.addEventListener("click", likePost))
})

function likePost(event) {
  let heart = event.target
  mimicServerCall()
    .then(function() {
      heart.innerHTML = changeHeart(heart)
      heart.classList.toggle("activated-heart")
      })
    .catch(function() {
      modal.classList.remove("hidden")
      setTimeout(() => modal.classList.toggle("hidden"), 5000)
    })
}

function changeHeart(heart) {
  if (heart.innerHTML == EMPTY_HEART){
    return FULL_HEART
    heart.setAttribute("class", "activated-heart")
  } else {
    return EMPTY_HEART
    heart.removeAttribute("class")
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
  });
}
