import React from "react";
import { View, ViewStyle, Text } from "react-native";
import { styles } from "./Card.styles";
import { TouchableOpacity } from "react-native";

interface CardProps {
  style?: ViewStyle | ViewStyle[];
  handleOnPress: () => void;
}

const Card: React.FC<CardProps> = ({ style, handleOnPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnPress} style={styles.pressable}>
        <Text>Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
