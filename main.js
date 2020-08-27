// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


function selectHeart (heart){
  if (heart == EMPTY_HEART){
    return FULL_HEART
  }
  else {return EMPTY_HEART}
}

// Your JavaScript code goes here!
let errorBar = document.getElementById("modal")
let heartClicker = document.getElementsByClassName("like")

errorBar.className = "hidden";

document.addEventListener("DOMContentLoaded", () => {
})


for (let heart of heartClicker) {
  heart.addEventListener("click", likeALike)
  }

function likeALike (event){
  let heart = event.target
  console.log(heart.innerText)
  mimicServerCall()
  .then(function serverCall(){
    heart.innerText = selectHeart(heart.innerText);
    if (heart.innerText == FULL_HEART)
    {heart.className = "activated-heart"}
    else { heart.className = "like-glyph"}
  })
  .catch(function error(){
  alert("Its all gone pete tong")
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
