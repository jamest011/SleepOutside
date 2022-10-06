import{getLocalStorage as n}from"./utils.js";const l=document.querySelector(".cart");let o=document.querySelectorAll(".addToCart");function d(){let t="";const r=n("so-cart");if(r!==null){const e=r.map(c=>p(c));document.querySelector(".product-list").innerHTML=e.join(""),m()}}function m(){let t=n("so-cart");if(t!==null&&t.length>0){let r=0;for(let c=0;c<t.length;c++){const a=t[c],s=a.FinalPrice,u=a.count,i=s*u;r+=i}document.getElementById("cart-total").textContent="Total:  $"+r;const e=document.querySelector(".cart-footer");e.classList.remove("hide")}}function p(t){const r=`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${t.Images.PrimaryMedium}"
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
</li>`;return console.log(r),r}d();for(o of o)o.onclick=t=>{let r=Number(l.getAttribute("data-product-count"))||0;l.setAttribute("data-product-count",r+1)};
