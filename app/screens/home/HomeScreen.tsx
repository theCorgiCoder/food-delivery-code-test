import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./HomeScreen.styles";
import Header from "@/components/header/Header";
import Card from "@/components/card/Card";
import FilterBar from "@/components/filterBar/FilterBar";
import { fetchFilterById, FilterData } from "@/services/api";
import filterIds from "@/constants/Filters";

const HomeScreen = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("../details/DetailsScreen"); // Navigate to DetailsScreen
  };

  const [filters, setFilters] = useState<FilterData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFilters = async () => {
      const fetchedFilters: FilterData[] = [];
      for (const id of filterIds) {
        const filterData = await fetchFilterById(id);
        if (filterData) {
          fetchedFilters.push(filterData);
        }
      }
      setFilters(fetchedFilters);
      setLoading(false);
    };

    fetchFilters();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (filters.length === 0) {
    return <Text>No filters available.</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      <FilterBar filters={filters} handleOnPress={handleNavigation} />
      <ScrollView style={styles.content}>
        <Card
          imageUrl={""}
          handleOnPress={handleNavigation}
          style={styles.card}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
