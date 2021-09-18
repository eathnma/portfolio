// counts projects to display
var project = 0;
var cursorSize = 9;

// grab dynamic div
var followImage = document.getElementById('project-box');
// grab static div
var dropImage = document.getElementById("project-box-static");
// grab body
var body = document.getElementsByTagName("BODY")[0];

// grab position of image
var elem = document.getElementById("image");

// if elem exists, run mousemove functions
if(elem){
    // fixes position of image to mouse position
    const onMousemove = (e) => {
        var rect = elem.getBoundingClientRect();
        
        // 9px is to take into account the cursor...
        followImage.style.top = (e.pageY - rect.height/2 + cursorSize) + "px";
        followImage.style.left = (e.pageX - rect.width/2 + cursorSize) + "px";
        followImage.style.position = "absolute"; 
        followImage.zIndex = 1;   
        // followImage.style.backgroundColor = "red";
        // console.log("mouse moving!");
    }   

// whenever the mouse moves, run onMouseMove function
window.addEventListener('mousemove', onMousemove);

}

// Define Variables 

// ONCLICK FUNCTION FOR CLICKING
window.onclick = function (event) {

    // grab coordinates from each of the clicks
    var cursorX = event.pageX;
    var cursorY = event.pageY;

    // print out how many clicks 
    console.log(project);

    switch (project) {
        case 0:
            project = 1;
            dropCluster(cursorX, cursorY, "public/assets/main/hi-five.svg");
            break;

        case 1:
            project = 2;
            dropCluster(cursorX, cursorY, "public/assets/main/walk.svg");

            break;
        
        case 2:
            project = 3;
            dropCluster(cursorX, cursorY, "public/assets/main/walk.svg");
            break;
    
        case 3:
            project = 4;
            break;
        
        // Regular Cursor
        case 4:
            project = 5;
            break;
    }
}

// build html cluster
function dropCluster(cX, cY, nextImg){
    var img = document.createElement("img");

    // grab image sizes from previous retrieved image
    var imageHeight = document.getElementById("image").height;
    var imageWidth = document.getElementById("image").width;

    // set path
    img.src = elem.src;
    
    // set position of image element
    img.style.position = "absolute";
    img.style.width = imageWidth + 'px';
    img.style.height = imageHeight + 'px';
    img.style.zIndex = 0;

    // Values for clicking down..
    img.style.top = cY - imageHeight/2 + cursorSize + "px";
    img.style.left = cX - imageWidth/2 + cursorSize + "px";

    body.appendChild(img);

    // set new image for the mouse
    document.getElementById("image").src = nextImg;
}


// disable user scroll
function noScroll() {
    window.scrollTo(0, 0);
  }
  
  // add listener to disable scroll
  window.addEventListener('scroll', noScroll);


