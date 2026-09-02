import {animate} from 'https://esm.sh/animejs';

const date = new Date().getFullYear();
$("#footer-date").text(`Maple Counselling Services - ${date}`);

let navOpen = false;

$("#burger-button").on("click", function(){
    if(!navOpen){
        const bottomNav = $("#bottom-nav");
        bottomNav.css("display", "flex");
        animate(
            "nav",
            {
                height: "30dvh",
                duration: 1000,
                ease: "in(3)",
                onComplete: function(){
                    animate(
                        bottomNav[0],
                        {
                            opacity:1,
                            duration:500,
                            ease: "in(3)",
                            onComplete: function(){
                                navOpen = true;
                            }
                        }
                    )
                }
            }
        )
    }
    else if(navOpen){
        const bottomNav = $("#bottom-nav");
        animate(
            bottomNav[0],
            {
                opacity:0,
                duration: 500,
                ease: "out(3)",
                onComplete: function(){
                    animate(
                        "nav",
                        {
                            height: "10dvh",
                            duration:1000,
                            ease: "out(3)",
                            onComplete:function(){
                                navOpen = false;
                                $("#top-nav").css("height", "100%");
                            }
                        }
                    )
                }
            }
        )
    }
})