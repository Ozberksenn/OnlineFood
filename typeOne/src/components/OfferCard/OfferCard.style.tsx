import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  discountImage: {
    width: Dimensions.get("screen").width / 1.1,
    height: Dimensions.get("screen").height / 4,
    borderRadius: 25,
  },
  offerCard: {
    backgroundColor: "#edc156",
    width: Dimensions.get("screen").width / 1.1,
    height: Dimensions.get("screen").height / 3,
    alignSelf: "center",
    borderRadius: 25,
    marginVertical: 20,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  offerText: {
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#82bf6f",
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
