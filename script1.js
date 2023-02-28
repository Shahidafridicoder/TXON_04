const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    //create two spans
    let parent = document.createElement("span");
    let child = document.createElement("span");

    //parent and child both sets their respective classes.
    parent.classList.add("parent");
    child.classList.add("child");

    //span parent gets child and child gets elem details.
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    //elem replaces its value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}
revealToSpan();

function elementSetter() {
  gsap.set("#home #navbar a", { y: "-100%", opacity: 0 });
  gsap.set("#home .parent .child", { y: "100%" });
  gsap.set("#home .bigtxt img", { opacity: 0 });
}
elementSetter();

function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from("#loader .child span", {
    x: 100,
    delay: 1,
    duration: 1,
    stagger: 0.2,
    ease: Power3.easeInOut,
  })
    .to("#loader .parent .child", {
      y: "-100%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -0.8,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: 0,
      duration: 1,
      delay: -0.5,
      ease: Circ.easeInOut,
    });
}
loaderAnimation();

function animateHomePage() {
  var tl = gsap.timeline();
  tl.to("#home #navbar a", {
    y: 0,
    opacity: 1,
    ease: Expo.easeInOut,
    stagger: 0.05,
    delay: 5,
    duration: 2,
  })
    .to("#home .parent .child", {
      y: 0,
      ease: Expo.easeInOut,
      stagger: 0.1,
      duration: 1.5,
    })
    .to("#home .bigtxt img", {
      opacity: 1,
      delay: -0.5,
      ease: Expo.easeInOut,
    });
}
animateHomePage();

var container1 = document.querySelector("#container1");
var container2 = document.querySelector("#container2");
var quaive = document.querySelector("#quaive");
var cursor = document.querySelector("#cursor");
var body = document.querySelector("body");
var hover = document.querySelector(".hover");
var unhide = document.querySelector("#cursor>div");

body.addEventListener("mousemove", function (elem) {
  cursor.style.left = elem.clientX + 10 + "px";
  cursor.style.top = elem.clientY + 10 + "px";
});

container1.addEventListener("mouseover", function () {
  unhide.style.opacity = 1;
});
container1.addEventListener("mouseleave", function () {
  unhide.style.opacity = 0;
});
container2.addEventListener("mouseover", function () {
  unhide.style.opacity = 1;
});
container2.addEventListener("mouseleave", function () {
  unhide.style.opacity = 0;
});

var playbook = document.querySelector("#playbook");
var progress1 = document.querySelector("#progress1");
var progress2 = document.querySelector("#progress2");
var see = document.querySelector("#playbook h5");

playbook.addEventListener("mouseover", function () {
  progress1.style.width = "100%";
  progress2.style.width = "100%";
  progress1.style.transition = "1s";
  progress2.style.transition = "1s";
  see.style.opacity = 1;
});
playbook.addEventListener("mouseleave", function () {
  progress1.style.width = "0%";
  progress2.style.width = "0%";
  progress1.style.transition = "none";
  progress2.style.transition = "none";
  see.style.opacity = 0.6;
});

var playbook1 = document.querySelector("#playbook1");
var progress3 = document.querySelector("#progress3");
var progress4 = document.querySelector("#progress4");
var see1 = document.querySelector("#playbook1 h5");

playbook1.addEventListener("mouseover", function () {
  progress3.style.width = "101%";
  progress4.style.width = "100%";
  progress3.style.transition = ".3s";
  progress4.style.transition = ".3s";
  see1.style.color = "black";
});
playbook1.addEventListener("mouseleave", function () {
  progress3.style.width = "0%";
  progress4.style.width = "0%";
  progress3.style.transition = "none";
  progress4.style.transition = "none";
  see1.style.color = "white";
});

var playbook2 = document.querySelector("#playbook2");
var progress5 = document.querySelector("#progress5");
var progress6 = document.querySelector("#progress6");
var see2 = document.querySelector("#playbook2 h5");

playbook2.addEventListener("mouseover", function () {
  progress5.style.width = "101%";
  progress6.style.width = "100%";
  progress5.style.transition = ".3s";
  progress6.style.transition = ".3s";
  see2.style.color = "black";
});
playbook2.addEventListener("mouseleave", function () {
  progress5.style.width = "0%";
  progress6.style.width = "0%";
  progress5.style.transition = "none";
  progress6.style.transition = "none";
  see2.style.color = "white";
});

var same = document.querySelector(".same");
var progress7 = document.querySelector(".progress7");
var line = document.querySelector("#line");
var content1 = document.querySelector(".content1");
var sm1 = document.querySelector("#sm1");

same.addEventListener("mouseover", function () {
  progress7.style.height = "100%";
  progress7.style.transition = ".3s";
  line.style.opacity = 0;
  content1.style.padding = "20px";
});
same.addEventListener("mouseleave", function () {
  progress7.style.height = "0%";
  progress7.style.transition = ".3s";
  line.style.opacity = 1;
  content1.style.padding = "0px";
});

var sm2 = document.querySelector("#sm2");
var progress8 = document.querySelector(".progress8");
var line2 = document.querySelector(".line2");
var content2 = document.querySelector(".content2");

sm2.addEventListener("mouseover", function () {
  progress8.style.height = "100%";
  progress8.style.transition = ".3s";
  line2.style.opacity = 0;
  content2.style.padding = "20px";
});
sm2.addEventListener("mouseleave", function () {
  progress8.style.height = "0%";
  progress8.style.transition = ".3s";
  line2.style.opacity = 1;
  content2.style.padding = "0px";
});

var sm3 = document.querySelector("#sm3");
var progress9 = document.querySelector(".progress9");
var line3 = document.querySelector(".line3");
var content3 = document.querySelector(".content3");

sm3.addEventListener("mouseover", function () {
  progress9.style.height = "100%";
  progress9.style.transition = ".3s";
  line3.style.opacity = 0;
  content3.style.padding = "20px";
});
sm3.addEventListener("mouseleave", function () {
  progress9.style.height = "0%";
  progress9.style.transition = ".3s";
  line3.style.opacity = 1;
  content3.style.padding = "0px";
});

var sm4 = document.querySelector("#sm4");
var progress10 = document.querySelector(".progress10");
var line4 = document.querySelector(".line4");
var content4 = document.querySelector(".content4");

sm4.addEventListener("mouseover", function () {
  progress10.style.height = "100%";
  progress10.style.transition = ".3s";
  line4.style.opacity = 0;
  content4.style.padding = "20px";
});
sm4.addEventListener("mouseleave", function () {
  progress10.style.height = "0%";
  progress10.style.transition = ".3s";
  line4.style.opacity = 1;
  content4.style.padding = "0px";
});

var sidebar = document.querySelector("#sidebar");
var button = document.querySelector("#finalpage button");
var flag = 0;
button.addEventListener("click", function () {
  if (flag === 0) {
    sidebar.style.left = 0;
    setTimeout(() => {
      button.innerHTML = "Resume Seen";
    }, 1000);
    flag = 1;
  } else {
    sidebar.style.left = "-100%";
    sidebar.style.transition = "1s";
    setTimeout(() => {
      button.innerHTML = "See My Resume";
    }, 1000);
    flag = 0;
  }
});
