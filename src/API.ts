/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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
  createdAt: string,
  updatedAt: string,
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
};

export type DeleteProductInput = {
  id: string,
};

export type CreateCartProductInput = {
  id?: string | null,
  userSub: string,
  quantity: number,
  option?: string | null,
  productID: string,
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
  id: string,
  userSub: string,
  quantity: number,
  option?: string | null,
  productID: string,
  product?: Product | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCartProductInput = {
  id: string,
  userSub?: string | null,
  quantity?: number | null,
  option?: string | null,
  productID?: string | null,
};

export type DeleteCartProductInput = {
  id: string,
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
  items:  Array<Product | null >,
  nextToken?: string | null,
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
  items:  Array<CartProduct | null >,
  nextToken?: string | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCartProductMutationVariables = {
  input: CreateCartProductInput,
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
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCartProductMutationVariables = {
  input: UpdateCartProductInput,
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
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCartProductMutationVariables = {
  input: DeleteCartProductInput,
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
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
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
    items:  Array< {
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCartProductQueryVariables = {
  id: string,
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
      createdAt: string,
      updatedAt: string,
    } | null,
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
    items:  Array< {
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
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
      createdAt: string,
      updatedAt: string,
    } | null,
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
      createdAt: string,
      updatedAt: string,
    } | null,
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
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
