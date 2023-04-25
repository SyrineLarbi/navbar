const navbar=document.querySelector(".navbar");
const container=document.querySelector(".textContainer");

console.log(navbar.offsetHeight);
console.log(container.offsetTop);

window.addEventListener("scroll",()=>{
    if(
        (window.scrollY > container.offsetTop - navbar.offsetHeight)
    ){
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
})