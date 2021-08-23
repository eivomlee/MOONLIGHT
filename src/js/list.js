const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie_list");

arrows.forEach((arrow, i)=>{
    const itemNumber = movieList[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if(itemNumber - (5 + clickCounter) >= 0){
            movieList[i].style.transform = `translateX(${
                movieList[i].computedStyleMap().get("transform")[0].x.value
            -345}px)`;
        } else{
            movieList[i].style.transform = "translateX(0)"
            clickCounter = 0;
        }
    });
});