document.body.addEventListener("mousemove", evt => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;
    
    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY
    })
    
    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1
    })
  })

function hideScroll() {
    if (topb.classList.contains('active')) {
        let xPos = window.scrollX;
        let yPos = window.scrollY;
        document.body.style.overflow = "hidden";
        window.onscroll = () => {
            window.scroll(xPos, yPos);
            
        };
    }
} 
function showScroll() {
    document.body.style.overflow = "auto";
        window.onscroll = "";
}

const hamburger = document.querySelector(".navbar__hamburger");
const layers = document.querySelectorAll(".navbar__hamburger span");
const topb = document.querySelector(".top-bun");
const bg = document.querySelector(".navbar__list");

hamburger.addEventListener("click", (e) => {
    layers.forEach((layer) => layer.classList.toggle("active"));
    if (topb.classList.contains('active')) {
        bg.classList.add('is-active');
        hideScroll();
    } else {
        bg.classList.remove('is-active');
        showScroll();
    }
});

/*

Switch Button Dark Mode


*/
const btnSwitch = document.querySelector("#switch");




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
} else {
    document.body.classList.remove("dark-theme");
    btnSwitch.classList.remove('active');
}

/*

Animations SGAP ScrollTrigger

*/


