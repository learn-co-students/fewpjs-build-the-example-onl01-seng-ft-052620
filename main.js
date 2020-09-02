// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


function heartStates (heart){
  if (heart == EMPTY_HEART){
    return FULL_HEART
  }
  else {return EMPTY_HEART}
}

// Your JavaScript code goes here!
let errorBar = document.getElementById("modal")
let likeHearts = document.getElementsByClassName("like");

errorBar.className = "hidden";

for (let heart of likeHearts) {
  heart.addEventListener("click", likeAction)
}

function likeAction(e) {
  let heart = e.target
  console.log(heart.innerText)
  mimicServerCall()
  .then(function(){
    heart.innerText = heartStates(heart.innerText);
      if (heart.innerText = FULL_HEART)
      {heart.className = "activated-heart"}
      else { heart.className = "like-glyph"}

})
.catch(function() {
  alert("Puffy Errors!!!")
  errorBar.className = "";
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
