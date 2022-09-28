import {getLocalStorage} from './utils.js';

const shopping_cart = document.querySelector('.cart')
let cart_buttons = document.querySelectorAll('.addToCart')



function getCartContents() {
  let markup = '';
  const cartItems = getLocalStorage('so-cart');
  if (cartItems !== null){
  const htmlItems = cartItems.map((item) => renderCartItem(item));
  document.querySelector('.product-list').innerHTML = htmlItems.join('');
  // document.querySelector(".product-list").innerHTML = renderCartItem(cartItems);
  displayCartFooter();
  }
}

function displayCartFooter() {
  let cartItems = getLocalStorage('so-cart'); 
  // check if the so-cart is not null
  if (cartItems !== null){
    // check if so-cart is not empty
    if(cartItems.length > 0) { 
      let totalCost = 0;
      // calculate
        //loop through every product in the cart 
      for (let iItem = 0; iItem < cartItems.length; iItem++){
        //multiply count * final price
        const currentProduct = cartItems[iItem];
        const finalPrice = currentProduct.FinalPrice;
        const productCount = currentProduct.count;
        const totalItemPrice = finalPrice * productCount;
        //increase totalCost
        totalCost += totalItemPrice;

      }
      
      //Update total in HTMl 
      document.getElementById('cart-total').textContent = 'Total:  $' + totalCost;

      // remove the hiden class from the cart-footer element
      const cartFooter = document.querySelector('.cart-footer');
      //  remove a class form an element usign javascript?
      cartFooter.classList.remove('hide');
    } 
  }
}


function renderCartItem(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
  console.log(newItem);
  return newItem;
}

getCartContents();

for(cart_buttons of cart_buttons) {
    cart_buttons.onclick = (e)=> {
      let product_count = Number(shopping_cart.getAttribute('data-product-count')) || 0;
      shopping_cart.setAttribute('data-product-count', product_count + 1); 
    }
}