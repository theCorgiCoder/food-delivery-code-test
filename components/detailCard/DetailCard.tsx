import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./DetailCard.style";
import CustomText from "../customText/CustomText";
import { RestaurantModel } from "@/models/apiTypes";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { fetchOpenStatus } from "@/utils/openService";
import { Colors } from "@/constants/Colors";

interface DetailCardProps {
  details: RestaurantModel | null;
}

const DetailCard: React.FC<DetailCardProps> = ({ details }) => {
  const filters = useSelector((state: RootState) => state.filters.filters);

  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (details?.id) {
      // Fetch the open status for the restaurant
      const fetchStatus = async () => {
        const status = await fetchOpenStatus(details.id);
        setIsCurrentlyOpen(status);
        setLoading(false);
      };
      fetchStatus();
    }
  }, [details?.id]);

  // If loading or no details available yet, show a loader
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const filterNames = details?.filterIds
    ?.map((filterId) => filters.find((filter) => filter.id === filterId)?.name)
    .filter(Boolean) // Remove any undefined values if filterIds don't match
    .join(" • ");

  return (
    <View style={styles.container}>
      <CustomText title={"headline1"} color={"black"} content={details?.name} />
      <View>
        <CustomText title={"headline2"} color={"grey"} content={filterNames} />
      </View>
      <CustomText
        title={"title1"}
        color={isCurrentlyOpen ? Colors.Positive : Colors.Negative}
        content={isCurrentlyOpen ? "Open" : "Closed"}
      />
    </View>
  );
};

export default DetailCard;
