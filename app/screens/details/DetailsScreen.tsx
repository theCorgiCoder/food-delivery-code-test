import { View } from "react-native";
import { useRouter } from "expo-router";
import DetailContentBox from "@/components/detailContentBox/DetailContentBox";
import CustomImage from "@/components/customImage/CustomImage";
import Button from "@/components/button/Button";
import { styles } from "./DetailsScreen.styles";

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <CustomImage />
      <Button style={styles.button} />
      <View style={styles.content}>
        <DetailContentBox />
      </View>
    </View>
  );
};

export default DetailsScreen;
