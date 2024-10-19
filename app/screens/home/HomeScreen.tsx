// app/screens/HomeScreen.tsx
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import Card from "@/components/card/Card";
import { styles } from "./HomeScreen.styles";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.Container}>
      <Card />
      <Button
        title="Go to Details"
        onPress={() => router.push("/screens/details/DetailsScreen")}
      />
    </View>
  );
};

export default HomeScreen;
