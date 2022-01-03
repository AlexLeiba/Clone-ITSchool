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
    scrollButton.style.transform = "translateY(0px)";
  } else {
    scrollButton.style.transform = "translateY(100px)";
  }
});

// Drop Menu
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", function () {
  // menu mobile
  const ulList = document.querySelector("nav ul");

  ulList.classList.toggle("dropDown-menu");
});
