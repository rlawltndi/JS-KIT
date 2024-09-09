document.addEventListener("DOMContentLoaded", function(e){
    //웹 문서에서key다운이라는 id 값을 가진 태그의 정보를 변경
    let keydown = document.querySelector("#keydown");
    //키가 눌렸을 때 실행(keydown)
    keydown.addEventListener("keydown",function(e){
        //key라는 키는 누른 버튼에 대한 정보를 가지고 있다.
        console.log(e.key);
        //q를 눌렀을 때 "This is Q라는 문구를 가진 경고창 띄우기"
        if(e.key === 'q'){
        alert("This is Q");
        }
    })

    //change 이벤트 만들고 e.target.value 콘솔에 출력하기
    let change=document.querySelector("#change");
    //change의 경우 내용이 변경되고 포커스가 벗어나면 적용
    change.addEventListener("change",function(e){
        console.log(e.target.value);
    })

    let input=document.querySelector("input");
    input.addEventListener("input",function(e){
        console.log(e.target.value);
    })
})