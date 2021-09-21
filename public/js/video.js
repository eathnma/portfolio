// grab all video elements
var video = document.querySelectorAll("video");

video.onmouseenter = function () {
  mouseEnter();
};

function mouseEnter() {
  console.log("mouse has entered");
}

// loop through all the videos onclick
for (let i = 0; i < video.length; i++) {
  video[i].addEventListener("click", function () {
    console.log(video[i]);
    if (!video[i].paused) {
      video[i].pause();
    } else {
      video[i].play();
    }
  });
}
