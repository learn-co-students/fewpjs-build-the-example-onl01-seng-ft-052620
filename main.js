// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



let mydiv = document.querySelectorAll(".like")

function myCallBack(e) {
mimicServerCall()
  .then(resp => { 
    const likeEvent = e.target
    if(likeEvent.innerHTML === FULL_HEART) {
likeEvent.innerHTML = EMPTY_HEART
    }
    else{
    likeEvent.className = ".activated-heart"
    likeEvent.innerHTML = FULL_HEART
    likeEvent.style.color = 'red'
    }
  })

  .catch(error => {
    const modal = document.getElementById("modal")
    modal.className = ""
    document.getElementsById("modal-message").innerText = error
    setTimeout( function(){ 
      modal.className = "hidden"
    }, 5000)
    })   
}

for(let x of mydiv) {
 x.addEventListener('click', myCallBack)

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
