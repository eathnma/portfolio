// grab all video elements
const video = document.querySelectorAll("video");
// loop through all the videos
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
