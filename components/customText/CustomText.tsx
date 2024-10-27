import React from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import { titleStyle } from "@/constants/font";

interface TextProps {
  title: string;
  content?: string | number;
  fontWeight?: TextStyle["fontWeight"];
  color: string;
  style?: ViewStyle | ViewStyle[];
}

const CustomText: React.FC<TextProps> = ({
  title,
  content,
  fontWeight,
  color,
  style,
}) => {
  return (
    <View>
      <Text
        style={[
          titleStyle(title),
          color ? { color } : {},
          fontWeight ? { fontWeight } : {},
        ]}
      >
        {content}
      </Text>
    </View>
  );
};

export default CustomText;
