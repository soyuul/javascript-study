// for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

for(let i=0; i<10; i++){
  let x = i;
  if(x % 2 === 0){
    document.write(x);
  }
}