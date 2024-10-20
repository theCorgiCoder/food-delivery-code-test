import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import CustomImage from "@/components/customImage/CustomImage";
import DetailContentBox from "@/components/detailContentBox/DetailContentBox";
import { styles } from "./DetailsScreen.styles";

const DetailsScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <CustomImage />
        <Button
          icon={BackIcon}
          onPress={() => router.back()}
          style={styles.button}
        />
      </View>

      <View style={styles.content}>
        <DetailContentBox />
      </View>
    </View>
  );
};

export default DetailsScreen;
