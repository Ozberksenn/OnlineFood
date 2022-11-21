import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ff2a59" },
  header: { flex: 0.5 },
  content: {
    top: -200,
    position: "absolute",
    width: Dimensions.get("screen").width / 1.1,
    height: Dimensions.get("screen").height / 2.5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
  },
  footer: {
    flex: 0.5,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
  },
});
