import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  dropShadow: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 150,
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: Colors.Background,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    width: 100,
    paddingLeft: 6,
  },
});
