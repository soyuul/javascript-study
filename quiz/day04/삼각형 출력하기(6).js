// 삼각형 출력하기

// 출력
// *********
//  *******
//   *****
//    ***
//     *


for(let i=0; i<5; i++){
  let star ="";
  for(let j=0; j<i; j++){
    star += "&nbsp";
  }
  for(let k=5; k>i; k--){
    if(k === 5){
      star+= "*";
    }else{
      star+="**";
    }
  }
  // document.write("<br/>");
  console.log(star);
}