import{getLocalStorage as n}from"./utils.js";const a=document.querySelector(".cart");let c=document.querySelectorAll(".addToCart");function s(){let t="";const r=n("so-cart"),e=r.map(o=>l(o));document.querySelector(".product-list").innerHTML=e.join("")}function l(t){const r=`<li class="cart-card divider">
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
</li>`;return console.log(r),r}s();for(c of c)c.onclick=t=>{let r=Number(a.getAttribute("data-product-count"))||0;a.setAttribute("data-product-count",r+1)};
