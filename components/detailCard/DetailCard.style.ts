import { Platform, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 15,
    height: 140,
    width: "100%",
    borderRadius: 12,
    backgroundColor: colors.White,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        marginVertical: 20,
        elevation: 3,
      },
    }),
    shadowColor: colors.Black,
  },
  loaderContainer: {
    padding: 10,
  },
});
