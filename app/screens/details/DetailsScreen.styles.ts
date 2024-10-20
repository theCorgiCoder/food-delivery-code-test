import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: Colors.Background,
  },
  banner: {
    width: "100%",
    height: 200,
  },
  content: {
    position: "absolute",
    left: 15,
    right: 15,
    top: "20%",
    zIndex: 10,
  },
  button: {
    position: "absolute",
    left: 15,
    zIndex: 20,
    marginTop: "5%",
  },
});
