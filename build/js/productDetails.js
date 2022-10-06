var u=(a,t,r)=>new Promise((o,e)=>{var p=d=>{try{c(r.next(d))}catch(i){e(i)}},l=d=>{try{c(r.throw(d))}catch(i){e(i)}},c=d=>d.done?o(d.value):Promise.resolve(d.value).then(p,l);c((r=r.apply(a,t)).next())});import{setLocalStorage as s,getLocalStorage as h,loadHeaderFooter as n}from"./utils.js";n();export default class m{constructor(t,r,o){this.productId=t,this.product={},this.category=o,this.dataSource=r}init(){return u(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId,this.category),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))})}productInCart(t){return t.filter(r=>r.Id==this.product.Id).length>0}addToCart(){let t=h("so-cart");if(t==null)t=[],this.product.count=1,t.push(this.product),s("so-cart",t);else if(!this.productInCart(t))this.product.count=1,t.push(this.product),s("so-cart",t);else for(let r=0;r<t.length;r++)if(t[r].Id==this.product.Id){t[r].count++,s("so-cart",t);break}}renderProductDetails(){return`<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${this.product.Images.PrimaryLarge}"
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
