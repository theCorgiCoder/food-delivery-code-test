import { Platform, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

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
    ...Platform.select({
      ios: {
        marginVertical: 6,
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        marginVertical: 20,
        elevation: 25,
      },
    }),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    height: 200,
    width: "100%",
    shadowColor: colors.Black,
  },
  contentBox: {
    padding: 8,
    justifyContent: "space-around",
    backgroundColor: colors.White,
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
