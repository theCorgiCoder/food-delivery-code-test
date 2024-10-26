import { StyleSheet } from "react-native";
import { Colors } from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 15,
  },
  imageCorners: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  pressable: {
    marginVertical: 6,
    height: 200,
    width: "100%",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  contentBox: {
    padding: 8,
    justifyContent: "space-around",
    backgroundColor: Colors.White,
  },
  title: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tags: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 2,
  },
});
