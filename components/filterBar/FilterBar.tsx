import React from "react";
import { FlatList, View, ViewStyle } from "react-native";
import Filter from "../filter/Filter";
import { SafeAreaView } from "react-native-safe-area-context";
import { FilterModel } from "@/models/apiTypes";

interface FilterProps {
  filters: FilterModel[];
  handleOnPress: () => void;
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
          <Filter
            image={item.image_url}
            name={item.name}
            onPress={handleOnPress}
          />
        )}
      />
    </View>
  );
};

export default FilterBar;
