function makeHamburgerMenuWork() {
    var hamburgerLinks = document.getElementById("myLinks");
    if (hamburgerLinks.style.display === "block") {
      hamburgerLinks.style.display = "none";
    } else {
      hamburgerLinks.style.display = "block";
    }
  }

function createGlider(){
    const glider = new Glide(".glide", {
        type: "slider",
        startAt: 1,
        perView: 3,
        breakpoints: {
            768: {
                perView: 1
            }
        },
        focusAt: "center"
    }).mount();

    return glider;
}

function moveLeft(){
    carousel.go("<");
}

function moveRight(){
    carousel.go(">");
}

const carousel = createGlider();
