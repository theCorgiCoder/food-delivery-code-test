import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./DetailCard.style";
import CustomText from "../customText/CustomText";
import { RestaurantModel } from "@/models/apiTypes";
import { fetchOpenStatus } from "@/utils/openService";
import { Colors } from "@/constants/colors";
import { findFilters } from "@/constants/filters";

interface DetailCardProps {
  details: RestaurantModel | null;
}

const DetailCard: React.FC<DetailCardProps> = ({ details }) => {
  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStatus = async () => {
      if (details?.id) {
        const status = await fetchOpenStatus(details.id);
        setIsCurrentlyOpen(status);
      }
      setLoading(false);
    };

    fetchStatus();
  }, [details]);

  // If loading or no details available yet, show a loader
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const filterNames = details?.filterIds
    ?.map((filterId) => {
      // Find the filter object that matches the filterId
      const filter = Object.values(findFilters).find((f) => f.id === filterId);
      return filter ? filter.name : null;
    })
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
