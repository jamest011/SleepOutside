import ProductList from './productList.js';
import externalServices from './externalServices.js';
import { loadHeaderFooter, getParam } from './utils.js';
loadHeaderFooter();

// first create an instance of our externalServices class. 
const category = getParam('category'); 

// first create an instance of our externalServices class.
const dataSource = new externalServices();
// then get the element we want the product list to render in
const listElement = document.querySelector('.product-list');
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();