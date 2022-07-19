import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';
import {DataStore} from 'aws-amplify';

import {CartProduct} from '../../models';

interface CartProductItemProps {
  cartItem: CartProduct;
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  console.log(cartItem);
  const {product, ...cartProduct} = cartItem;

  const updateQuantity = async (newQuantity: number) => {
    const original = await DataStore.query(CartProduct, cartProduct.id);

    await DataStore.save(
      //@ts-ignore
      CartProduct.copyOf(original, updated => {
        updated.quantity = newQuantity;
      }),
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          //@ts-ignore
          style={styles.image}
          source={{
            //@ts-ignore
            uri: product.image,
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {
              //@ts-ignore
              product.title
            }
          </Text>
          {/* Ratings */}
          <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                //@ts-ignore
                key={`${product.id}-${i}`}
                style={styles.star}
                //@ts-ignore
                name={i < Math.floor(product.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))}
            <Text>
              {
                //@ts-ignore
                product.ratings
              }
            </Text>
          </View>
          <Text style={styles.price}>
            from $
            {
              //@ts-ignore
              product.price
            }
            {
              //@ts-ignore
              product.oldPrice && (
                <Text style={styles.oldPrice}>
                  {' '}
                  $
                  {
                    //@ts-ignore
                    product.oldPrice
                  }
                </Text>
              )
            }
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector
          quantity={cartProduct.quantity}
          setQuantity={updateQuantity}
        />
      </View>
    </View>
  );
};

export default CartProductItem;
