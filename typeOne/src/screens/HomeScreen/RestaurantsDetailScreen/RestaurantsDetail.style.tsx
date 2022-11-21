import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  restaurantImage: {
    marginTop: 3,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 3,
  },
  shadowContainer: {
    backgroundColor: "black",
    opacity: 0.6,
    position: "absolute",
    bottom: 0,
    height: Dimensions.get("screen").height / 7,
    width: Dimensions.get("screen").width,
  },
  shadowContent: {
    position: "absolute",
    bottom: 0,
    marginLeft: 15,
  },
  restaurantName: {
    color: "#fff",
    fontSize: 24,
    marginVertical: 15,
  },
  pincode: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 10,
  },
  address: {
    fontSize: 20,
    color: "#fff",
  },
  addressAndPincode: {
    marginVertical: 15,
    flexDirection: "row",
  },
});
