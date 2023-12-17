// 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

let a =0;

for(let i=1; i<20; i++){
  if(i % 2 && i % 3 === 0){

  }else{
    a = a + i; 
  }
}

console.log(a);

// let arr2 = [];
// for(let i = 1; i < 20; i++){
//    if(!(i%2 === 0 || i%3 === 0)){
//       arr2.push(i)
      
//    }
// }

// let result2 = arr2.reduce((prev, cur)=>{
//    return prev += cur
// },0)
// console.log(result2)


// var sum = 0;
// for( let i = 0; i < 20; i++) {
//   if ( i % 2 && i % 3) sum += i;
// }
// console.log(sum);