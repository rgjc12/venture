gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function cursorani(){
let cursor1 = document.getElementById("cursor1");
let page1 = document.getElementById("page1");
let menu=document.querySelector("#nav h4");
document.addEventListener("mousemove",(e)=>{
  gsap.to(cursor1,{
    x:e.x,
    y:e.y,
    ease: "expo.out",
  })
})
page1.addEventListener("mouseenter",(e)=>{
  gsap.to(cursor1,{
    scale:5.3,
    fontSize:"0.75vh",
  });
});
page1.addEventListener("mouseleave",(e)=>{
  gsap.to(cursor1,{
    scale:1,
    fontSize:"0",
  });
});
menu.addEventListener("mousemove",()=>{
  gsap.to(cursor1,{
    scale:2
  });
});
menu.addEventListener("mouseleave",()=>{
  gsap.to(cursor1,{
    scale:1
  });
});
}
cursorani();
function page1ani(){

  let n1 = document.getElementById("nav");



let w=document.querySelectorAll("#nav h4")[0];
let w1=document.getElementsByClassName("ri-close-circle-fill")[0];
w.addEventListener("click",()=>{
  let t1=gsap.timeline();
  t1.to("#full",{
    right:0,
    duration:1.16
  });
  t1.from("#full a",{
    x:150,
    duration:0.68,
    stagger:0.26,
    opacity:0
  });
});
w1.addEventListener("click",()=>{
  gsap.to("#full",{
    right:"-40%",
    duration:1.15
  })
})
for(let i=0;i<5;i++){
    let but=document.querySelectorAll("#full a")[i];

    but.addEventListener("mousemove",()=>{
      gsap.to(but,{
        color:"rgb(128, 201, 3)",
        scale:2,
        duration:0.2
      })
      })
      but.addEventListener("mouseout",()=>{
      gsap.to(but,{
        color:"black",
        scale:1,
        duration:0.2
      })
      })
}
}
page1ani();

function stringeffect(){
  let ini=`M 0 100 Q 650 100 1300 100`;
  let fin=`M 0 100 Q 650 100 1300 100`;
  let string=document.querySelector("#string");
  string.addEventListener("mousemove",(e)=>{
    ini=`M 0 100 Q ${e.x-10} ${e.y-10} 1300 100`
    gsap.to("svg path",{
      attr:{d:ini},
      duration:1.5,
      ease: "elastic.out(1,0.1)",
    })
  })
  string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
      attr:{d:fin},
    duration:1.5,
      ease: "elastic.out(1,0.1)",
    })
  })
}
stringeffect();

function page2ani(){
gsap.from("#page2-content #text2",{
  opacity:0,
  y:30,
  stagger:0.5,
  ease: "back.out(1.4)",
    scrollTrigger:{
      trigger:"#page2-content",
      scroller:"#main",
      start:"top 60%",
        end:"top 5%",
        scrub:2
    
    }
    })

 gsap.from(".up h2",{
    opacity:0,
    y:150,
    
    ease: "back.out(1.4)",
      scrollTrigger:{
        trigger:".btm-text",
        scroller:"#main",
        start:"top 63%",
          end:"top 5%",
          scrub:2,
         stagger:.19,
        

      }
      });
gsap.from("#page2-content #string",{
  opacity:0,
  x:-850,
  duration:2.3,
   ease: "back.out(1.4)",
    scrollTrigger:{
      trigger:"#page2-content #text2",
      scroller:"#main",
      start:"top 60%",
        end:"top 25%",
        scrub:2,
     

    }
})
}
page2ani();
  gsap.from("#page3-top h4, #page3-top h2,#page3-elements",{
    opacity:0,
      y:20,
    stagger:0.4,
    scrollTrigger:{
      trigger:"#page3-top",
      scroller:"#main",
      start:"top 60%",
      
        end:"top 5%",
        scrub:2
    }
    
  })
function page4ani(){
  var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3-top",
        scroller: "#main",
        // 
        start: "top -90%",
        end: "top -110%",
        scrub: 3,
      
    }
  })
  tl2.to("#main", {
    backgroundColor: "#151515",
  })
gsap.from("#page4-top h1",{
  opacity:0,
    x:-60,
  scrollTrigger:{
    trigger:"#page4-top",
      scroller:"#main",
      start:"top 60%",
      end:"top 25%",
        scrub:2
  } 
})
  gsap.to("#page4-top #u",{
    width:"96%",scrollTrigger:{
      trigger:"#page4-top",
        scroller:"#main",
        start:"top 60%",
        end:"top 25%",
          scrub:2
    } 
  });
