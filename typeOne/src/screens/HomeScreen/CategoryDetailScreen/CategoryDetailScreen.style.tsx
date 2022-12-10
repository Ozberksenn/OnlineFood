import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  background: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    opacity: 0.7,
  },
  content: {
    position: "absolute",
    borderRadius: 15,
    backgroundColor: "#fff",
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    padding: 20,
    textAlign: "center",
    fontSize: 42,
  },
  icon: {
    fontSize: 38,
    color: "#000",
    paddingBottom: 15,
  },
});
