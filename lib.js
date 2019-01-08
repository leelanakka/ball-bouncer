let position = 10;
const makeCounterFromN = function(counter) {
  return counter + 10 + "px";
};

const moveLeft = function() {
  document.getElementById("movement").style.right = makeCounterFromN(position);
  position += 10;
};

const moveRight = function() {
  document.getElementById("movement").style.left = makeCounterFromN(position);
  position += 10;
};

const ballDirection = function() {
  document.getElementById("ball").style.left = "60px";
  document.getElementById("ball").style.top = "70px";
};

const move = function(keyEvent) {
  if (keyEvent.key == "ArrowLeft") moveLeft();
  if (keyEvent.key == "ArrowRight") moveRight();
};

window.onload = ballDirection;
