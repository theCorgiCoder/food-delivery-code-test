import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import DetailContentBox from "@/components/detailContentBox/DetailContentBox";
import CustomImage from "@/components/customImage/CustomImage";
import { styles } from "./DetailsScreen.styles";

const DetailsScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <CustomImage />
      <View style={styles.content}>
        <DetailContentBox />
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    </View>
  );
};

export default DetailsScreen;
