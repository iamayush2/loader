const txtarr = "WELCOME TO CYBERVERSE".split("");
console.log(txtarr);

const txtloader = document.querySelector("#txtloader");
const  counter = document.querySelector("#count");
console.log(txtloader.innerHTML);

let count =0;

setInterval(()=>{
    if(count==100){
        clearInterval();
        return;
    }
    else {
        count++;
        counter.innerHTML = count + "%";
    }
},40);


txtarr.forEach((e)=>{
    const span = document.createElement("span");
    span.textContent = e;
    txtloader.appendChild(span);
})

let tl = gsap.timeline();
tl.to("#txtloader span", {
    color: "black",
    // duration: 3,
    ease: "elastic",
    
    stagger: 0.1,
} )
tl.to("#txtloader span ", {
   opacity: 0,
   stagger:0.1,
} )
tl.to("#count ", {
   opacity: 0,
   stagger:0.1,
} )

tl.to(".slide", {
    height: "0%",
    stagger: 0.1,
})
