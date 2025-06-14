document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");

  toggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
});
