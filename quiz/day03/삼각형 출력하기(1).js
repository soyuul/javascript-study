// 삼각형 출력하기

// 출력
// *
// **
// ***
// ****
// *****



let star = "*";

for(let i=1; i<6; i++){
  for(let j=0; j<i; j++){
    document.write(star);
  }
  document.write("<br/>");
}