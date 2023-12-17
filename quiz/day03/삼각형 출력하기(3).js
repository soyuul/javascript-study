// 삼각형 출력하기

// 출력
// *****
// ****
// ***
// **
// *


let star = "*";

for(let i=5; i>0; i--){
  for(let j=0; j<i; j++){
    document.write(star);
  }
  document.write("<br/>");
}