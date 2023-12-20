// 평균 점수

// 문제
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// 내 답안
const a = prompt("국어 점수를 입력해주세요.");
const b = prompt("수학 점수를 입력해주세요.");
const c = prompt("영어 점수를 입력해주세요.");


const aNum = Number(a);
const bNum = Number(b);
const cNum = Number(c);

const num = (aNum+bNum+cNum)/3;
console.log(num);
