let products = JSON.parse(localStorage.getItem("myProducts")) || [];

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  localStorage.setItem("myProducts", JSON.stringify(products));
  renderProducts();
}

function renderProducts() {
  const list = document.getElementById("productList");
  if (!list) return;

  list.innerHTML = "";
  for (const p of products) {
    list.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.brand}</td>
        <td>${p.model}</td>
        <td>${p.category}</td>
        <td><img src="${p.image}" width="60"></td>
        <td>${p.price} $</td>
        <td>${p.rating}</td>
        <td>
          <button class="blue">Редактировать</button>
          <button class="red" onclick="deleteProduct(${p.id})">Удалить</button>
        </td>
      </tr>
    `;
  }
}

renderProducts();


function renderProducts() {
  let products = JSON.parse(localStorage.getItem('myProducts')) || [];
  let productList = document.getElementById('productList');
  productList.innerHTML = '';

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

    productList.appendChild(row);
  });
}
function editProduct(id) {
  localStorage.setItem("editProductId", id);
  window.location.href = "edit-product.html";
}