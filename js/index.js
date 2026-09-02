import {animate} from 'https://esm.sh/animejs';

let welcomeAnimated = false;
let aboutAnimated = false;

$(window).on("scroll", function () {
    let yCoords = window.scrollY;
    //console.log(window.scrollY);
    if(yCoords > 86 && yCoords < 937.3333129882812 && !welcomeAnimated){
        welcomeAnimated = true;
        animate("#welcome-img", {
            opacity: [0, 1],
            translateX: [300, 0],
            duration: 1000,
            ease: "out(3)"
        });
    }
    else if(window.scrollY > 937.3333129882812 && !aboutAnimated){
        aboutAnimated = true;
        animate("#about-img", {
            opacity: [0, 1],
            translateX: [300, 0],
            duration: 1000,
            ease: "out(3)"
        });
    }
});