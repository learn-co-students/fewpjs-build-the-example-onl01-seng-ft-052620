// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', ()=>{
  likeHearts = document.querySelectorAll('.like-glyph');
  
  function handleError(error){
    errorModal = document.querySelector('#modal');
    errorMessage = document.querySelector('#modal p#modal-message');
    errorMessage.textContent = `${error}`;
    errorModal.classList.remove('hidden');
    window.setTimeout(()=> {
      errorModal.classList.add('hidden');
    }, 5000);
  }

  function handleSuccess(heart){
    if ([... heart.classList.values()].includes('activated-heart')){
      heart.classList.remove('activated-heart');
      heart.textContent = EMPTY_HEART;
    } else {
      heart.classList.add('activated-heart');
      heart.textContent = FULL_HEART;
    }
  }

  for (const heart of likeHearts){
    heart.addEventListener('click', (e)=>{
      const request = mimicServerCall();
      request.catch((error) => handleError(error))
        .then((success) => {
          if (success){handleSuccess(e.target)};
        });
    })
  }
});



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
