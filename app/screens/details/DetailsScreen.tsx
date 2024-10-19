import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

const DetailsScreen = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
};

export default DetailsScreen;
