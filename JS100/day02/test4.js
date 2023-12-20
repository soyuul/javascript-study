// 3의 배수 인가요?

// 문제
// 영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.

// 내 답안

const randomNum = prompt("숫자를 입력해주세요.");

const a = Number(randomNum);

while(a){
    if(a % 3 === 0){
        document.write("짝");
    }else{
        document.write(a);
    }
    break;
}