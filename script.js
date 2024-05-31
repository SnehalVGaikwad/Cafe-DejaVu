// Toggle mobile menu
const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Image slider functionality
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

function showSlide(index) {
  if (index >= slideImages.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slideImages.length - 1;
  } else {
    currentIndex = index;
  }
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// Auto slide functionality
setInterval(() => {
  showSlide(currentIndex + 1);
}, 3000);

// Menu item counter functionality
let cartCount = 0;
const cartCountElem = document.getElementById('cart-count');
const popupMessage = document.getElementById('popup-message');

function showPopupMessage(message) {
  popupMessage.textContent = message;
  popupMessage.classList.add('show');

  setTimeout(() => {
    popupMessage.classList.remove('show');
  }, 3000);
}

function updateCartCount(count) {
  cartCount += count;
  cartCountElem.textContent = cartCount;
}

function increaseCount(button) {
  const itemCountElem = button.previousElementSibling;
  let count = parseInt(itemCountElem.textContent);
  count++;
  itemCountElem.textContent = count;
  updateCartCount(1);
}

function decreaseCount(button) {
  const itemCountElem = button.nextElementSibling;
  let count = parseInt(itemCountElem.textContent);
  if (count > 0) {
    count--;
    itemCountElem.textContent = count;
    updateCartCount(-1);
  }
}

// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
  const incrementBtns = document.querySelectorAll('.increment-btn');
  const decrementBtns = document.querySelectorAll('.decrement-btn');
  const addToCartBtns = document.querySelectorAll('.add-to-cart');
  const cartCountElem = document.getElementById('cart-count');
  const popupMessage = document.getElementById('popup-message');

  let cartCount = 0;

  function updateCartCount(count) {
    cartCount += count;
    cartCountElem.textContent = cartCount;
  }

  incrementBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      console.log('Increment button clicked');
      const countElem = this.parentElement.querySelector('.count');
      let count = parseInt(countElem.textContent);
      count++;
      countElem.textContent = count;
    });
  });

  decrementBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      console.log('Decrement button clicked');
      const countElem = this.parentElement.querySelector('.count');
      let count = parseInt(countElem.textContent);
      if (count > 0) {
        count--;
        countElem.textContent = count;
      }
    });
  });

  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const count = parseInt(this.parentElement.querySelector('.count').textContent);
      if (count > 0) {
        updateCartCount(count);
        showPopupMessage('Item added to cart.');
      } 
      else {
        showPopupMessage('Please select at least one item.');
      }
    });
  });

  function showPopupMessage(message) {
    console.log('Showing pop-up message:', message);
    popupMessage.textContent = message;
    popupMessage.classList.add('show');

    setTimeout(() => {
      popupMessage.classList.remove('show');
    }, 3000);
  }
});
