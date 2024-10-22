import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 15,
  },
  pressable: {
    height: 196,
    width: "100%",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  contentBox: {
    padding: 8,
    justifyContent: "flex-end",
    backgroundColor: Colors.White,
  },
  title: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tags: {
    width: "100%",
    flexDirection: "row",
  },
});
