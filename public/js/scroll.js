window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log("scrolling");
  // 1
  if (window.scrollY < 2500) {
    console.log("switch content!");
    one.style.color = "black";
  } else {
    one.style.color = "grey";
  }
  //2
  if (window.scrollY > 2500 && window.scrollY < 5900) {
    contents.style.color = "white";
    two.style.color = "white";
  } else {
    two.style.color = "grey";
    contents.style.color = "grey";
  }
  //3
  if (window.scrollY > 5900 && window.scrollY < 13925) {
    three.style.color = "black";
  } else {
    three.style.color = "grey";
  }
  //4
  if (window.scrollY > 13925) {
    four.style.color = "black";
  } else {
    four.style.color = "grey";
  }
});
