import React from "react";
import { Image, View, ViewStyle } from "react-native";
import { styles } from "./CustomImage.styles";

interface ImageProps {
  style?: ViewStyle | ViewStyle[];
}

const CustomImage: React.FC<ImageProps> = ({ style }) => {
  return (
    <View style={style}>
      <Image />
    </View>
  );
};

export default CustomImage;
