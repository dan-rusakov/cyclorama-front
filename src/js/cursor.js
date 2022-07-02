import {gsap} from 'gsap';

const cursorTargets = Array.from(document.querySelectorAll('.js--cursor-target'));
const cursor = document.querySelector('.js--cursor');

cursorTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });

    target.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
})


gsap.set('.js--cursor', {xPercent: -50, yPercent: -50});

const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.5;

const xSet = gsap.quickSetter(cursor, "x", "px");
const ySet = gsap.quickSetter(cursor, "y", "px");

window.addEventListener("mousemove", evt => {   
  mouse.x = evt.pageX;
  mouse.y = evt.pageY;  
});

gsap.ticker.add(() => {
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});