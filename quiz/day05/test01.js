// 프로그램 만들기(1)

// 문제
// 입력받은 수가 양수인지 음수인지 판단하는 프로그램 작성

// 내 답
const answer = prompt("숫자를 입력해주세요.");

const answerNum = Number(answer);

if(answerNum >= 0){
    console.log("양수입니다.");
}else if(answerNum <= 0){
    console.log("음수입니다.");
}