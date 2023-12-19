// 삼각형 출력하기

// 출력
//     *
//    **
//   ***   
//  ****
// *****

for(let i=1; i<6; i++){
  let star ="";
  for(let j=5; j>i; j--){
    star += "&nbsp";
  }
  for(let k=0; k<i; k++){
    star += "*";
  }
  // document.write("<br/>");
  console.log(star);
}