import { View, Text, Button, StyleProp, ViewStyle } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./Header.styles";
import Logo from "@/assets/images/Logo.svg";

interface HeaderProps {
  style?: StyleProp<ViewStyle>; // Allow optional custom styles for the View
}

const Header: React.FC<HeaderProps> = ({ style }) => {
  const router = useRouter();

  return (
    <View style={style}>
      <Logo />
    </View>
  );
};

export default Header;
