import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  banner: {
    width: "100%",
    height: "40%",
  },
  content: {
    position: "absolute",
    left: 15,
    right: 15,
    top: "30%",
    zIndex: 10,
  },
  button: {
    position: "absolute",
    top: 35,
    left: 15,
    zIndex: 10,
  },
});
