//첫 페이지 버튼 누르면 다음 페이지로 슬라이드 되는 코드

const index_location = document.querySelector(".main_index").offsetTop;
const slide_btn = document.querySelector(".next_page_btn");

function move_scroll(event) {
    event.preventDefault();
    window.scrollTo({
        top: index_location,
        behavior: "smooth"
    });
}

slide_btn.addEventListener("click", move_scroll);

//스크롤시 달이 떨어지는 코드인데, 수정 요망 
