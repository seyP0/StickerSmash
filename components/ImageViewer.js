import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage ? {uri: selectedImage} : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,  //width size of the image
    height: 440, //Height size of the image
    borderRadius: 18, //size of the round edges
  },
});
