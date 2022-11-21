import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./SignIn.style";
import Input from "../../../components/Input/Input";
import Btn from "../../../components/Btn/Btn";
import { useNavigation } from "../../../utils/useNavigation";
import axios from "axios";
const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      await axios
        .post("http://192.168.9.188:3000/users/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data.payload.result.email);
          if (
            res.data.payload.result.email &&
            res.data.payload.result.password
          ) {
            navigation.navigate("Landing");
          } else {
            Alert.alert("Kullanıcı Bulunamadı.");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.footer}>
        <View style={styles.content}>
          <Input
            onChangeText={(value: string) => setEmail(value)}
            placehloder="E-Mail"
          />
          <Input
            onChangeText={(value: string) => setPassword(value)}
            placehloder="Password"
          />
          <Btn onPress={handleLogin} btnName="Login" />
          <TouchableOpacity onPress={() => navigation.navigate("SignUpPage")}>
            <Text style={{ textAlign: "center", marginVertical: 10 }}>
              You Can Register Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
