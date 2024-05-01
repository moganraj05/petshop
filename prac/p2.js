  // Function to handle Buy Now button click (optional)
  function buyNow() {
    alert("Redirecting to checkout...");
    // Add logic to redirect to checkout page if needed
  }
  
  // Function to handle Add to Cart button click
  function addToCart() {
    // Get product details
    const productName = document.querySelector('.product-description h2').innerText;
    const productImageSrc = document.querySelector('.product-image img').src;
    const productDescription = document.querySelector('.product-description p').innerText;
  
    // Create cart item element
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${productImageSrc}" alt="${productName}" width="50">
      <div>
        <strong>${productName}</strong>
        <p>${productDescription}</p>
      </div>
    `;
  
    // Append cart item to the cart
    const cartList = document.getElementById('cart-items');
    cartList.appendChild(cartItem);
  
    // Optional: Show confirmation message
    alert("Product added to cart!");
  }
  