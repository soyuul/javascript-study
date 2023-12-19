// 삼각형 출력하기

// 출력
// **********
// ****  ****
// ***    ***
// **      **
// *        *


for(let i=0; i<5; i++){
  let star = "";
  for(let j=0; j<5; j++){
    if(j<5-i){
      star += "*";
    }else{
      star += "&nbsp&nbsp";
    }
  }
  for(let k=0; k<5; k++){
    if(k>=i){
      star += "*";
    }
  }
  // document.write("<br/>");
  console.log(star);
}