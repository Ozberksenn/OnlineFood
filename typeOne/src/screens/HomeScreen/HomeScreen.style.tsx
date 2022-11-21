import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    flexDirection: "row",
    backgroundColor: "#ebeaeb",
    padding: 5,
    marginLeft: 15,
    marginRight: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
  },
  restaurantTitle: {
    fontSize: 22,
    color: "#d85556",
    marginLeft: 20,
    fontWeight: "600",
  },
  restaurantImage: {
    marginTop: 10,
    height: Dimensions.get("screen").height / 4,
    borderRadius: 15,
    width: Dimensions.get("screen").width / 1.1,
    marginHorizontal: 15,
  },
  foodImage: {
    marginTop: 10,
    height: Dimensions.get("screen").height / 4,
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
  },
});
