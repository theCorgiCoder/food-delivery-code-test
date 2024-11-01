import { Platform, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Background,
  },
  banner: {
    width: "100%",
    height: "40%",
  },
  content: {
    position: "absolute",
    left: 15,
    right: 15,
    ...Platform.select({
      ios: { top: "30%" },
      android: { top: "20%" },
    }),

    zIndex: 10,
  },
  button: {
    position: "absolute",
    top: 35,
    left: 15,
    zIndex: 10,
  },
});
