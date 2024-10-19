// app/screens/HomeScreen.tsx
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import Card from "@/components/card/Card";
import { styles } from "./HomeScreen.styles";
import Header from "@/components/header/Header";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      <ScrollView style={styles.content}>
        <View style={styles.contentBox}>
          <Card />
          {/* <Button
            title="Go to Details"
            onPress={() => router.push("/screens/details/DetailsScreen")}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
