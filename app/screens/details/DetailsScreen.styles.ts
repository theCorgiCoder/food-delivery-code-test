import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: Colors.background,
  },
  banner: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 80,
  },
  button: {
    position: "absolute",
    left: 15,
    top: "5%",
    zIndex: 10,
  },
  content: {
    position: "absolute",
    left: 15,
    right: 15,
    top: "20%",
    zIndex: 10,
  },
});
