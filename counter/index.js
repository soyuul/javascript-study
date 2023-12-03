// set initial count
let count = 0;

// select value and buttons
const value = document.querySelectorAll('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.classList);  //currentTarget 클릭하면 대상이 누군지 알려준다
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }

        
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red'
        }
        if (count === 0){
            value.style.color = '#222';
        }
        value.textContent = count;
    });
});