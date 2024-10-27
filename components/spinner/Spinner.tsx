import { colors } from "@/constants/colors";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./Spinner.styles";

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.Grey} />
    </View>
  );
};

export default Spinner;
