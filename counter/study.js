const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

let count =0;

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const countBtn = e.currentTarget.classList;
        console.log(countBtn);
        if(countBtn.contains("decrease")){
            count--;
        }else if(countBtn.contains("increase")){
            count++;
        }else{
            count =0;
        }

        if(count < 0){
            value.style.color = "red";
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count === 0){
            value.style.color = "#222";
        }

        value.textContent = count;
    })
})