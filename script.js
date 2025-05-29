function openVibeCraft() {
  window.open('vibecraft.html', '_blank');
}

    // Hamburger menu toggle
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });