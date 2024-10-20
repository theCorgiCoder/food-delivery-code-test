import React from "react";
import { FilterData } from "@/services/api";
import { TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./Filter.styles";

interface FilterProps {
  filterData: FilterData;
  onPress: () => void;
}

const Filter: React.FC<FilterProps> = ({ onPress, filterData }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: filterData.image_url }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text>{filterData.name}</Text> {/* Display filter name */}
    </TouchableOpacity>
  );
};

export default Filter;
