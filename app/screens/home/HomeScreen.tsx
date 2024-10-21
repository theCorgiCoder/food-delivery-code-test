import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
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
  const [filters, setFilters] = useState<FilterData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilters = async () => {
      const fetchedFilters = await Promise.all(
        filterIds.map(async (id) => await fetchFilterById(id))
      );

      setFilters(fetchedFilters.filter(Boolean) as FilterData[]);
      setLoading(false);
    };

    fetchFilters();
  }, []);

  const handleNavigation = () => {
    router.push("../details/DetailsScreen");
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (filters.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>No filters available.</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      <FilterBar filters={filters} handleOnPress={handleNavigation} />
      <View style={styles.content}>
        <Card handleOnPress={handleNavigation} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
