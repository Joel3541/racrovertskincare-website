// WHATSAPP
function openWhatsApp() {
  window.open(
    "https://wa.me/+12674563836"
  );
}

// BACK TO TOP
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 300 ? "block" : "none";
});

toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.style.display =
    navMenu.style.display === "flex" ? "none" : "flex";
});



// MODAL
const modal = document.getElementById("productModal");

function openModal(title, desc, price) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modalPrice").innerText = price;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}



