/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCartProduct = /* GraphQL */ `
  query GetCartProduct($id: ID!) {
    getCartProduct(id: $id) {
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
export const listCartProducts = /* GraphQL */ `
  query ListCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
