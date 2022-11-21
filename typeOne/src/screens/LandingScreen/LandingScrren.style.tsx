import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  image: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 2,
    resizeMode: "contain",
  },
  addrres: {
    textAlign: "center",
    fontSize: 24,
    color: "#5F6F94",
    fontWeight: "600",
  },
  line: {
    top: 5,
    borderWidth: 0.6,
    borderColor: "#EB1D36",
    width: 350,
    alignSelf: "center",
  },
  location: {
    textAlign: "center",
    top: 10,
    fontSize: 16,
    color: "gray",
  },
});
