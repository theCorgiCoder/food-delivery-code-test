import React from "react";
import {
  FlatList,
  ScrollView,
  Image,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./FilterBar.styles";
import CustomImage from "../customImage/CustomImage";
import { FilterData } from "@/services/api";
import Filter from "../filter/Filter";

interface FilterProps {
  filters: FilterData[];
  style?: ViewStyle | ViewStyle[];
  handleOnPress: () => void;
}

const FilterBar: React.FC<FilterProps> = ({
  style,
  handleOnPress,
  filters,
}) => {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <View style={styles.filterContainer}>
          <Image source={{ uri: item.image_url }} style={styles.image} />
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
};

export default FilterBar;
