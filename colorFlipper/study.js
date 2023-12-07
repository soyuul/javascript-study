const simple = ["red", "#753", "#357", "#456"];
const color = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
  const simpleColor = colorRandom();
  document.body.style.backgroundColor = simple[simpleColor];
  color.textContent = simple[simpleColor];  
})

function colorRandom(){
    return Math.floor(Math.random()*simple.length);
}