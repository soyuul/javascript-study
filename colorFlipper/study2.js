const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorText = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    const hexColor = "#";
    for(let i = 0; i<6; i++){
        hexColor += [setRandomNum()];
    };
    document.body.style.backgroundColor = hexColor;
    colorText.textContent = hexColor;
});

function setRandomNum(){
    return Math.floor(Math.random()*hex.length);
};