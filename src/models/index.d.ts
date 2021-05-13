import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class PaymentIntent {
  readonly clientSecret: string;
  constructor(init: ModelInit<PaymentIntent>);
}

export declare class Product {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly image: string;
  readonly images: string[];
  readonly options?: string[];
  readonly avgRating?: number;
  readonly ratings?: number;
  readonly price: number;
  readonly oldPrice?: number;
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

export declare class CartProduct {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string;
  readonly productID: string;
  readonly product?: Product;
  constructor(init: ModelInit<CartProduct>);
  static copyOf(source: CartProduct, mutator: (draft: MutableModel<CartProduct>) => MutableModel<CartProduct> | void): CartProduct;
}

export declare class OrderProduct {
  readonly id: string;
  readonly quantity: number;
  readonly option?: string;
  readonly productID: string;
  readonly product?: Product;
  readonly orderID: string;
  readonly order?: Order;
  constructor(init: ModelInit<OrderProduct>);
  static copyOf(source: OrderProduct, mutator: (draft: MutableModel<OrderProduct>) => MutableModel<OrderProduct> | void): OrderProduct;
}

export declare class Order {
  readonly id: string;
  readonly userSub: string;
  readonly fullName: string;
  readonly phoneNumber?: string;
  readonly country?: string;
  readonly city?: string;
  readonly address?: string;
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}