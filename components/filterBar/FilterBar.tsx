import React from "react";
import { FlatList, TouchableOpacity, View, ViewStyle } from "react-native";
import Filter from "../filter/Filter";
import { FilterModel } from "@/models/apiTypes";

interface FilterProps {
  filters: FilterModel[];
  handleOnPress: (filterId: string | null) => void;
  style?: ViewStyle | ViewStyle[];
}

const FilterBar: React.FC<FilterProps> = ({
  handleOnPress,
  filters,
  style,
}) => {
  return (
    <View style={style}>
      <FlatList
        data={filters}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleOnPress(item.id)}>
            <Filter image={item.image_url} name={item.name} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FilterBar;
