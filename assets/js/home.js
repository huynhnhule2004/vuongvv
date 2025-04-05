let arrayImage = [
    "assets/images/portfolio/anh1.jpg",
    "assets/images/portfolio/anh2.jpg",
    "assets/images/portfolio/anh3.jpg",
    "assets/images/portfolio/anh4.jpg",
    "assets/images/portfolio/anh5.jpg",

];
let index = 0;

let interval = setInterval(function () {
    let banner = document.getElementById("banner");
    if (index == arrayImage.length - 1) {
        index = 0;
    } else {
        index++;
    }
    banner.setAttribute("src", arrayImage[index]);
}, 3000);

let btnPrev = document.getElementById("btnPrev");
let btnNext = document.getElementById("btnNext");