import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 15,
    height: 140,
    width: "100%",
    borderRadius: 12,
    backgroundColor: Colors.White,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  loaderContainer: {
    padding: 10,
  },
});
