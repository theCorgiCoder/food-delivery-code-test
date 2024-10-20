import React from "react";
import { View, Text } from "react-native";
import { titleStyle } from "@/constants/Font";

interface TextProps {
  title: string;
  content?: string | number;
  color: string;
}

const CustomText: React.FC<TextProps> = ({ title, content, color }) => {
  return (
    <View>
      <Text style={[titleStyle(title), color ? { color } : {}]}>{content}</Text>
    </View>
  );
};

export default CustomText;
