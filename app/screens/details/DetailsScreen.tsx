import { View } from "react-native";
import { useRouter } from "expo-router";
import DetailContentBox from "@/components/detailContentBox/DetailContentBox";
import CustomImage from "@/components/customImage/CustomImage";
import Button from "@/components/button/Button";
import { styles } from "./DetailsScreen.styles";
import BackIcon from "../../../assets/images/backIcon.svg";

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
