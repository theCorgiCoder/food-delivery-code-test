import React from "react";
import { TouchableOpacity, Image, Text, ViewStyle, View } from "react-native";
import { styles } from "./Filter.styles";
import CustomText from "../customText/CustomText";

interface FilterProps {
  image: string;
  name: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
}

const Filter: React.FC<FilterProps> = ({ onPress, name, image, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.dropShadow}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
        <CustomText
          title={"title2"}
          content={name}
          color={"black"}
          style={styles.text}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Filter;
