import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
const bgImage = {
  uri:
    'https://res.cloudinary.com/dgaobrwxs/image/upload/v1658246237/SaveIt/Screen_Shot_2022-07-19_at_18.55.50_pouvut.png',
};
const WhoSpoileScreen = () => {
  return (
    <>
      <ImageBackground style={styles.backgroundImage} source={bgImage}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri:
                'https://res.cloudinary.com/dgaobrwxs/image/upload/v1658254567/SaveIt/Screen_Shot_2022-07-19_at_21.15.07_loj9md.png',
            }}
          />
          <TextInput style={styles.input}>את מי מפנקים</TextInput>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 159,
    height: 157,
    borderRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
});
export default WhoSpoileScreen;
