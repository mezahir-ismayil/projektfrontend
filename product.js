const product = JSON.parse(localStorage.getItem("currentProduct"));

if (product) {
  document.getElementById("productImage").src = product.image;
  document.getElementById("productTitle").textContent = product.model;
  document.getElementById("productPrice").textContent = product.price + " $";
  document.getElementById("productDescription").textContent = product.description;
} else {
  window.location.href = "shop.html";
}
