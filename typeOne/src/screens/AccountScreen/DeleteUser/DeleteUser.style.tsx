import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  titleContainer: {
    marginLeft: 30,
    marginVertical: 25,
  },
  textMessage: {
    fontSize: 24,
    color: "gray",
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 15,
    margin: 25,
    borderRadius: 10,
  },
  deleteText: {
    textAlign: "center",
    color: "#fff",
  },
  input: {
    marginTop: 20,
    marginRight: 15,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 50,
  },
});
