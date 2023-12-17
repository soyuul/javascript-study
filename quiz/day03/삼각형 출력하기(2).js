// 삼각형 출력하기

// 출력
// *****
//  ****
//   ***
//    **
//     *


for(let i=0; i<5; i++){
  let star ="";
  for(let j=0; j<i; j++){
    star += "&nbsp";
  }
  for(let k=5; k>i; k--){
    star += "*";
  }
  document.write("<br/>");
  document.write(star);
}


// 내가 쓴 오답

// let star = "*";
// let nbsp = "&nbsp;";

// for(let i=5; i>0; i--){
//   for(let k=0; k<4; k++){
//     for(let l=4; l>k; l--){
//       document.write(nbsp);
//     }
//     for(let j=0; j<i; j++){
//       document.write(star);
//     }
//     document.write("<br/>");    
//   }
// }