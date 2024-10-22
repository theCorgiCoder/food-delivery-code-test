import React from "react";
import { Image, ImageStyle, StyleProp, View } from "react-native";
import { styles } from "./CustomImage.styles";

interface ImageProps {
  image: string | undefined;
  style?: StyleProp<ImageStyle>;
}

const CustomImage: React.FC<ImageProps> = ({ image, style }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={[style, styles.image]} />
    </View>
  );
};

export default CustomImage;
