import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./SignUp.style";
import Input from "../../../components/Input/Input";
import Btn from "../../../components/Btn/Btn";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "../../../utils/useNavigation";
import axios from "axios";
const SignIn = () => {
  const [name, setName] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordAgain, setPasswordAgain] = useState<string>("");

  const navigation = useNavigation();

  const handleSign = async () => {
    // when clicked signUp button.
    try {
      await axios.post("http://192.168.9.188:3000/users/signUp", {
        name: name,
        last_name: last_name,
        password: password,
        email: email,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("SignInPage")}>
          <Ionicons
            style={{ marginLeft: 20, top: 75 }}
            name="arrow-back-sharp"
            size={38}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.content}>
          <Input
            onChangeText={(value: string) => setName(value)}
            placehloder="Name"
          />
          <Input
            onChangeText={(value: string) => setLastName(value)}
            placehloder="Last Name"
          />
          <Input
            onChangeText={(value: string) => setEmail(value)}
            placehloder="E-Mail"
          />
          <Input
            onChangeText={(value: string) => setPassword(value)}
            placehloder="Password"
          />
          <Input
            onChangeText={(value: string) => setPasswordAgain(value)}
            placehloder="Password Again"
          />
          <Btn onPress={handleSign} btnName="Sign Up" />
        </View>
      </View>
    </View>
  );
};

export default SignIn;
