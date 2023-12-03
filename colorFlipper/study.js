const simple = ["#456", "#943", "#159", "#753"];

const colorText = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    const simpleColor = 1;
    document.body.style.backgroundColor = simple[setRandomNum()];
    colorText.textContent = simple[setRandomNum()];
});

function setRandomNum(){
    return Math.floor(Math.random()*simple.length);
};