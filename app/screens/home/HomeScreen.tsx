import React, { useEffect } from "react";
import { ActivityIndicator, View, Text, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./HomeScreen.styles";
import Header from "@/components/header/Header";
import RestaurantCard from "@/components/card/RestaurantCard";
import FilterBar from "@/components/filterBar/FilterBar";
import {
  selectRestaurant,
  setLoading,
  setRestaurants,
  setError,
  setFilter,
} from "@/redux/slices/restaurantSlice";
import {
  setFilters,
  setFiltersError,
  setFiltersLoading,
} from "@/redux/slices/filterSlice";
import { RestaurantModel } from "@/models/apiTypes";
import { FilterModel } from "@/redux/types";
import { RootState } from "@/redux/store";
import useFetchRestaurantsAndFilters from "@/hooks/useRestaurants";
import { useFilters } from "@/hooks/useFilters";
import useRestaurants from "@/hooks/useRestaurants";
import { Colors } from "@/constants/colors";

const HomeScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    restaurants,
    loading: restaurantLoading,
    error: restaurantError,
  } = useRestaurants();
  const filteredRestaurants = useSelector(
    (state: RootState) => state.restaurant.filteredRestaurants
  );

  const {
    filters,
    loading: filtersLoading,
    error: filtersError,
  } = useFilters();
  useFetchRestaurantsAndFilters();

  const handleFilterPress = (filterId: string | null) => {
    if (filterId) {
      dispatch(setFilter(filterId));
    }
  };

  const handlePressRestaurant = (restaurant: RestaurantModel) => {
    dispatch(selectRestaurant(restaurant));
    router.push("/screens/details/DetailsScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      {filtersLoading || restaurantLoading ? (
        <ActivityIndicator size="large" color={Colors.Selected} />
      ) : (
        <>
          <Header style={styles.header} />
          <FilterBar
            filters={filters}
            handleOnPress={handleFilterPress}
            style={styles.filterBar}
          />
          {restaurants.length === 0 ? (
            <Text>No restaurants found.</Text>
          ) : (
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
                ListFooterComponent={<View style={styles.footer} />}
              />
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
