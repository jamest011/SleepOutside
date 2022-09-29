import ProductList from '../js/productList.js';
import ProductData from '../js/productData.js';
import { loadHeaderFooter, getParam } from '../js/utils.js';
loadHeaderFooter();

// first create an instance of our ProductData class. 
const category = getParam('category'); 

// first create an instance of our ProductData class.
const dataSource = new ProductData();
// then get the element we want the product list to render in
const listElement = document.querySelector('.product-list');
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();