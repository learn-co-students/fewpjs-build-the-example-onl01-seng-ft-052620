// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorStop = document.getElementById("modal")
let likeClassSelect = document.getElementsByClassName("like")

errorStop.className = "hidden"

document.addEventListener("DOMContentLoaded", () => {
})

function heartToggle (heart) {
  if (heart == EMPTY_HEART){
    return FULL_HEART
  }
  else {return EMPTY_HEART}
}

for (let heart of likeClassSelect) {
  heart.addEventListener("click", clickLike)
}

function clickLike (event) {
  let heart = event.target
  console.log(heart.innerText)
  mimicServerCall()
  .then(function () {
    heart.innerText = heartToggle(heart.innerText)
    if (heart.innerText == FULL_HEART)
    {heart.className = "activated-heart"}
    else { heart.className = "like-glyph"}
  })
  .catch(function () {
  errorStop.className = ""
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
