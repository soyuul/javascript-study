// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause(); // 일시정지
    }else{
        btn.classList.remove('slide');
        video.play(); // 재생
    }
});

// preloader
const prelaoder = document.querySelector('.preloader');

window.addEventListener('load', function(){
    prelaoder.classList.add("hide-preloader");
})