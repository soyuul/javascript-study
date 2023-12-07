// 배열의 삭제

// 문제
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

let nums = [100, 200, 300, 400, 500];

// 내 답안

nums.splice(3,2);
// 답안

nums.pop();
nums.pop();

console.log(nums);

// 배열의 요소 삭제하는 메서드
// pop : 배열의 마지막 요소 삭제
// shift : 배열의 첫 번째 요소를 삭제
// splice : 배열 요소 삭제(지정)
// filter : 조건에 일치하는 새 배열 생성
// delete :  배열 요소 삭제