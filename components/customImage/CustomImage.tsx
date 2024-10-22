import React from "react";
import { Image, View, ViewStyle } from "react-native";
import { styles } from "./CustomImage.styles";

interface ImageProps {
  image: string | undefined;
  style?: ViewStyle | ViewStyle[];
}

const CustomImage: React.FC<ImageProps> = ({ image, style }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

export default CustomImage;
