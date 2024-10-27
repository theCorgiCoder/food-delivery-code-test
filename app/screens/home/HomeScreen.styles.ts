import { StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Background,
  },
  header: {
    height: 50,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 15,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  filterBar: {
    marginBottom: 10,
  },
  list: {
    height: "100%",
  },
  footer: {
    height: 150,
  },
});
