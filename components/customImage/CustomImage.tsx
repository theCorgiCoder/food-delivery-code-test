import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { styles } from "./CustomImage.styles";

interface ImageProps {
  style?: ViewStyle | ViewStyle[];
}

const CustomImage: React.FC<ImageProps> = ({ style }) => {
  return (
    <View style={style}>
      <Text>Image goes here</Text>
    </View>
  );
};

export default CustomImage;
