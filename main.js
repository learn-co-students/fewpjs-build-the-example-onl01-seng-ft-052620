// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.getElementById("modal")
// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function(event){
const glyphs = document.querySelectorAll(".like-glyph", ".activated_hearts")

activated_hearts = []

    for (var i = 0; i < glyphs.length; i++) {
      let glyph = glyphs[i]
      glyph.addEventListener("click", function(event) {
        let heart = event.target
        mimicServerCall()
        .then(resp => {
         like_or_unlike(heart)
        })
        .catch(resp => {
          console.log(resp)
          errorModal.className = "not-hidden"
          setTimeout(function(){ errorModal.className = "hidden" }, 5000)
        })
      })
    }

  function like_or_unlike(heart){
  if (heart.className == "like-glyph") {
    heart.textContent = FULL_HEART
    heart.className = "activated-heart"
  } else {
    heart.textContent = EMPTY_HEART
    heart.className = "like-glyph"
    }
  }
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
