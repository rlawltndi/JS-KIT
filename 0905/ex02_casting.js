//타입캐스팅
//데이터 타입의 종류를 바꾸는 행위
//String()
console.log(String(3)+1);

//Number()
console.log(Number('3')+1);//4
console.log(Number(false));//0
console.log(Number('abc'));// NaN : Not a Number

//Boolean()
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(3)); //true
console.log(Boolean('kimjisu')); //true
console.log(Boolean('false')); // true

//인덱싱과 슬라이싱
//index : 0부터 순차적으로 증가하는 정수값
//인덱싱은 데이터를 분석하여 우리가 원하는 순서에 위치한 데이터를 뽑는 것
console.log("abcde"[2]);

//여러개의 값으로 자르고 싶다면 slice메서드를 이용한다.
console.log("abcdefg".slice(3,5)); // slice(a,b) : a이상 b미만 출력