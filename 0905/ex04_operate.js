//산술연산자
let l1 = 10;
let l2 = 7;

console.log(l1 + l2);
console.log(l1 - l2);
console.log(l1 * l2);
console.log(l1 / l2);//몫 과 나머지
console.log(l1 % l2);//나머지

//대입 연산자
//데이터를 변수에 저장할 때 사용
let A = 3;
let B = A;

console.log('B : '+ B);

A += B // A = A + B;
a *= b // A = A * B;

//증감연산자
//증가연산자 - 숫자형 데이터를 1씩 증가
//++변수 또는 변수++

//감소연산자 - 숫자형 데이터를 1씩 감소
//--변수 또는 변수--

var a = 5;
var b = ++a;
console.log(b);
var b = a++;
console.log(b); //6

//비교연산자
//크다,작다,크거나 같다, 작거나 같다, 같다, 같지 않다.

var a = 10;
var b = 7;
console.log(a > b);
//같다를 비교할 때
console.log("== : "+ (10 =='10'));//값이 일치하면 true
console.log("=== : " + (10 ==='10')); // 값과 데이터 타입이 일치할 때 true
console.log("!= : "+ (10 !='10'));
console.log("!== : "+ (10 !=='10'));

//논리연산자
//&&
//||
//!

console.log(true && false); // and 
console.log(true || false); // or 
console.log(!true);// not
