import { Platform, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginLeft: 10,
  },
  dropShadow: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 150,
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: colors.Background,
    shadowColor: colors.Black,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    maxWidth: 150,
    paddingRight: 10,
    paddingLeft: 5,
    textAlign: "center",
    textAlignVertical: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.Selected,
    opacity: 0.5,
    borderRadius: 25,
  },
});
