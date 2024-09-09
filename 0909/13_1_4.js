//button을 눌렀을 때 img태그의 이미지를 변경하기
//profile.jpg -> hl1.jpg-> hl2.jpg

//이미지가 나오는 원리 :  <img src="이미지 경로">
//버튼을 눌렀을 때("click") 
//img태그의 정보를 변수에 저장한다.
//변수에서 src의 값을 setAttribute()를 통해 변경한다.

document.addEventListener("DOMContentLoaded",function(e){
    let button=document.querySelector("input")
    let image=document.querySelector("img")
    let img1 = "img/profile.jpg";
    let img2 = "img/hl 1.jpg";
    let img3 = "img/hl 2.jpg";
    button.addEventListener("click",function(e){
      //img태그의 src를 수정해야함
      let src = image.getAttribute("src");//img태그의 src속성의 값을 변경
        if(src === img1){
            image.setAttribute("src",img2);
        }else if (src === img2){
            image.setAttribute("src",img3);
        }else{
            image.setAttribute("src",img1);
        }

    })
})