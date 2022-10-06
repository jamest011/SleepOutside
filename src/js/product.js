import ProductDetails from './productDetails.js';
import { getParam } from './utils.js';
import externalServices from './externalServices.js';

const dataSource = new externalServices();
const productId = getParam('product');
const category =  getParam('category');

const product = new ProductDetails(productId, dataSource, category);
product.init();
