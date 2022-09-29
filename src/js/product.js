import ProductDetails from './productDetails.js';
import { getParam } from './utils.js';
import ProductData from './productData.js';

const dataSource = new ProductData();
const productId = getParam('product');

const product = new ProductDetails(productId, dataSource);
product.init();
