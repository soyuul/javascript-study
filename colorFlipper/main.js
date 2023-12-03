const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn'); // html 에 있는 btn id 가져오기
const color = document.querySelector(".color"); // 색상 범위 설정

btn.addEventListener('click',function(){
    // const randomNumber = 2;
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}