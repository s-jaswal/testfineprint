// about us page 
document.querySelectorAll(".home-scroll_section").forEach((section) => {
    let childTriggers = section.querySelectorAll(".home-scroll_text-item");
    let childTargets = section.querySelectorAll(".home-scroll_img-item");

    // switch active class
    function makeItemActive(index) {
        childTriggers.forEach(trigger => trigger.classList.remove("is-active"));
        childTargets.forEach(target => target.classList.remove("is-active"));
        childTriggers[index].classList.add("is-active");
        childTargets[index].classList.add("is-active");
    }
    makeItemActive(0);

    // create triggers
    childTriggers.forEach((trigger, index) => {
        ScrollTrigger.create({
            trigger: trigger,
            start: "top center",
            end: "bottom center",
            onToggle: ({ isActive }) => {
                if (isActive) {
                    makeItemActive(index);
                }
            }
        });
    });
});

// home page js 
//  tutorial : https://codepen.io/ebinabo/pen/WNwjEaL

/*
https://gsap.com/
*/
document.getElementById('dark-mode-toggle').addEventListener('click', function () {

    const body = document.body;
    const footer = document.querySelector('footer');
    const isDark = body.classList.toggle('dark-mode');

    gsap.to(body, {
        backgroundColor: isDark ? '#2f2f2f' : '#fbfbf0',
        color: isDark ? '#f6f6dc' : '#2f2f2f',
        duration: 0.25
    });

    gsap.to(footer, {
        borderColor: isDark ? '#f6f6dc' : '#2f2f2f',
        duration: 0.15
    });
});

/* 
https://swiperjs.com
*/
const swiper = new Swiper(".swiper-slider", {
    centeredSlides: true,
    speed: 800,
    slidesPerView: 1,
    grabCursor: true,
    freeMode: false,
    loop: true,
    touchRatio: 1.5,
    spaceBetween: 0.0,
    mousewheel: false,
    keyboard: {
        enabled: true
    },
    autoplay: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    }
});

/* 
https://github.com/locomotivemtl/locomotive-scroll 
*/
const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// Navigation
document.querySelectorAll('.nav-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        scroller.scrollTo(targetSection);
    });
});

// go top
document.querySelector('.go').addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    scroller.scrollTo(targetSection);
});

