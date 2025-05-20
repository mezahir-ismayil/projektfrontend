

const imageN = document.getElementById("image");


imageN.addEventListener("input", () => { 
  let preview = document.getElementById("preview");
preview.src = imageN.value;
}) 

  function saveProduct() {
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;
    const product = {
      id: Date.now(),
      brand,
      model,
      category,
      description,
      price,
      image,
      rating: "1/1"
    };

    let products = JSON.parse(localStorage.getItem("myProducts")) || [];
    products.push(product);
    localStorage.setItem("myProducts", JSON.stringify(products));

    window.location.href = "myproducts.html";
}
let editProductId = null;

  products.forEach(product => {
    let row = document.createElement('tr');

    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.brand}</td>
      <td>${product.model}</td>
      <td>${product.category}</td>
      <td><img src="${product.image}" alt="Изображение" style="width: 50px; height: 50px;"></td>
      <td>${product.price}</td>
      <td>${product.rating}</td>
      <td>
        <button onclick="deleteProduct(${product.id})">Удалить</button>
        <button onclick="editProduct(${product.id})">Редактировать</button>
      </td>
    `;
    row.innerHTML = `
  <td>${product.id}</td>
  <td>${product.brand}</td>
  <td>${product.model}</td>
  <td>${product.category}</td>
  <td><img src="${product.image}" alt="Изображение" style="width: 50px; height: 50px;"></td>
  <td>${product.price}</td>
  <td>${product.rating}</td>
  <td>
    <button onclick="deleteProduct(${product.id})">Удалить</button>
    <button onclick="editProduct(${product.id})">Редактировать</button>
  </td>
`;

    productList.appendChild(row);
  });

function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  products = products.filter(product => product.id !== id);
  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
}



