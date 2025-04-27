
  function displayProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
  
    let userProducts = JSON.parse(localStorage.getItem('products')) || [];
    let allProducts = [...defaultProducts, ...userProducts];
  
    allProducts.forEach((product, index) => {
      const card = document.createElement('div');
      card.className = 'product';
  
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <p>${product.description}</p>
        <button class="button1" onclick="addToCart('${product.name}', '${product.price}', '${product.image}')">Add to Cart</button>
      `;
  
      container.appendChild(card);
    });
  }
  
  function addToCart(name, price, image) {
    alert(Addedtocart: ${name});
  }
  
  window.onload = displayProducts;