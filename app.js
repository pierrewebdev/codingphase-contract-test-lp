const glider = new Glide(".glide", {
    type: "slider",
    startAt: 1,
    perView: 3,
    focusAt: "center"
}).mount();

function moveLeft(){
    glider.go("<");
}

function moveRight(){
    glider.go(">");
}