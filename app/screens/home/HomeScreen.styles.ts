import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  content: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  card: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 15,
    zIndex: 10,
  },
  filters: {},
});
