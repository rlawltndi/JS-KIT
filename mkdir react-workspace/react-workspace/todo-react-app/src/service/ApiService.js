import axios from 'axios'
import { API_BASE_URL } from '../api-config'

//api : 호출할 api의 경로
//method : HTTP 메서드(GET, POST, PUT, DELETE)
//request : 요청이 담을 데이터(주로 POST,PUT요청에서 사용)
export async function call(api, method, request) {

    let headers = new Headers({
        "Content-Type": "application/json"
    })
    //로컬 스토리지에서 ACCESS TOKEN 가져오기
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (accessToken && accessToken != null) {
        headers.append("Authorization", "Bearer " + accessToken);
        //"Bearer "토큰의 앞에서 부터 자르고 추출하기 때문에 띄어쓰기 해야함
    }

    //기본 옵션 설정
    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method
    }

    //request가 존재하는 경우 : POST,PUT,DELETE와 같은 GET 이외의 요청일 때
    //요청 본문에 데이터를 담아 보낸다.
    if (request) {
        //객체 형태로 전달된 데이터를 JSON문자열로 변환하여 서버에 전송한다.
        options.data = JSON.stringify(request);
    }

    //axios(option) : 앞서 설정한 option 객체를 사용하여 axios로 Http요청을 보낸다.
    return await axios(options)
        //요청이 성공적으로 처리된 경우 실행되는 코드
        .then(response => {
            return response.data;
        })
        //요청 중에 오류가 발생한 경우 실행되는 코드
        .catch(error => {
            //에러가 발생하면, 이를 console.log로 출력하여 디버깅하거나 문제를 파악할 수 있도록 한다.
            //상태코드가 403일때 login으로 리다이렉트
            if (error.status === 403) {
                window.location.href = "/login";
            }
        })
}

//로그인
export function signin(userDTO) {
    return call("/auth/signin", "POST", userDTO)
        .then((response) => {
            console.log("response:", response);
            alert("로그인 토큰 : " + response.token)

            //토큰이 있을 때 App컴포넌트를 랜더링
            if (response.token) {
                //로컬 스토리지에 토큰 저장
                localStorage.setItem("ACCESS_TOKEN", response.token);
                window.location.href = "/";
            } else {
                window.location.href = "/login";
            }
        })
}

//로그아웃
export function signout() {
    //로컬스토리지의 값을 null로 만든다.
    localStorage.setItem("ACCESS_TOKEN", null);
    window.location.href = "/login";
}

//회원생성
export function signup(userDTO){
    return call("/auth/signup","POST",userDTO)
}