// --- START OF FILE script.js ---

// 1. DARK MODE TOGGLE
const darkToggle = document.getElementById("darkToggle");
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
}

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

// 2. MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Mobile Dropdown Toggle
document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const dropdownMenu = link.nextElementSibling;
      dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
    }
  });
});

// 3. SCROLL ANIMATIONS (Intersection Observer)
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(reveal => observer.observe(reveal));

// 4. "COMING SOON" MODE LOGIC
// Set to false when products are ready to sell
const COMING_SOON = true; 

document.addEventListener("DOMContentLoaded", () => {
  if (COMING_SOON) {
    // Hide standard prices and cart buttons
    document.querySelectorAll(".price, .add-to-cart").forEach(el => {
      el.style.display = "none";
    });
    // Show notify/waitlist buttons
    document.querySelectorAll(".notify-btn").forEach(el => {
      el.style.display = "inline-block";
    });
  } else {
    // Hide waitlist buttons if live
    document.querySelectorAll(".notify-btn").forEach(el => {
      el.style.display = "none";
    });
  }
});
