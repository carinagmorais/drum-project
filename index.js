function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return; //This stops the function fro running

  key.classList.add("playing");
  audio.currentTime = 0; //Rewind fast to the start
  audio.play();
}

window.addEventListener("keydown", playSound);

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

let keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition)); //To remove transition data
window.addEventListener("keydown", playSound);
