// cart.js

document.addEventListener("DOMContentLoaded", () => {
  const cartItemsDiv = document.getElementById("cart-items");
  const totalDiv = document.getElementById("total");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <h2>${item.name}</h2>
      <p>Price: ₹${item.price}</p>
    `;
    cartItemsDiv.appendChild(div);
    total += parseInt(item.price);
  });

  totalDiv.textContent = `Total: ₹${total}`;
});
