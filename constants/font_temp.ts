import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titleOneText: {
    fontFamily: "Helvetica-Bold",
    fontSize: 18,
    fontWeight: 400,
  },
  titleTwoText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    fontWeight: 500,
  },
  subtitleText: {
    fontFamily: "Helvetica",
    fontSize: 12,
    fontWeight: 400,
  },
  footerText: {
    fontFamily: "Inter_18pt-Regular",
    fontSize: 10,
    fontWeight: 500,
  },
  headlineOneText: {
    fontFamily: "Helvetica",
    fontSize: 24,
    fontWeight: 400,
  },
  headlineTwoText: {
    fontFamily: "Helvetica",
    fontSize: 16,
    fontWeight: 400,
  },
});

export const getTextStyle = (title: string) => {
  switch (title) {
    case "title1":
      return styles.titleOneText;
    case "title2":
      return styles.titleTwoText;
    case "subtitle":
      return styles.subtitleText;
    case "footer":
      return styles.footerText;
    case "headline1":
      return styles.headlineOneText;
    case "headline2":
      return styles.headlineTwoText;
    default:
      return styles.subtitleText;
  }
};

export const titleStyle = (title: string) => getTextStyle(title);
