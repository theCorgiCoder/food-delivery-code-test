import { View, StyleProp, ViewStyle } from "react-native";
import Logo from "@/assets/images/Logo.svg";

interface HeaderProps {
  style?: StyleProp<ViewStyle>;
}

const Header: React.FC<HeaderProps> = ({ style }) => {
  return (
    <View style={style}>
      <Logo />
    </View>
  );
};

export default Header;
