window.onload = function() {
    load_image();
}
function load_image() {
    const content = document.querySelector(".content");
    content.style.backgroundImage = `url("src/img/poster1.jpeg")`;
    content.style.backgroundSize = "100% 100%";
    content.style.repeat = "no-repeat";
}