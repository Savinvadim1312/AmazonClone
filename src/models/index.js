// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, CartProduct } = initSchema(schema);

export {
  Product,
  CartProduct
};