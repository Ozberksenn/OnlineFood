import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React from "react";
import styles from "./DeleteUser.style";
import axios from "axios";
import { useNavigation } from "../../../utils/useNavigation";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
const DeleteUser = () => {
  const navigation = useNavigation();
  const userInfo = useSelector((state: any) => state.user.userInfo);

  const alertDialog = () => {
    Alert.alert("Notice!", "Your account will be suspended", [
      { text: "Cancel" },
      { text: "Yes", onPress: handleDelete },
    ]);
  };

  const handleDelete = async () => {
    try {
      axios
        .delete(`http://192.168.1.3:3000/users/${userInfo.id}`)
        .then((res) => {
          console.log(res.data.payload.result);
          navigation.navigate("SignInPage");
        });
      navigation.navigate("SignInPage");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Ionicons
          onPress={() => navigation.navigate("AccountPage")}
          name="chevron-back-sharp"
          size={48}
          style={{ marginLeft: 20 }}
          color="orange"
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.textMessage}>
          Are you sure you want to Suspend Your Account?
        </Text>
        <Text style={{ marginTop: 20, fontStyle: "italic", color: "orange" }}>
          Why do you want suspend Account ?
        </Text>
        <TextInput style={styles.input} />
      </View>

      <TouchableOpacity onPress={alertDialog} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete User</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DeleteUser;
