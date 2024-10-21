import React from "react";
import { FilterData } from "@/services/api";
import { TouchableOpacity, Image, Text, ViewStyle, View } from "react-native";
import { styles } from "./Filter.styles";

interface FilterProps {
  image: string;
  name: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
}

const Filter: React.FC<FilterProps> = ({ onPress, name, image, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.shadow}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Filter;
