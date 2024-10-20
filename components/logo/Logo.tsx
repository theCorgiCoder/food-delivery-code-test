import React from "react";
import { Image, View } from "react-native";
import { styles } from "./Logo.styles";

const Logo = () => {
  return (
    <View>
      <Image
        source={require("../../assets/images/umainLogo.png")}
        style={styles.logo}
      />
    </View>
  );
};

export default Logo;
