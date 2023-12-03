// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToddle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToddle.addEventListener('click', function(){
    // console.log(links.classList);
    // console.log(links.classList.contains('random'));
    // console.log(links.classList.contains('links'));

    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // }else{
    //     links.classList.add('show-links');
    // }

    links.classList.toggle("show-links");
    // toggle은 클래스를 동적으로 조작할때 유용
    // show-links가 있으면 true, 아니면 false가 자유자제로 실행
})