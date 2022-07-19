/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount) {
      clientSecret
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
    }
  }
`;
export const createCartProduct = /* GraphQL */ `
  mutation CreateCartProduct(
    $input: CreateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    createCartProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        title
        description
        image
        images
        options
        avgRating
        ratings
        price
        oldPrice
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCartProduct = /* GraphQL */ `
  mutation UpdateCartProduct(
    $input: UpdateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    updateCartProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        title
        description
        image
        images
        options
        avgRating
        ratings
        price
        oldPrice
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCartProduct = /* GraphQL */ `
  mutation DeleteCartProduct(
    $input: DeleteCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    deleteCartProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        title
        description
        image
        images
        options
        avgRating
        ratings
        price
        oldPrice
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
