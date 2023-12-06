// 피자 나눠먹기 (1)

// 문제
// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다.
// 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를
// return 하는 solution 함수를 완성해보세요.

function solution(n){
  let people = 7;
  let piz = 1;

  while(true){
    if(n <=people){
      return piz;
    }else{
      people *=2;
      piz +=1;
    }
  }
}

// 위 코드는 내가 생각해서 푼거.. 하지만 오류가 있다

function solution(n){
  let people = 7;
  let piz = 1;

  while(n >people){
    people +=7;
    piz++;
  }
  return piz;
}

// 처음 코드를 수정했다 오류 해결!


function solution(n){
  return Math.ceil(n/7);
}

// 지티 짜증나