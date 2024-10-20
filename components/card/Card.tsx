import React from "react";
import { View, ViewStyle, Text } from "react-native";
import { styles } from "./Card.styles";
import { TouchableOpacity } from "react-native";
import CustomText from "../customText/CustomText";
import Rating from "../rating/Rating";
import StarIcon from "@/assets/images/starIcon.svg";
import Clock from "../clock/Clock";
import ClockIcon from "@/assets/images/clockIcon.svg";
import CustomImage from "../customImage/CustomImage";

interface CardProps {
  imageUrl: string;
  style?: ViewStyle | ViewStyle[];
  handleOnPress: () => void;
}

const Card: React.FC<CardProps> = ({ imageUrl, style, handleOnPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnPress} style={styles.pressable}>
        <CustomImage />
        <View style={styles.contentBox}>
          <View style={styles.title}>
            {/* title */}
            <CustomText title={"title1"} content={"Title"} color={"black"} />
            <Rating
              icon={StarIcon}
              width={15}
              height={15}
              textColor={"black"}
              textStyle={"subtitle"}
              showRating={2.0}
            />
          </View>
          {/* subtitle */}
          <CustomText
            title={"subtitle"}
            content={"subtitle tag"}
            color={"grey"}
          />
          <Clock
            icon={ClockIcon}
            textStyle={"footer1"}
            time={"30 mins"}
            width={15}
            height={15}
            textColor={"grey"}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
