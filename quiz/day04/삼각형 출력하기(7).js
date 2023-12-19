// 삼각형 출력하기

// 출력
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *


for(let i=1; i<6; i++){
  let star ="";
  for(let j=6; j>i; j--){
    star += "&nbsp";
  }
  for(let l=0; l<i; l++){
    if(l === 0){
      star +="*";
    }else{
      star +="**";
    }
  }
  document.write("<br/>");
  document.write(star);
}

for(let i=1; i<5; i++){
    let star ="";
  for(let j=0; j<i; j++){
    if(j === 0){
      star += "&nbsp&nbsp";
    }else{
      star += "&nbsp";
    }
  }
  for(let l=5; l>i; l--){
    if(l === 5){
      star +="*";
    }else{
      star +="**";
    }
  }
  // document.write("<br/>");
  console.log(star);
}
