// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, CartProduct, OrderProduct, Order } = initSchema(schema);

export {
  Product,
  CartProduct,
  OrderProduct,
  Order
};