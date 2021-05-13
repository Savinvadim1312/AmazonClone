/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PaymentIntent = {
  __typename: "PaymentIntent",
  clientSecret?: string,
};

export type CreateProductInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  image: string,
  images: Array< string >,
  options?: Array< string > | null,
  avgRating?: number | null,
  ratings?: number | null,
  price: number,
  oldPrice?: number | null,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  options?: ModelStringInput | null,
  avgRating?: ModelFloatInput | null,
  ratings?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  oldPrice?: ModelFloatInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id?: string,
  title?: string,
  description?: string | null,
  image?: string,
  images?: Array< string >,
  options?: Array< string > | null,
  avgRating?: number | null,
  ratings?: number | null,
  price?: number,
  oldPrice?: number | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateProductInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  images?: Array< string > | null,
  options?: Array< string > | null,
  avgRating?: number | null,
  ratings?: number | null,
  price?: number | null,
  oldPrice?: number | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateCartProductInput = {
  id?: string | null,
  userSub: string,
  quantity: number,
  option?: string | null,
  productID: string,
  _version?: number | null,
};

export type ModelCartProductConditionInput = {
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCartProductConditionInput | null > | null,
  or?: Array< ModelCartProductConditionInput | null > | null,
  not?: ModelCartProductConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CartProduct = {
  __typename: "CartProduct",
  id?: string,
  userSub?: string,
  quantity?: number,
  option?: string | null,
  productID?: string,
  product?: Product,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateCartProductInput = {
  id: string,
  userSub?: string | null,
  quantity?: number | null,
  option?: string | null,
  productID?: string | null,
  _version?: number | null,
};

export type DeleteCartProductInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateOrderProductInput = {
  id?: string | null,
  quantity: number,
  option?: string | null,
  productID: string,
  orderID: string,
  _version?: number | null,
};

export type ModelOrderProductConditionInput = {
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  orderID?: ModelIDInput | null,
  and?: Array< ModelOrderProductConditionInput | null > | null,
  or?: Array< ModelOrderProductConditionInput | null > | null,
  not?: ModelOrderProductConditionInput | null,
};

export type OrderProduct = {
  __typename: "OrderProduct",
  id?: string,
  quantity?: number,
  option?: string | null,
  productID?: string,
  product?: Product,
  orderID?: string,
  order?: Order,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type Order = {
  __typename: "Order",
  id?: string,
  userSub?: string,
  fullName?: string,
  phoneNumber?: string | null,
  country?: string | null,
  city?: string | null,
  address?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateOrderProductInput = {
  id: string,
  quantity?: number | null,
  option?: string | null,
  productID?: string | null,
  orderID?: string | null,
  _version?: number | null,
};

export type DeleteOrderProductInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateOrderInput = {
  id?: string | null,
  userSub: string,
  fullName: string,
  phoneNumber?: string | null,
  country?: string | null,
  city?: string | null,
  address?: string | null,
  _version?: number | null,
};

export type ModelOrderConditionInput = {
  userSub?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type UpdateOrderInput = {
  id: string,
  userSub?: string | null,
  fullName?: string | null,
  phoneNumber?: string | null,
  country?: string | null,
  city?: string | null,
  address?: string | null,
  _version?: number | null,
};

export type DeleteOrderInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  options?: ModelStringInput | null,
  avgRating?: ModelFloatInput | null,
  ratings?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  oldPrice?: ModelFloatInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items?:  Array<Product | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCartProductFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCartProductFilterInput | null > | null,
  or?: Array< ModelCartProductFilterInput | null > | null,
  not?: ModelCartProductFilterInput | null,
};

export type ModelCartProductConnection = {
  __typename: "ModelCartProductConnection",
  items?:  Array<CartProduct | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderProductFilterInput = {
  id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  orderID?: ModelIDInput | null,
  and?: Array< ModelOrderProductFilterInput | null > | null,
  or?: Array< ModelOrderProductFilterInput | null > | null,
  not?: ModelOrderProductFilterInput | null,
};

export type ModelOrderProductConnection = {
  __typename: "ModelOrderProductConnection",
  items?:  Array<OrderProduct | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items?:  Array<Order | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreatePaymentIntentMutationVariables = {
  amount?: number,
};

export type CreatePaymentIntentMutation = {
  createPaymentIntent:  {
    __typename: "PaymentIntent",
    clientSecret: string,
  },
};

export type CreateProductMutationVariables = {
  input?: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input?: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input?: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCartProductMutationVariables = {
  input?: CreateCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type CreateCartProductMutation = {
  createCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCartProductMutationVariables = {
  input?: UpdateCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type UpdateCartProductMutation = {
  updateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCartProductMutationVariables = {
  input?: DeleteCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type DeleteCartProductMutation = {
  deleteCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderProductMutationVariables = {
  input?: CreateOrderProductInput,
  condition?: ModelOrderProductConditionInput | null,
};

export type CreateOrderProductMutation = {
  createOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullName: string,
      phoneNumber?: string | null,
      country?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderProductMutationVariables = {
  input?: UpdateOrderProductInput,
  condition?: ModelOrderProductConditionInput | null,
};

export type UpdateOrderProductMutation = {
  updateOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullName: string,
      phoneNumber?: string | null,
      country?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderProductMutationVariables = {
  input?: DeleteOrderProductInput,
  condition?: ModelOrderProductConditionInput | null,
};

export type DeleteOrderProductMutation = {
  deleteOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullName: string,
      phoneNumber?: string | null,
      country?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input?: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullName: string,
    phoneNumber?: string | null,
    country?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input?: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullName: string,
    phoneNumber?: string | null,
    country?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input?: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullName: string,
    phoneNumber?: string | null,
    country?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id?: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCartProductsQueryVariables = {
  filter?: ModelCartProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCartProductsQuery = {
  syncCartProducts?:  {
    __typename: "ModelCartProductConnection",
    items?:  Array< {
      __typename: "CartProduct",
      id: string,
      userSub: string,
      quantity: number,
      option?: string | null,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string >,
        options?: Array< string > | null,
        avgRating?: number | null,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCartProductQueryVariables = {
  id?: string,
};

export type GetCartProductQuery = {
  getCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCartProductsQueryVariables = {
  filter?: ModelCartProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartProductsQuery = {
  listCartProducts?:  {
    __typename: "ModelCartProductConnection",
    items?:  Array< {
      __typename: "CartProduct",
      id: string,
      userSub: string,
      quantity: number,
      option?: string | null,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string >,
        options?: Array< string > | null,
        avgRating?: number | null,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrderProductsQueryVariables = {
  filter?: ModelOrderProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrderProductsQuery = {
  syncOrderProducts?:  {
    __typename: "ModelOrderProductConnection",
    items?:  Array< {
      __typename: "OrderProduct",
      id: string,
      quantity: number,
      option?: string | null,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string >,
        options?: Array< string > | null,
        avgRating?: number | null,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      orderID: string,
      order?:  {
        __typename: "Order",
        id: string,
        userSub: string,
        fullName: string,
        phoneNumber?: string | null,
        country?: string | null,
        city?: string | null,
        address?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderProductQueryVariables = {
  id?: string,
};

export type GetOrderProductQuery = {
  getOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullName: string,
      phoneNumber?: string | null,
      country?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrderProductsQueryVariables = {
  filter?: ModelOrderProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderProductsQuery = {
  listOrderProducts?:  {
    __typename: "ModelOrderProductConnection",
    items?:  Array< {
      __typename: "OrderProduct",
      id: string,
      quantity: number,
      option?: string | null,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string >,
        options?: Array< string > | null,
        avgRating?: number | null,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      orderID: string,
      order?:  {
        __typename: "Order",
        id: string,
        userSub: string,
        fullName: string,
        phoneNumber?: string | null,
        country?: string | null,
        city?: string | null,
        address?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdersQuery = {
  syncOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      userSub: string,
      fullName: string,
      phoneNumber?: string | null,
      country?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id?: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullName: string,
    phoneNumber?: string | null,
    country?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      userSub: string,
      fullName: string,
      phoneNumber?: string | null,
      country?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCartProductSubscription = {
  onCreateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCartProductSubscription = {
  onUpdateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCartProductSubscription = {
  onDeleteCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderProductSubscription = {
  onCreateOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullName: string,
      phoneNumber?: string | null,
      country?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderProductSubscription = {
  onUpdateOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullName: string,
      phoneNumber?: string | null,
      country?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderProductSubscription = {
  onDeleteOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    quantity: number,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullName: string,
      phoneNumber?: string | null,
      country?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullName: string,
    phoneNumber?: string | null,
    country?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullName: string,
    phoneNumber?: string | null,
    country?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullName: string,
    phoneNumber?: string | null,
    country?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
