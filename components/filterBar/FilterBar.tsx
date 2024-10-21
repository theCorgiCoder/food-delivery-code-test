import React from "react";
import { FlatList } from "react-native";
import { styles } from "./FilterBar.styles";
import { FilterData } from "@/services/api";
import Filter from "../filter/Filter";
import { SafeAreaView } from "react-native-safe-area-context";

interface FilterProps {
  filters: FilterData[];
  handleOnPress: () => void;
}

const FilterBar: React.FC<FilterProps> = ({ handleOnPress, filters }) => {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default FilterBar;
