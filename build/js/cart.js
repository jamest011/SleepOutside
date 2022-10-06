const shopping_cart=document.querySelector(".cart"),cart_buttons=document.querySelectorAll(".addToCart");function getLocalStorage(t){return JSON.parse(localStorage.getItem(t))}function getCartContents(){let t="";const r=getLocalStorage("so-cart"),c=r.map(a=>renderCartItem(a));document.querySelector(".product-list").innerHTML=c.join("")}function renderCartItem(t){const r=`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${t.Image}"
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
</li>`;return console.log(r),r}getCartContents();for(cart_buttons of cart_buttons)cart_buttons.onclick=t=>{let r=Number(shopping_cart.getAttribute("data-product-count"))||0;shopping_cart.setAttribute("data-product-count",r+1)};
