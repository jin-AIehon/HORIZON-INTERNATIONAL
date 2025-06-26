document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      navList.classList.toggle("show");
    });
  }
});
