import React from "react";
import { View, Text } from "react-native";
import { styles } from "./DetailCard.style";
import CustomText from "../customText/CustomText";

interface DetailCardProps {}

const DetailCard: React.FC<DetailCardProps> = ({}) => {
  return (
    <View style={styles.container}>
      <CustomText
        title={"headline1"}
        color={"black"}
        content={"Restaurant Title"}
      />
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
