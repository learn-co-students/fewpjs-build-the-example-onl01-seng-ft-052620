// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal')
  const hearts = document.querySelectorAll('.like-glyph')
  function displayEror(){
    module.removeAttribute('class')
    setTimeOut(function(){
      modal.setAttribute('class','hidden');
      callback();
    },10000);
  }

  function likeMe(heart){
    heart.addEventListener('click', (e) => {
      if (e.target.innerHTML === EMPTY_HEART) {
        mimicServerCall().then(() => {
          e.target.innerHTML = FULL_HEART;
          e.target.setAttribute('class', 'like-glyph activated-heart')
        }).catch(() => {
          displayError(function(){
            e.target.innerHTML = FULL_HEART;
            e.target.setAttribute('class', 'like-glyph activated-heart');
          });
        });
      }
      else{
        e.target.innerHTML = EMPTY_HEART;
        e.target.setAttribute('class', 'like-glyph');
      }
    })
  }

  hearts.forEach(heart => {
    likeMe(heart)
  })
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
