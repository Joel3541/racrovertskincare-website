// --- START OF FILE script.js ---

// 1. DARK MODE
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

// 2. WHATSAPP
function openWhatsApp() {
  window.open("https://wa.me/+12674563836", "_blank");
}

// 3. BACK TO TOP (Fixed to smoothly appear/disappear on scroll)
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});
toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// 4. MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});

// NAVBAR DROPDOWN FOR MOBILE
document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.nextElementSibling.classList.toggle("open");
    }
  });
});

// 5. MODAL (Fixed to use CSS class instead of inline style to prevent layout bugs)
const modal = document.getElementById("productModal");

// Attach to window so HTML 'onclick' can find them
window.openModal = function(title, desc, price) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modalPrice").innerText = price;
  modal.classList.add("active");
};

window.closeModal = function() {
  modal.classList.remove("active");
};

// Close modal if user clicks anywhere outside of the white box
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// 6. ANIMATIONS SCRIPT
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.15 }
);
reveals.forEach(reveal => observer.observe(reveal));

// 7. CHECKOUT + HIDE PRICES (Coming Soon Logic)
document.addEventListener("DOMContentLoaded", () => {
  const COMING_SOON = true;

  if (COMING_SOON) {
    // Hide standard prices and cart buttons
    document.querySelectorAll(".price, .add-to-cart").forEach(el => {
      el.style.display = "none";
    });
    // Show waitlist / notify buttons
    document.querySelectorAll(".notify-btn").forEach(el => {
      el.style.display = "flex"; // keeps flex/block properties stable
    });
  } else {
    // Hide waitlist buttons if site is fully Live
    document.querySelectorAll(".notify-btn").forEach(el => {
      el.style.display = "none";
    });
  }
});
