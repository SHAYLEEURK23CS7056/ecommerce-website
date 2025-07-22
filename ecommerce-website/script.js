// script.js

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productName = btn.dataset.name;
      const price = btn.dataset.price;

      // Store in local storage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ name: productName, price: price });
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${productName} added to cart!`);
    });
  });
});
