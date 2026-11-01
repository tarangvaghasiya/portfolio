// Mobile navigation, active section highlighting and footer year.
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("main section[id]");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navItems.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => observer.observe(section));
document.querySelector("#year").textContent = new Date().getFullYear();

// To add your portrait, save it as assets/profile.jpg.
// The HTML placeholder will be replaced automatically when the image exists.
const portrait = document.querySelector("#portrait");
const profileImage = new Image();
profileImage.src = "assets/profile.jpg";
profileImage.onload = () => {
  portrait.innerHTML = "";
  portrait.appendChild(profileImage);
};
