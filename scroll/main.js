// 날짜 지나는 스크립트
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

// 메뉴 높이 잡기
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`;
  }else{
    linksContainer.style.height = 0;
  };
});

// 헤더 고정
const navbar = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight > navHeight){
    navbar.classList.add("fixed-nav");
  }else{
    navbar.classList.remove("fixed-nav");
  };

  if(scrollHeight > 500){
    topLink.classList.add("show-link");
  }else{
    topLink.classList.remove("show-link");
  }
});

// 부드럽게 넘어가는 코드라는데 .. 왜 필요한지 변화를 모름 (아주 좋은 기능)
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
  link.addEventListener("click", function(e){
    e.preventDefault(); //이벤트 기본동작 중단(style에 있는 동작을 중단시키는듯)
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // 높이를 계산하는 식
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if(!fixedNav){
      position = position - navHeight;
    };

    if(navHeight > 82){
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});