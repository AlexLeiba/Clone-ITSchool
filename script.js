
// scroll
const scrollButton = document.querySelector(".scrollIcon");

scrollButton.addEventListener("click", function () {
  window.scrollTo({
    behavior: "smooth",
    top: 10,
  });
});
document.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scrollButton.style.visibility = "visible";
  } else {
    scrollButton.style.visibility = "hidden";
  }
});

// Drop Menu
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", function () {
  // menu mobile
  const ulList = document.querySelector("nav ul");

  ulList.classList.toggle("dropDown-menu");
});
