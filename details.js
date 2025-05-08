document.getElementById = function(){
    let image = document.getElementById("image").value;
    let price = document.getElementById("price").value;
    let name = document.getElementById("name").value;
}
function addToCart(name, price, image) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    var existingItem = cart.find(function(item) {
        return item.name === name;
    });

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: name, price: price, image: image, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}