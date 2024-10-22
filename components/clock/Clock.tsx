import React from "react";
import { View } from "react-native";
import CustomIcon from "../icon/CustomIcon";
import ClockIcon from "@/assets/images/clockIcon.svg";
import { styles } from "./Clock.styles";
import { SvgProps } from "react-native-svg";
import CustomText from "../customText/CustomText";

interface ClockProps {
  icon?: React.FC<SvgProps>;
  textStyle: string;
  time: number;
  width: number;
  height: number;
  iconColor?: string;
  textColor: string;
}

const Clock: React.FC<ClockProps> = ({
  width,
  height,
  textStyle,
  textColor,
  time,
}) => {
  return (
    <View style={styles.container}>
      <CustomIcon icon={ClockIcon} width={width} height={height} />
      <View style={styles.textBox}>
        <CustomText title={textStyle} color={textColor} content={time} />
        <CustomText title={textStyle} color={textColor} content={" mins"} />
      </View>
    </View>
  );
};

export default Clock;
