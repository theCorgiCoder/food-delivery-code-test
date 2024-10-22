import React from "react";
import { ActivityIndicator, View, Text, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./HomeScreen.styles";
import Header from "@/components/header/Header";
import RestaurantCard from "@/components/card/RestaurantCard";
import FilterBar from "@/components/filterBar/FilterBar";
import { useFiltersLoader } from "@/utils/filterLoader";
import { useRestaurantsLoader } from "@/utils/restaurantLoader";

const HomeScreen = () => {
  const router = useRouter();
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

  const handleNavigation = () => {
    router.push("../details/DetailsScreen");
  };

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

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header style={styles.header} />
      <FilterBar filters={filters} handleOnPress={handleNavigation} /> */}
      <View style={styles.list}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={true}
          data={restaurants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RestaurantCard
              data={item}
              handleOnPress={handleNavigation}
              style={{ marginVertical: 10 }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
