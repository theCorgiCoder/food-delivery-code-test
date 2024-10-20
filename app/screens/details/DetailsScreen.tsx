import { View } from "react-native";
import { useRouter } from "expo-router";
import CustomImage from "@/components/customImage/CustomImage";
import DetailContentBox from "@/components/detailContentBox/DetailContentBox";
import { styles } from "./DetailsScreen.styles";
import BackIcon from "../../../assets/images/backIcon.svg";
import CustomButton from "@/components/button/CustomButton";
import { useGlobalRouter } from "@/hooks/useGlobalRouter";

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <CustomImage />
        <CustomButton
          width={30}
          height={30}
          icon={BackIcon}
          onPress={() => useGlobalRouter.back()}
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
