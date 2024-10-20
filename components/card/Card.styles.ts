import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  pressable: {
    height: 196,
    width: "100%",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: Colors.text.LightText,
  },
});
