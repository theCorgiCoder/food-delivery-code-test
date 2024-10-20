import React from "react";
import { View, Text } from "react-native";
import CustomIcon from "../icon/CustomIcon";
import { styles } from "./Rating.styles";
import { SvgProps } from "react-native-svg";
import CustomText from "../customText/CustomText";

interface RatingProps {
  icon?: React.FC<SvgProps>;
  textStyle: string;
  showRating: number;
  width: number;
  height: number;
  iconColor?: string;
  textColor: string;
}

const Rating: React.FC<RatingProps> = ({
  icon,
  width,
  height,
  textStyle,
  iconColor,
  textColor,
  showRating,
}) => {
  return (
    <View style={styles.container}>
      <CustomIcon icon={icon} width={width} height={height} color={iconColor} />
      <CustomText
        title={textStyle}
        color={textColor}
        content={showRating.toFixed(1)}
      />
    </View>
  );
};

export default Rating;
