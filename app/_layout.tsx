import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import store, { RootState } from "@/redux/store";
import { Stack } from "expo-router";
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
  return (
    <Provider store={store}>
      <ErrorComponent />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="screens/home/HomeScreen" />
        <Stack.Screen name="screens/details/DetailsScreen" />
      </Stack>
    </Provider>
  );
}
