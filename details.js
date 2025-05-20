    let image = document.getElementById("image");
    let price = document.getElementById("price");
    let name1 = document.getElementById("name");
    let description = document.getElementById("description");


addNewProducts();

function addNewProducts() {
    let productList = JSON.parse(localStorage.getItem("myProducts"));
    let nummer = +localStorage.getItem("openDetails");
    console.log(productList[nummer].image);
    
    image.src = productList[nummer].image;
    name1.innerHTML = productList[nummer].brand + " " + productList[nummer].model;
    description.innerHTML = productList[nummer].description;
}