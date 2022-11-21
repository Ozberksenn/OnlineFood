import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1 },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 0.4,
  },
  content: {
    flex: 0.6,
  },
  profilImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 20,
  },
  profilName: {
    fontSize: 18,
    fontWeight: "500",
  },
  email: {
    marginTop: 2,
    fontSize: 14,
  },
});
