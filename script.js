//find canvas & create a context
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
canvas.width = 550;
canvas.height= 400;

let colorChoice = document.getElementById("color");
let radius = document.getElementById("range");
// let undoButton = document.querySelector("#undo"); -- not working
let clearButton = document.querySelector("#clear");
let saveButton = document.querySelector("#save");




//drawing the image will creat image & set source
let image = new Image();
image.src = "images/blank.jpg";

//draw image
image.addEventListener("load", function () {
    context.drawImage(image, 0, 0);
    input.disabled = false;
});

// Keep track of whether the mouse button has been pressed down or not.
let mousedown = false;

canvas.addEventListener("mousedown", function() {
    mousedown = true
});

canvas.addEventListener("mouseup", function() {
    mousedown = false
});

canvas.addEventListener("mousemove", function() {

    // If the mouse button is not pressed down, do not draw.
    if (!mousedown) { return }

    // event is a built-in variable, contains the event that triggered this function
    // get the x, y location of the event
    let x = event.offsetX;
    let y = event.offsetY;   //offsetX, offsetY, may not work in older browsers

    context.beginPath();
    context.arc(x-5,y-5,radius.value,0,2*Math.PI);
    //set color of circle to color input
    context.fillStyle  = colorChoice.value;
    context.fill();
});

clearButton.addEventListener("click", function () {
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
});

// download function -- some help from examples on stack overflow
function download(){
    let download = document.getElementById("download");
    let image = document.getElementById("canvas").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);

}

saveButton.addEventListener("click", download);
