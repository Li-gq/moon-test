import Mock from 'mockjs';
import orderInfo from './orderInfo.json';


// /api/product/getBaseCategoryList
// get
Mock.mock("/mock/orderInfo", {code:200, data:orderInfo});
