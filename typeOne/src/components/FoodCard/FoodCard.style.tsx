import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "gray",
    marginLeft: 15,
    marginRight: 15,
    marginVertical: 15,
    borderRadius: 15,
    flexDirection: "row",
  },
  image: {
    width: 125,
    height: 100,
    borderRadius: 15,
  },
  foodName: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 16,
    maxWidth: 150,
    fontWeight: "500",
  },
  buttonAndPrice: {
    marginTop: 5,
    marginRight: 15,
  },
  price: {
    marginVertical: 5,
    fontSize: 22,
    color: "gray",
  },
  buttonContainer: {
    marginVertical: 5,
    backgroundColor: "#ef4e53",
    padding: 5,
    borderRadius: 10,
  },
  buttonName: {
    color: "#fff",
    textAlign: "center",
  },
  plusAndMinus: {
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: "#ef4e53",
  },
  count: {
    marginHorizontal: 5,
    padding: 5,
    paddingVertical: 10,
    fontSize: 20,
    color: "#ef4e53",
    fontWeight: "bold",
  },
});
