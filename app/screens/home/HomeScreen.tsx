import React from "react";
import { View, Text, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./HomeScreen.styles";
import Header from "@/components/header/Header";
import RestaurantCard from "@/components/card/RestaurantCard";
import FilterBar from "@/components/filterBar/FilterBar";
import {
  selectRestaurant,
  setFilter,
  clearFilters,
} from "@/redux/slices/restaurantSlice";
import { RestaurantModel } from "@/types/types";
import { RootState } from "@/redux/store";
import useFetchRestaurantsAndFilters from "@/hooks/useRestaurants";
import { useFilters } from "@/hooks/useFilters";
import useRestaurants from "@/hooks/useRestaurants";
import Spinner from "@/components/spinner/Spinner";

const HomeScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { restaurants, loading: restaurantLoading } = useRestaurants();
  const filteredRestaurants = useSelector(
    (state: RootState) => state.restaurant.filteredRestaurants
  );

  const { filters, loading: filtersLoading } = useFilters();
  useFetchRestaurantsAndFilters();

  const handleFilterPress = (filterId: string | null) => {
    if (filterId) {
      dispatch(setFilter(filterId));
    }
  };

  const handlePressRestaurant = (restaurant: RestaurantModel) => {
    dispatch(clearFilters());
    dispatch(selectRestaurant(restaurant));
    router.push("/screens/details/DetailsScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      {filtersLoading || restaurantLoading ? (
        <Spinner />
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
