import React, { useState } from "react";
import { ActivityIndicator, View, Text, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFiltersLoader } from "@/utils/filterLoader";
import { useRestaurantsLoader } from "@/utils/restaurantLoader";
import { useDispatch } from "react-redux";
import { styles } from "./HomeScreen.styles";
import Header from "@/components/header/Header";
import RestaurantCard from "@/components/card/RestaurantCard";
import FilterBar from "@/components/filterBar/FilterBar";
import { selectRestaurant } from "@/redux/slices/restaurantSlice";
import { RestaurantModel } from "@/models/apiTypes";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const {
    filters,
    loading: filtersLoading,
    error: filtersError,
  } = useFiltersLoader();

  const {
    restaurants,
    loading: restaurantsLoading,
    error: restaurantsError,
  } = useRestaurantsLoader();

  const handleFilterPress = (filterId: string) => {
    // Toggle filter selection
    if (selectedFilters.includes(filterId)) {
      setSelectedFilters(selectedFilters.filter((id) => id !== filterId));
    } else {
      setSelectedFilters([...selectedFilters, filterId]);
    }
  };

  const filteredRestaurants =
    selectedFilters.length === 0
      ? restaurants
      : restaurants.filter((restaurant) =>
          restaurant.filterIds.some((id) => selectedFilters.includes(id))
        );

  if (restaurantsLoading || filtersLoading) {
    return (
      <SafeAreaView style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (restaurantsError || filtersError) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{restaurantsError || filtersError}</Text>
      </SafeAreaView>
    );
  }

  if (filters.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{filtersError}</Text>
      </SafeAreaView>
    );
  }

  const handlePressRestaurant = (restaurant: RestaurantModel) => {
    dispatch(selectRestaurant(restaurant)); //dispatch action to select restaurant
    router.push("/screens/details/DetailsScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      <FilterBar
        filters={filters}
        handleOnPress={handleFilterPress}
        style={styles.filterBar}
      />
      <View style={styles.list}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={true}
          data={filteredRestaurants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RestaurantCard
              data={item}
              handleOnPress={() => handlePressRestaurant(item)}
              style={{ marginVertical: 10 }}
            />
          )}
          ListFooterComponent={<View style={{ height: 100 }} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
