window.addEventListener("scroll", function () {
  const navbar = document.getElementById("nav");
  if (window.scrollY > 10) {
    navbar.style.zIndex = "100";
  } else {
    navbar.style.zIndex = "100";
  }
});

function toggleMenu() {
  document.getElementById("responsiveMenu").classList.toggle("hidden");
}
