import React from "react";
import { View, Text, ViewStyle } from "react-native";
import { titleStyle } from "@/constants/Font";
import { styles } from "./CustomText.styles";

interface TextProps {
  title: string;
  content?: string | number;
  color: string;
  style?: ViewStyle | ViewStyle[];
}

const CustomText: React.FC<TextProps> = ({ title, content, color, style }) => {
  return (
    <View>
      <Text style={[[titleStyle(title), color ? { color } : {}], style]}>
        {content}
      </Text>
    </View>
  );
};

export default CustomText;
