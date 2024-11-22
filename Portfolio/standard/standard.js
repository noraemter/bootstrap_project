  // Mock product data
  const products = [

    // Accessorize
     { name: "BOOK GUIDE", label: "Accessorize, Home Decor", img: "./img/book.jpg", category: "Accessory" },
    { name: "RETRO CAMERA", label: "Accessorize, Home Decor", img: "./img/camera.jpg", category: "Accessory" },
    { name: "ELEGANT CUTLERY", label: "Accessorize, Home Decor", img: "./img/elegant.jpg", category: "Accessory" },
    { name: "GIFT BOX",  label: "Accessorize, Home Decor", img: "./img/box.jpg", category: "Accessory" },
    { name: "SHOPPING MOOD", label: "Accessorize, Home Decor", img: "./img/shopping.jpg", category: "Accessory" },
    { name: "CARDS AND GIFTS", label: "Accessorize, Home Decor", img: "./img/cards.jpg", category: "Accessory" },
//basics
{ name: "SCENTED CANDLES", label: "Basics, Home Decor", img: "./img/candels.jpg", category: "basics" },

//decoration
{ name: "BLOOMING HOUSEPLANT", label: "Decoration, Home Decor", img: "./img/houseplant.jpg", category: "decoration" },
{ name: "KITCHEN ACCESSORIES", label: "Decoration, Home Decor", img: "./img/kithchen.jpg", category: "decoration" },

];


function filterProducts(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear current products

    const filteredProducts = category === 'all'
        ? products
        : products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-3', 'mb-4');
        productCard.innerHTML = `
            <div class="card h-100">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted">${product.label}</p>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Initial load: display all products
filterProducts('all');