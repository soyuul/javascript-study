// while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

let a = 0;
let b = [];

while(a<10){
  if(a % 2 === 1){
    b.push(a);
  }
  a++;
}

b.sort((a,b) => b-a);
console.log(b);