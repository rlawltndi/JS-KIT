document.addEventListener("DOMContentLoaded",function(e){
    let button = document.querySelector("input");
    let p = document.querySelector("p");

    //버튼을 클릭했을 때
    button.addEventListener("click",function(e){
        //p태그에 들어있는 내용을 수정
        //textContent : 태그에 들어있는 content의 내용을 반환
        p.textContent ="JS로 입력함"
    })
})

