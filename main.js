document.addEventListener("DOMContentLoaded", function () {
  // Toggle nested dropdowns
  document.querySelectorAll('.dropdown-menu .dropdown-toggle').forEach(function (element) {
      element.addEventListener('click', function (e) {
          // Close any open submenus
          const openSubmenus = this.closest('.dropdown-menu').querySelectorAll('.show');
          openSubmenus.forEach(function (submenu) {
              submenu.classList.remove('show');
          });
          
          // Open the targeted submenu
          this.nextElementSibling.classList.toggle('show');
          e.stopPropagation();
      });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener('click', function () {
      document.querySelectorAll('.dropdown-menu .show').forEach(function (submenu) {
          submenu.classList.remove('show');
      });
  });
});


document.getElementById("menu-icon").onclick = function(event) {
  event.preventDefault(); // Prevent default anchor action
  document.getElementById("side-menu").style.width = "300px";
};

// Close the side menu when clicking on the close button
document.getElementById("close-btn").onclick = function(event) {
  event.preventDefault(); // Prevent default anchor action
  document.getElementById("side-menu").style.width = "0";
}; 

// Add this script to your main.js or inline at the bottom of the HTML body

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var productsContainer = document.getElementById('products-container');
  var productRow = productsContainer.getElementsByClassName('row')[1]; // Get the second row

  var productRowTop = productRow.getBoundingClientRect().top;

  if (productRowTop <= 0) {
      navbar.classList.add('sticky');
  } else {
      navbar.classList.remove('sticky');
  }
});



  // Mock product data
  const products = [
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/clock.jpg", category: "all" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/flower_vase.jpg", category: "all" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/lamp.jpg", category: "all" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/sparkle.jpg", category: "all" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/table.jpg", category: "all" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/table2.jpg", category: "all" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/vase.jpg", category: "all" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/white_chair.jpg", category: "all" },
    { name: "Table Lamp", price: "$95", img: "../Home/img/homedecor/white_chair.jpg", category: "all" },
    { name: "Deco Accessory", price: "$15", img: "../Home/img/homedecor/sparkle.jpg", category: "all" },
    { name: "Deco Accessory", price: "$15", img: "../Home/img/homedecor/lamp.jpg", category: "all" },
    { name: "Flower Vase", price: "<del>$210</del> $170", img: "../Home/img/homedecor/flower_vase.jpg", category: "all" },
    { name: "Flower Vase", price: "<del>$210</del> $170", img: "../Home/img/homedecor/vase.jpg", category: "all" },
    { name: "Wall Clock", price: "$110", img: "../Home/img/homedecor/table.jpg", category: "all" },
    { name: "Wall Clock", price: "$110", img: "../Home/img/homedecor/table2.jpg", category: "all" },
    { name: "Wall Clock", price: "$110", img: "../Home/img/homedecor/clock.jpg", category: "all" },


    //homedecor
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/clock.jpg", category: "home-decor" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/flower_vase.jpg", category: "home-decor" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/lamp.jpg", category: "home-decor" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/sparkle.jpg", category: "home-decor" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/table.jpg", category: "home-decor" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/table2.jpg", category: "home-decor" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/vase.jpg", category: "home-decor" },
    { name: "Basket with Handles", price: "$160", img: "../Home/img/homedecor/white_chair.jpg", category: "home-decor" },
    //lighting
    { name: "Table Lamp", price: "$95", img: "../Home/img/homedecor/white_chair.jpg", category: "lighting" },
//decoration
    { name: "Deco Accessory", price: "$15", img: "../Home/img/homedecor/sparkle.jpg", category: "decoration" },
    { name: "Deco Accessory", price: "$15", img: "../Home/img/homedecor/lamp.jpg", category: "decoration" },
//vases

    { name: "Flower Vase", price: "<del>$210</del> $170", img: "../Home/img/homedecor/flower_vase.jpg", category: "vases" },
    { name: "Flower Vase", price: "<del>$210</del> $170", img: "../Home/img/homedecor/vase.jpg", category: "vases" },
//basics
    { name: "Wall Clock", price: "$110", img: "../Home/img/homedecor/table.jpg", category: "basics" },
    { name: "Wall Clock", price: "$110", img: "../Home/img/homedecor/table2.jpg", category: "basics" },
    { name: "Wall Clock", price: "$110", img: "../Home/img/homedecor/clock.jpg", category: "basics" },

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
                    <p class="card-text text-muted">${product.price}</p>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Initial load: display all products
filterProducts('all');