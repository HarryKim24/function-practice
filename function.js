// 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다
function foo(arg) {
  arg();
}

function bar() {
  console.log('bar');
}

foo(bar); // bar


// 자바스크립트 함수는 함수의 반환값이 될 수 있다
function foo(arg) {
  return arg;
}

function bar() {
  console.log('bar');
}

foo(bar)(); // bar


// 자바스크립트 함수는 할당명령문의 대상이 될 수 있다
// 자바스크립트 함수는 동일비교의 대상이 될 수 있다
const foo = function (arg) {
  return arg;
}

foo(1); // 1


// 기본값 매개변수 default function parameter
function foo(arg = 1) {
  console.log(arg);
}
foo(); // 1


// 나머지 매개변수 Rest parameter
function foo(arg, ...rest) {
  console.log(rest);
}
foo(1, 2, 3, 4); // [2, 3, 4]


// arguments 객체
function foo(arg, ...rest) {
  console.log(arguments);
}
foo(1, 2, 3, 4); // {'0': 1, '1': 2, '2': 3, '3': 4, length: 4, callee: f foo(0), __proto__: {}}


// 함수 선언문
function foo() {
  console.log('foo');
}
foo();


// 함수 표현식
const foo = function () {
  console.log('foo');
}
foo();


// Function 생성자 함수
const foo = new Function("console.log('foo')");


// 화살표 함수
const foo = () => {
  console.log('foo');
}


// IIFE(즉시 실행 함수)
(function foo() {
  console.log('foo');
})();


// 재귀함수
function foo(arg) {
  if (arg === 3) return;

  console.log(arg);
  foo(arg + 1);
}
foo(1);


// 중첩함수
function foo(arg) {
  function bar() {
    console.log(arg);
  }
  bar();
}
foo(1);


// 콜백함수
function foo(arg) {
  arg();
}

foo(() => {
  console.log(1);
});