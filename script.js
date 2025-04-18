document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("product-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close-button");

  const products = document.querySelectorAll(".product-card"); // Asegúrate de usar esta clase en cada producto

  products.forEach(product => {
    product.addEventListener("click", () => {
      const img = product.querySelector("img").src;
      const title = product.querySelector(".product-title").textContent;
      const desc = product.getAttribute("data-description");

      modalImg.src = img;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
