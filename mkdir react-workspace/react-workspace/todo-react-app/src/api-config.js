let backendHost;

//window 객체 : 브라우저에서 실행되는 모든 코드에 접근할 수 있는 최상위 객체
//웹 페이지에서 실행되는 모든 JavaScript는 window객체를 기반으로 동작한다.

//window.location : 현재 웹 페이지의 URL정보를 다루는 객체

//window.location.hostanme : 현재 페이지의 호스트 이름(도메인)을 반환
//호스트 이름은 도메인의 이름 부분으로, 프로토콜, 경로, 쿼리 문자열을 제외한 부분이다.

//왼쪽부터 차례대로 진행되며 false, null, undefined가 나오면 평가를 중단하고 값을 반환한다.
const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost"){
    backendHost = "http://localhost:5000"
} else {
    backendHost = "http://api.todo-rlawltndi.store"
}

export const API_BASE_URL = `${backendHost}`


