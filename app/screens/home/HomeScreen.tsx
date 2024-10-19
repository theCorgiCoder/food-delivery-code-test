// app/screens/HomeScreen.tsx
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => router.push("/screens/details/DetailsScreen")}
      />
    </View>
  );
};

export default HomeScreen;
