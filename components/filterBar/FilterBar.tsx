import React from "react";
import { FlatList, View, ViewStyle } from "react-native";
import Filter from "../filter/Filter";
import { FilterModel } from "@/types/types";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

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
  const selectedFilter = useSelector(
    (state: RootState) => state.restaurant.selectedFilters
  );

  return (
    <View style={style}>
      <FlatList
        data={filters}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const isSelected = selectedFilter.includes(item.id);
          return (
            <Filter
              image={item.image_url}
              name={item.name}
              id={item.id}
              isSelected={isSelected}
              onPress={handleOnPress}
            />
          );
        }}
      />
    </View>
  );
};

export default FilterBar;
