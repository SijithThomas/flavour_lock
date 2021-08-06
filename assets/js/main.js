//MShow Menu
const menuBtn=document.getElementById('menu__icon');
const navHeader=document.getElementById('nav__header');
const nav=document.getElementById('nav');
const navList=document.getElementById('nav__list');
const menuLine=document.getElementById('menu__line');

    let showMenu=false;
    menuBtn.addEventListener('click',toggleMenu);
    
    function toggleMenu(){
        if(!showMenu){
            navHeader.classList.add('show__header');
            nav.classList.add('show__nav');
            navList.classList.add('show__list');
            menuLine.classList.add('ri-close-fill');
            menuLine.classList.remove('ri-menu-line')
    
            // Rset menu state
            showMenu=true;
        }else{
            navHeader.classList.remove('show__header');
            nav.classList.remove('show__nav');
            navList.classList.remove('show__list');
            menuLine.classList.add('ri-menu-line');
            menuLine.classList.remove('ri-close-fill')
    
            // Rset menu stat
            showMenu=false;
        }
    }



// Swipper js
var swiper = new Swiper(".new__container", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });