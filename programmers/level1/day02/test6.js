// 숫자 비교하기

// 문제
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
  let answer = 0;
  if (0 <= num1 <= 10000 && 0 <= num2 <= 10000) {
    if (num1 === num2) {
      return (answer = 1);
    } else {
      return (answer = -1);
    }
  }
  return answer;
}

// 이중 if문으로 만들어 줬지만 가독성에 문제가 있다 이때 삼항연산자를 사용하면 훨씬 보기 좋다.

function solution(num1, num2){
  let answer = num1 === num2 ? 1 : -1;
  return answer;
}


