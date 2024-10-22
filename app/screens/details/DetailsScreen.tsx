import { View, Text, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import CustomImage from "@/components/customImage/CustomImage";
import DetailCard from "@/components/detailCard/DetailCard";
import { styles } from "./DetailsScreen.styles";
import BackIcon from "../../../assets/images/backIcon.svg";
import CustomButton from "@/components/button/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { clearSelectedRestaurant } from "@/redux/slices/restaurantSlice";

// interface DetailScreenProps {
//   image: string;
//   handleOnPress: () => void;
//   style?: ViewStyle | ViewStyle[];
// }

const DetailsScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const selectedRestaurant = useSelector(
    (state: RootState) => state.restaurant.selected
  );
  const handleBackPress = () => {
    dispatch(clearSelectedRestaurant()); // Clear the selected restaurant when navigating back
    router.back(); // Navigate back
  };

  if (!selectedRestaurant) {
    return (
      <View style={styles.container}>
        <Text>No restaurant selected</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.button}>
          <CustomButton
            width={30}
            height={30}
            icon={BackIcon}
            onPress={handleBackPress}
          />
        </View>
        <CustomImage image={selectedRestaurant.image_url} />
      </View>
      <View style={styles.content}>
        <DetailCard details={selectedRestaurant} />
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
