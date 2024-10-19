// app/screens/HomeScreen.tsx
import { View, Text, Button, StyleProp, ViewStyle } from "react-native";
import { useRouter } from "expo-router";
import Card from "@/components/card/Card";
import { styles } from "./Header.styles";

interface HeaderProps {
  style?: StyleProp<ViewStyle>; // Allow optional custom styles for the View
}

const HomeScreen: React.FC<HeaderProps> = ({ style }) => {
  const router = useRouter();

  return (
    <View style={[styles.container, style]}>
      <Text>Header</Text>
    </View>
  );
};

export default HomeScreen;
