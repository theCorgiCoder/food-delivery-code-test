import React from "react";
import { View, ViewStyle, TouchableOpacity } from "react-native";
import { styles } from "./Card.styles";
import CustomText from "../customText/CustomText";
import Rating from "../rating/Rating";
import StarIcon from "@/assets/images/starIcon.svg";
import Clock from "../clock/Clock";
import ClockIcon from "@/assets/images/clockIcon.svg";
import CustomImage from "../customImage/CustomImage";
import usePressState from "@/hooks/usePressState";
import { Colors } from "@/constants/Colors";

interface CardProps {
  style?: ViewStyle | ViewStyle[];
  handleOnPress: () => void;
}

const Card: React.FC<CardProps> = ({ style, handleOnPress }) => {
  const { handlePressIn, handlePressOut, backgroundColor } = usePressState(
    Colors.White
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleOnPress}
        style={[styles.pressable, { backgroundColor }]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <CustomImage />
        <View style={styles.contentBox}>
          <View style={styles.title}>
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
