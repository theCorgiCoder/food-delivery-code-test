import { View, ViewStyle } from "react-native";
import { useRouter } from "expo-router";
import CustomImage from "@/components/customImage/CustomImage";
import DetailCard from "@/components/detailCard/DetailCard";
import { styles } from "./DetailsScreen.styles";
import BackIcon from "../../../assets/images/backIcon.svg";
import CustomButton from "@/components/button/CustomButton";

interface DetailScreenProps {
  image: string;
  handleOnPress: () => void;
  style?: ViewStyle | ViewStyle[];
}

const DetailsScreen: React.FC<DetailScreenProps> = ({ image }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <CustomButton
          width={30}
          height={30}
          icon={BackIcon}
          onPress={() => router.back()}
          style={styles.button}
        />
        <CustomImage image={image} style={styles.image} />
      </View>
      <View style={styles.content}>
        <DetailCard />
      </View>
    </View>
  );
};

export default DetailsScreen;
