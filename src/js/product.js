import ProductDetails from './productDetails.js';
import { getParam } from './utils.js';
import ProductData from './productData.js';

const dataSource = new ProductData();
const productId = getParam('product');
const category =  getParam('category');

const product = new ProductDetails(productId, dataSource, category);
product.init();
