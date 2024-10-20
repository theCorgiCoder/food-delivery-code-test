import React from "react";
import { View, Text } from "react-native";
import { styles } from "./CustomText.styles";
import { getTextColor } from "@/constants/Colors";

interface TextProps {
  title: string;
  content: string;
  color: string;
}

const CustomText: React.FC<TextProps> = ({ title, content, color }) => {
  const getTextStyle = () => {
    switch (title) {
      case "title1":
        return styles.titleOneText;
      case "title2":
        return styles.titleTwoText;
      case "subtitle1":
        return styles.subtitleText;
      case "footer1":
        return styles.footerText;
      case "headline1":
        return styles.headlineOneText;
      case "headline2":
        return styles.headlineTwoText;
      default:
        return styles.subtitleText;
    }
  };

  return (
    <View>
      <Text style={[getTextStyle(), getTextColor(color)]}>{content}</Text>
    </View>
  );
};

export default CustomText;
