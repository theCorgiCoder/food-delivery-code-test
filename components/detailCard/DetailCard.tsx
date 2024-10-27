import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import { styles } from "./DetailCard.style";
import CustomText from "../customText/CustomText";
import { RestaurantModel } from "@/types/types";
import { fetchOpenStatus } from "@/utils/openService";
import { colors } from "@/constants/colors";
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

  const filterNames = details?.filterIds
    ?.map((filterId, index) => {
      // Find the filter object that matches the filterId
      if (!findFilters) return null;

      const filter = Object.values(findFilters).find((f) => f.id === filterId);
      const isLast = index === details.filterIds.length - 1;

      return filter ? filter.name + (!isLast ? " • " : "") : null;
    })
    .filter(Boolean);
  const filterNamesString = filterNames?.join("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CustomText
          title={"headline1"}
          color={"black"}
          content={details?.name}
        />
        <View>
          <CustomText
            title={"headline2"}
            color={"grey"}
            content={filterNamesString}
          />
        </View>
        <CustomText
          title={"title1"}
          color={isCurrentlyOpen ? colors.Positive : colors.Negative}
          content={isCurrentlyOpen ? "Open" : "Closed"}
        />
      </View>
    </SafeAreaView>
  );
};

export default DetailCard;
