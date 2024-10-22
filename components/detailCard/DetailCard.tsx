import React from "react";
import { View, Text } from "react-native";
import { styles } from "./DetailCard.style";
import CustomText from "../customText/CustomText";
import { RestaurantModel } from "@/models/apiTypes";

interface DetailCardProps {
  details: RestaurantModel | null;
}

const DetailCard: React.FC<DetailCardProps> = ({ details }) => {
  console.log("THIS: ", details);
  return (
    <View style={styles.container}>
      <CustomText title={"headline1"} color={"black"} content={details?.name} />
      <CustomText
        title={"headline2"}
        color={"grey"}
        content={"Tags, Tags, Tags"}
      />
      <CustomText title={"title1"} color={"green"} content={"Open"} />
    </View>
  );
};

export default DetailCard;
