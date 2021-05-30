import { gsap, TweenMax, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import $ from 'jquery';

//registrations
gsap.registerPlugin(Draggable);


//code

const draggable = document.querySelector('.page');

Draggable.create("#wrapperBoxes", {// with #wrapperBoxes allows for only images to drag - bg 'paper' stays in place
    bounds: draggable,
//allowNativeTouchScrolling:false,
    type:"x"
    // throwProps: true
    }
);

TweenMax.set(draggable, {overflowY:'hidden'});//change scroll to hidden

var scrollSpeed = 0.5; // half of user scroll
var scrollHeight = 10000;

TweenMax.set(draggable, {height:scrollHeight});//kk removed overflow: 'scroll' after height

$(document).on("scroll", function (){
const pixels = $(document).scrollTop();
TweenMax.to('#wrapperBoxes',1,{x:-0.5 * pixels})

//  '0.5' = half speed of user scroll
console.log(pixels);
});


/* This Pen Loads the Following

TweenMax: latest version
-TweenLite
-TweenMax
-TimelineLite
-TimelineMax
-CSSPlugin
-BezierPlugin
-DirectionalRotationPlugin
-AttrPlugin
-RoundPropsPlugin
-EasePack
Draggable

** Bonus Plugins **
-ThrowPropsPlugin

*/
