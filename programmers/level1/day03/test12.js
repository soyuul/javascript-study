// 짝수는 싫어요

// 문제
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n){
  let answer =[];
  for(let i=1; i<=n; i++){
    if(i % 2 === 1){
      answer.push(i);
    } 
  }
  return answer;
}

// for문으로 n이 1보다 큰 수일 때의 나머지가 1이 남는 수들을 push()를 사용해 넣어주고 answer를 return해주었다.

function solution(n){
  let answer = [];
  for(let i=1; i<n; i+=2) answer.push(i)

  return answer;
}

// 위와 같은 코드를 적으면 if문을 사용했던 코드보다 훨씬 깔끔하고 코드의 길이도 줄어든다.