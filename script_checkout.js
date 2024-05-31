document.addEventListener('DOMContentLoaded', function() {
    // Get the cart count from localStorage
    const cartCountElem = document.getElementById('cart-count');
    const cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCountElem.textContent = cartCount;
  
    // Retrieve checkout items from localStorage and display them
    const checkoutItemsContainer = document.querySelector('.checkout-items');
    const checkoutItems = JSON.parse(localStorage.getItem('checkoutItems')) || [];
  
    checkoutItems.forEach(item => {
      const itemElem = document.createElement('div');
      itemElem.textContent = item.name; // Adjust this to display actual item info
      checkoutItemsContainer.appendChild(itemElem);
    });
  
    // Calculate and display total
    const totalElem = document.querySelector('.checkout-total h2');
    let total = 0; // Calculate actual total based on item prices
    totalElem.textContent = `Total: $${total.toFixed(2)}`;
  
    // Handle checkout button click
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', function() {
      // Implement payment processing or redirect to payment gateway
      alert('Proceeding to payment...');
    });
  });
  