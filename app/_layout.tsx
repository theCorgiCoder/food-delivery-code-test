import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import * as Font from 'expo-font';
import store, { RootState } from "@/redux/store";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";

const ErrorComponent = () => {
  const restaurantError = useSelector(
    (state: RootState) => state.restaurant.restaurantError
  );
  const filterError = useSelector(
    (state: RootState) => state.filters.filtersError
  );

  return <ErrorMessage message={restaurantError || filterError} />;
};

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Helvetica: require('../assets/fonts/Helvetica.ttf'),
        Poppins: require('../assets/fonts/Poppins.ttf'),
        Inter: require('../assets/fonts/Inter.ttf')
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);
  return (
    <Provider store={store}>
      <ErrorComponent />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="screens/home/HomeScreen" />
        <Stack.Screen name="screens/details/DetailsScreen" />
      </Stack>
    </Provider>
  );
}
