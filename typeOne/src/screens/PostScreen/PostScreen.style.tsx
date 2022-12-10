import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
    justifyContent: "space-between",
  },
  title: {
    margin: 10,
    fontSize: 24,
    color: "orange",
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
    right: 10,
  },
});
