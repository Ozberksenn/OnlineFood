import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  profileContent: {
    marginVertical: 5,
    marginLeft: 30,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  profileName: {
    marginLeft: 15,
    fontWeight: "bold",
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    backgroundColor: "#edc156",
  },
  image: {
    resizeMode: "stretch",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: Dimensions.get("screen").height / 3,
  },
  postCommentContainer: {
    justifyContent: "space-between",
    marginVertical: 10,
    marginLeft: 5,
    flexDirection: "row",
  },
  dateAndNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  profileNameText: {
    color: "#000",
    fontWeight: "bold",
  },
  profileComment: {
    marginLeft: 5,
    fontStyle: "italic",
    fontWeight: "300",
  },
});
