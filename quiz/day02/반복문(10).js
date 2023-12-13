// 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

let arr = [];

for(let i=0; i<=6; i++){
  for(let j=0; j<=6; j++){
    if(i + j === 6){
      arr.push([i, j]);
    }
  }
}

console.log(arr);


// let a =1;
// let arr =[];

// for(let i=0; i<=6; i++){
//   if(a + i === 6){
//     let b = [a,i]
//     arr.push(b);
//   }
//   a++;
// }

// console.log(arr);
