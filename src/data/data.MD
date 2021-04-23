# Dummy Data for Amazon Clone

## Product Images

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/imac1.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/imac2.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/keyboard1.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/keyboard2.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse2.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse3.jpg

## Files
- **products.ts**: A list of products having:
  - id
  - title
  - image
  - avgRating
  - ratings
  - price
  - oldPrice (optional)
- **product.ts**: Product details
  - id
  - title
  - *description*
  - image
  - *images* (array of images)
  - *options* (array if possible variation/options)
  - avgRating
  - ratings
  - price
  - oldPrice (optional)
- **cart.ts**: Items in the cart
  - id
  - item
  - quantity
  - option (selected option)