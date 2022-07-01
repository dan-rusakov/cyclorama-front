import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".js--photoshoots-row-1", {x: '-15%', scrollTrigger: {
    trigger: '.js--photoshoots-row-1',
    scrub: true,
}}, {x: '5%', scrollTrigger: {
    trigger: '.js--photoshoots-row-1',
    scrub: true,
}});

gsap.fromTo(".js--photoshoots-row-2", {x: '5%', scrollTrigger: {
    trigger: '.js--photoshoots-row-2',
    scrub: true,
}}, {x: '-15%', scrollTrigger: {
    trigger: '.js--photoshoots-row-2',
    scrub: true,
}});

gsap.fromTo(".js--photoshoots-row-3", {x: '10%', scrollTrigger: {
    trigger: '.js--photoshoots-row-3',
    scrub: true,
}}, {x: '0%', scrollTrigger: {
    trigger: '.js--photoshoots-row-3',
    scrub: true,
}});