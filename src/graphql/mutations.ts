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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createOrderProduct = /* GraphQL */ `
  mutation CreateOrderProduct(
    $input: CreateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    createOrderProduct(input: $input, condition: $condition) {
      id
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      orderID
      order {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateOrderProduct = /* GraphQL */ `
  mutation UpdateOrderProduct(
    $input: UpdateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    updateOrderProduct(input: $input, condition: $condition) {
      id
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      orderID
      order {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrderProduct = /* GraphQL */ `
  mutation DeleteOrderProduct(
    $input: DeleteOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    deleteOrderProduct(input: $input, condition: $condition) {
      id
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      orderID
      order {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