gsap.from("#page4-top #swiperdiv",{
  opacity:0,
    y:30,
  scrollTrigger:{
    trigger:"#page4-top",
      scroller:"#main",
      start:"top 60%",
      end:"top 25%",
        scrub:2
  } 
})
  function swiperJS() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 15,
      speed: 10000,
      loop: true,
      autoplay: {
        delay: 1,
        duration: 1,
        disableOnInteraction: false,
      },
    });
  }
  swiperJS();
gsap.to("#left-bottom",{
 transform:"translateX(3%)",
  duration:4,
  delay:0.3,
  ease: "expo.out",
  scrollTrigger:{
    trigger:"#page4-bottom",
    scroller:"#main",
    start:"top 35%",
      end:"top 13%",
     scrub:2,
    
    pin:true
  }
});
}
page4ani();

function page5ani(){
Shery.imageEffect("#q1",{
  style:5,
 config:{"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.89,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8924848536489556},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1.67,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.3,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":61}},"discard_threshold":{"value":0.44,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}},
  gooey:true
})
Shery.imageEffect("#q2",{
  style:5,
  config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":-0.91,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8601905717942249},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.24,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":61}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.49,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  gooey:true
})
Shery.imageEffect("#w1",{
  style:5,
  config:{"a":{"value":2.52,"range":[0,30]},"b":{"value":-0.91,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.9372044076250227},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":58}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  gooey:true
})
let q1=document.getElementById("q1");
let q2=document.getElementById("q2");
let w1=document.getElementById("w1");
let bt=document.getElementById("bleft-cont");
q1.addEventListener("mouseenter",()=>{
  gsap.to("#x1 h3",{
    y:"-10vh", duration:0.2,
    
    esae: "expo.out",
    
  });
});
q1.addEventListener("mouseleave",()=>{
  gsap.to("#x1 h3",{
    y:"0", duration:0.2,
    esae: "expo.out",

  });
});
q2.addEventListener("mouseenter",()=>{
  gsap.to("#x2 h3",{
    y:"-10vh",
     duration:0.2,
    esae: "expo.out",

  });
});
q2.addEventListener("mouseleave",()=>{
  gsap.to("#x2 h3",{
    y:"0", duration:0.2,
    esae: "expo.out",

  });
});
w1.addEventListener("mouseenter",()=>{
  gsap.to("#x3 h3",{
    y:"-10vh",
     duration:0.2,
    esae: "expo.out",

  });
});
w1.addEventListener("mouseleave",()=>{
  gsap.to("#x3 h3",{
    y:"0",
     duration:0.2,
    esae: "expo.out",

  });
});
bt.addEventListener("mouseenter",()=>{
  gsap.to("#bltext h3",{
    y:"-9.3vw",
  duration:0.2,
    esae: "expo.out",

  });
});
bt.addEventListener("mouseleave",()=>{
  gsap.to("#bltext h3",{
    y:"0",
    duration:0.2,
    esae: "expo.out",

  });
});
}
page5ani();
function page6ani(){
gsap.from("#page6-left h3",{
  opacity:0,
  y:-30,
  stagger:-0.4,
  scrollTrigger:{
    trigger:"#page6-left",
      scroller:"#main",
      start:"top 60%",
        end:"top 25%",
        scrub:2
  }
})
gsap.from("#bottom-container span",{
  opacity:0.4,
  y:-325,
  stagger:0.1,
    scrollTrigger:{
      trigger:"#page6-left",
        scroller:"#main",
        start:"top 65%",
          end:"top 29%",
          scrub:2,
      
    }
});
gsap.to("#page6-container",{
  height:"100%",
  scrollTrigger:{
    trigger:"#bltext",
      scroller:"#main",
      start:"top 60%",
        end:"top 12%",
        scrub:2,
    
  }
})

}
page6ani();
function loaderani() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 27);
    },
  });
  tl.to(".line h2", {
    animationName: "loaderAnime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 2.6,
  });
 
  tl.to("#loader", {
    display: "none",
    opacity:0
  });
  tl.from("#page1-content h1 span",{
    y:80,
    opacity:0,
    stagger:0.12,
    duration:0.3,
    delay:-0.2

  })
}
loaderani();

/*function loader(){
let t=gsap.timeline();
t.from("#loader h3",{
  opacity:0,
  x:60,
  stagger:0.2,
  duration:1.1
})
t.to("#loader h3",{
  opacity:0,
  x:-25,
  stagger:-0.1,
  duration:1
})
t.to("#loader",{
  opacity:0,
  display:"none",
  duration:0.6,
  ease: "elastic.out(1,0.1)",
  
 })
t.from("#page1-content h1 span",{
  y:80,
  opacity:0,
  stagger:0.12,
  duration:0.3,
  delay:-0.2
  
})
}
loader();*/