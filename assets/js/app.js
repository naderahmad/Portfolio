/*

Hamburger menu button

*/

const menuBtn = document.querySelector('.navbar__menu-btn');
const menuBg = document.querySelector('.navbar__mobile');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuBg.classList.add('is-active');
    document.body.style.overflowY = 'hidden';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuBg.classList.remove('is-active');
    document.body.style.overflowY = 'visible';
    menuOpen = false;
  }
});

const linkMobile = document.querySelector('.mobile__link');

linkMobile.addEventListener ('click', () => {
    menuBtn.classList.remove('open');
    menuBg.classList.remove('is-active');
    document.body.style.overflowY = 'visible';
});

/*

Switch Button Dark Mode

*/

const btnSwitch = document.querySelector("#switch");
const btnSwitch1 = document.querySelector("#switch--mobile");

btnSwitch1.addEventListener ('click', () => {
    document.body.classList.toggle("dark-theme");
    btnSwitch1.classList.toggle('active');

    // LocalStorage
    if(document.body.classList.contains('dark-theme')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

btnSwitch.addEventListener ('click', () => {
    document.body.classList.toggle("dark-theme");
    btnSwitch.classList.toggle('active');

    // LocalStorage
    if(document.body.classList.contains('dark-theme')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

if(localStorage.getItem('dark-mode') === 'true' ) {
    document.body.classList.add("dark-theme");
    btnSwitch.classList.add('active');
    btnSwitch1.classList.add('active');
} else {
    document.body.classList.remove("dark-theme");
    btnSwitch.classList.remove('active');
    btnSwitch1.classList.remove('active');
}

/*

Animations SGAP ScrollTrigger

*/

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "bottom center", // Animation start at this point
        end: "bottom bottom", // Animation end at this point
        scrub: 1
    }
})
tl.from(".about__content", { x:innerWidth * -1 })
tl.from(".skills", { x:innerWidth * 1 })

let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1})

const boxTl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".work",
        start: "top bottom", // Animation start at this point
        end: "-300px", // Animation end at this point
        scrub: 1,
    }
})
boxTl1.from(".work_title-cont", { x:innerWidth * -1 })
//
const boxTl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".card-1",
        start: "top center", // Animation start at this point
        end: "center center", // Animation end at this point
        scrub: 1,
    }
})
boxTl2.from(".card-1", { x:innerWidth * 1 })
//
const boxTl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".card-2",
        start: "top center", // Animation start at this point
        end: "center center", // Animation end at this point
        scrub: true,
    }
})
boxTl3.from(".card-2", { x:innerWidth * -1 })
//
const boxTl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".card-3",
        start: "top center", // Animation start at this point
        end: "center center", // Animation end at this point
        scrub: true,
    }
})
boxTl4.from(".card-3", { x:innerWidth * 1 })
//
//
const boxTl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        start: "top center", // Animation start at this point
        end: "center center", // Animation end at this point
        scrub: true,
    }
})
boxTl5.from(".contact__container", { x:innerWidth * 1 })

/*

Animation Type script Hero

*/

const words = ["Desarrollador Front End Jr."]
let masterTl = gsap.timeline()

words.forEach(word => {
    let tl9 = gsap.timeline({repeat: 0, yoyo: false, repeatDelay: 0, delay: 1})
    tl9.to('.hero__text', {duration: 2, text: word})
})
