import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from '@aws-amplify/datastore';

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type CartProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

export declare class Product {
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly image: string;
  readonly images: string[];
  readonly options?: string[] | null;
  readonly avgRating?: number | null;
  readonly ratings?: number | null;
  readonly price: number;
  readonly oldPrice?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(
    init: //@ts-ignore
    ModelInit<Product, ProductMetaData>,
  );
  static copyOf(
    source: Product,
    mutator: (
      draft: //@ts-ignore
      MutableModel<Product, ProductMetaData>,
    ) => //@ts-ignore
    MutableModel<Product, ProductMetaData> | void,
  ): Product;
}

export declare class CartProduct {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID: string;
  readonly product?: Product | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(
    //@ts-ignore
    init: ModelInit<CartProduct, CartProductMetaData>,
  );
  static copyOf(
    source: CartProduct,
    mutator: (
      //@ts-ignore
      draft: MutableModel<CartProduct, CartProductMetaData>,
    ) => //@ts-ignore
    MutableModel<CartProduct, CartProductMetaData> | void,
  ): CartProduct;
}
