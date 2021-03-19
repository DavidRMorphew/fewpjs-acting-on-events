// Your code here
let dodger = document.querySelector('div#dodger');
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener('keydown', function(event) {
    // console.log(event);
    if (event.key === "ArrowRight") {
        moveDodgerRight()
    } else if (event.key === "ArrowLeft") {
        moveDodgerLeft()
    }
})

function moveDodgerLeft() {
    // console.log("left engaged");
    let position = parseInt(dodger.style.left.replace("px", ""));    
    if (position > 0) {
        dodger.style.left = `${position - 1}px`;
    }
    // console.log(position);
}

function moveDodgerRight() {
    // console.log("right engaged");
    let position = parseInt(dodger.style.left.replace("px", ""));
    if (position < 360) {
        dodger.style.left = `${position + 1}px`;
    }
    // console.log(position);
}