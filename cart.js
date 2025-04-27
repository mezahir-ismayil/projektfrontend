function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartTable = document.querySelector('#cartTable tbody');
    cartTable.innerHTML = '';

    let subtotal = 0;

    cart.forEach((item, index) => {
        let row = document.createElement('tr');

        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}"><br>${item.name}</td>
            <td>${item.price} $</td>
            <td><input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)"></td>
            <td>${(item.price * item.quantity).toFixed(2)} $</td>
            <td><button class="remove-btn" onclick="removeItem(${index})">Удалить</button></td>
        `;

        cartTable.appendChild(row);

        subtotal += item.price * item.quantity;
    });

    document.getElementById('subtotal').innerText = subtotal.toFixed(2) + ' $';
    document.getElementById('total').innerText = subtotal.toFixed(2) + ' $';
}

function updateQuantity(index, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function proceedToCheckout() {
    window.location.href = "checkout.html";
}

loadCart();