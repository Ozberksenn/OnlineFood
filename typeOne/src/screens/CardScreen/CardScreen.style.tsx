import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 34,
    flex: 0.1,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  content: {
    flex: 0.7,
  },
  footer: {
    borderTopWidth: 1,
    flex: 0.2,
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  Total: {
    fontSize: 24,
  },
  price: {
    fontSize: 20,
    marginLeft: 10,
  },
  button: {
    marginVertical: 15,
    backgroundColor: "#f14154",
    borderRadius: 15,
    padding: 15,
    marginLeft: 60,
    marginRight: 60,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
});
