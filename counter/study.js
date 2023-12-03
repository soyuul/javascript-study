const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const countBtn = e.target.classList;
        if(countBtn.contains("decrease")){
            count--;
        }else if(countBtn.contains("increase")){
            count++;
        }else{
            count = 0;
        };

        if(count <= 0){
            value.stlye.color = "red";
        }
        if(count >= 0){
            value.stlye.color = "green";
        }
        if(count === 0){
            value.stlye.color = "#222";
        }
        value.textContent = count;
    })
    
})