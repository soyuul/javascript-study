// for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

for(let i=0; i<10; i++){
  let a = String(i);
 if(a % 2 === 0){
   document.write(a);
   document.write(typeof a);
 }
}