// loop through all the videos onclick
function videoClick(id) {
  var videoChild = id.children[0];
  var imgChild = id.children[1];
  console.log(videoChild, imgChild);

  if (!videoChild.paused) {
    videoChild.pause();
    imgChild.style.display = "block";
  } else {
    videoChild.play();
    imgChild.style.display = "none";
  }
}
