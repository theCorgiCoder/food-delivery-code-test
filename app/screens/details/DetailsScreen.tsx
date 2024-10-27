import { View, SafeAreaView } from "react-native";
import CustomImage from "@/components/customImage/CustomImage";
import DetailCard from "@/components/detailCard/DetailCard";
import { styles } from "./DetailsScreen.styles";
import BackIcon from "../../../assets/images/backIcon.svg";
import CustomButton from "@/components/button/CustomButton";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { router } from "expo-router";
import Spinner from "@/components/spinner/Spinner";

const DetailsScreen = ({}) => {
  const selectedRestaurant = useSelector(
    (state: RootState) => state.restaurant.selectedRestaurant
  );
  return (
    <SafeAreaView style={styles.container}>
      {selectedRestaurant ? (
        <>
          <View style={styles.banner}>
            <View style={styles.button}>
              <CustomButton
                width={30}
                height={30}
                icon={BackIcon}
                onPress={() => router.back()}
              />
            </View>
            <CustomImage image={selectedRestaurant?.image_url} />
          </View>
          <View style={styles.content}>
            <DetailCard details={selectedRestaurant} />
          </View>
        </>
      ) : (
        <Spinner />
      )}
    </SafeAreaView>
  );
};

export default DetailsScreen;
