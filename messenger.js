// messenger
const messButton = document.querySelector(".messageIcon");

messButton.addEventListener("click", function () {
  const messWindow = document.querySelector(".messageWindow");

  let compStyle = getComputedStyle(messWindow);
  let property = compStyle.getPropertyValue("opacity");
  console.log(property);

  if (property == 0) {
    messWindow.style.transform = "scale(1)";
    messWindow.style.opacity = 1;
  } else {
    messWindow.style.transform = "scale(0)";
    messWindow.style.opacity = 0;
  }
});

// Drop Menu
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", function () {
  // menu mobile
  const ulList = document.querySelector("nav ul");

  ulList.classList.toggle("dropDown-menu");
});
