
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


  renderProducts();


function renderProducts() {
  let products = JSON.parse(localStorage.getItem('myProducts')) || [];
  let parent = document.getElementsByClassName('class78')[0];


  products.forEach(product => {
    let newDiv = document.createElement('div');

    newDiv.innerHTML = `
    <img src="${product.image}" alt="Изображение">
      <h1>${product.brand + product.model}</h1>
      <p>${product.price}</p>
      <p>★★★★☆ (42)</p>
      <button class = "button1" >Add to Cart</button>
    `;
    newDiv.classList.add("product");
    newDiv.addEventListener("click", ()=> {
      window.location="details.html";
    })
    parent.append(newDiv);
  });
}


  // localStorage.clear();
  
  // function addToCart(name, price, image) {
  //   alert(Addedtocart: ${name});
  // }
  
  // window.onload = displayProducts;