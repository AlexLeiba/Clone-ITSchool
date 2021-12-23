// Button
const scrollButton = document.querySelector(".scrollIcon");
const menuIcon = document.querySelector(".menu-icon");
const ulList = document.querySelector("nav ul ")

scrollButton.addEventListener("click", function(){
scrollTo({
    behavior: "smooth",
    top: 10
})
})

document.addEventListener("scroll", function(event){
if(window.scrollY > 500){
    scrollButton.style.visibility = "visible";
} else {
    scrollButton.style.visibility = "hidden"
}
})

// Drop Menu
menuIcon.addEventListener("click", function(){
ulList.classList.toggle("dropDown-menu");

})