const txtarr1 = "WELCOME🤖".split("");
const txtarr2 = "TO".split("");
const txtarr3 = "CYBERVERSE".split("");
console.log(txtarr1);

const loadtxt1 = document.querySelector("#loadtxt1");
const loadtxt2 = document.querySelector("#loadtxt2");
const loadtxt3 = document.querySelector("#loadtxt3");
const counter = document.querySelector("#count");
console.log(loadtxt1);

let count = 0;

setInterval(() => {
  if (count == 100) {
    clearInterval();
    return;
  } else {
    count++;
    counter.innerHTML = count + "%";
  }
}, 50);

txtarr1.forEach((e) => {
  const span = document.createElement("span");
  span.textContent = e;
  loadtxt1.appendChild(span);
});
txtarr2.forEach((e) => {
  const span = document.createElement("span");
  span.textContent = e;
  loadtxt2.appendChild(span);
});
txtarr3.forEach((e) => {
  const span = document.createElement("span");
  span.textContent = e;
  loadtxt3.appendChild(span);
});

function loadinganimate() {
  let tl = gsap.timeline();
  tl.from("#loadimg", {
    width: "0%",
    duration: 0.3,
  });
  tl.to(
    "#loadtxt1 span",
    {
      color: "black",
      // duration: 3,
      ease: "elastic",

      stagger: 0.05,
    },
    "a"
  );
  tl.from("#loadtxt2 span", {
    opacity: 0,
    // duration: 3,
    ease: "elastic",

    stagger: 0.05,
  });
  tl.to("#loadtxt3 span", {
    color: "black",
    // duration: 3,
    ease: "elastic",

    stagger: 0.05,
  });
  tl.to(".loadtxt span ", {
    opacity: 0,
    stagger: 0.1,
  });
  tl.to("#loadimg ", {
    height: "0%",
    ease: "elastic",
  });

  tl.to(".slide", {
    height: "0%",
    stagger: 0.1,
  });
  tl.to("#loader", {
    display: "none",
  });
}

loadinganimate();
