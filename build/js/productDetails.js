var a=(i,t,r)=>new Promise((u,s)=>{var p=d=>{try{o(r.next(d))}catch(c){s(c)}},l=d=>{try{o(r.throw(d))}catch(c){s(c)}},o=d=>d.done?u(d.value):Promise.resolve(d.value).then(p,l);o((r=r.apply(i,t)).next())});import{setLocalStorage as e,getLocalStorage as n}from"./utils.js";export default class h{constructor(t,r){this.productId=t,this.product={},this.dataSource=r}init(){return a(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))})}productInCart(t){return t.filter(r=>r.Id==this.product.Id).length>0}addToCart(){let t=n("so-cart");if(t==null)t=[],this.product.count=1,t.push(this.product),e("so-cart",t);else if(!this.productInCart(t))this.product.count=1,t.push(this.product),e("so-cart",t);else for(let r=0;r<t.length;r++)if(t[r].Id==this.product.Id){t[r].count++;break}}renderProductDetails(){return`<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${this.product.Image}"
      alt="${this.product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${this.product.FinalPrice}</p>
    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${this.product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
    </div></section>`}}
