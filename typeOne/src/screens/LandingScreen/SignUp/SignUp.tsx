import { View, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import styles from "./SignUp.style";
import Input from "../../../components/Input/Input";
import Btn from "../../../components/Btn/Btn";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "../../../utils/useNavigation";
import axios from "axios";
import { Formik } from "formik";
import Toast from "react-native-toast-message";
import * as Yup from "yup";

const SignIn = () => {
  const navigation = useNavigation();

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too Short"),
    last_name: Yup.string().min(3, "Too Short"),
    email: Yup.string().email("Invalid email!"),
    password: Yup.string().trim().min(8, "Password is too short!"),
    passwordAgain: Yup.string().equals([
      Yup.ref("password"),
      "password does not match.",
    ]),
  });

  const handleSign = async (values: any) => {
    // when clicked signUp button.
    try {
      if (values.password === values.passwordAgain) {
        await axios.post("http://192.168.1.3:3000/users/signUp", {
          name: values.name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
          profilePhoto: "",
        });
        navigation.navigate("SignInPage");
      } else {
        Toast.show({
          type: "error",
          text1: "Wrong !",
          text2: "Password or Email incorrect",
        });
      }
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
          <Formik
            initialValues={{
              name: "",
              last_name: "",
              email: "",
              password: "",
              passwordAgain: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSign}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <>
                <Input
                  onChangeText={handleChange("name")}
                  placehloder="Name"
                  value={values.name}
                />
                <View style={styles.errorContainer}>
                  <Text style={styles.errorMessage}>{errors.name}</Text>
                </View>
                <Input
                  onChangeText={handleChange("last_name")}
                  placehloder="Last Name"
                  value={values.last_name}
                />
                <View style={styles.errorContainer}>
                  <Text style={styles.errorMessage}>{errors.last_name}</Text>
                </View>
                <Input
                  onChangeText={handleChange("email")}
                  placehloder="E-Mail"
                  value={values.email}
                />
                <View style={styles.errorContainer}>
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                </View>
                <Input
                  onChangeText={handleChange("password")}
                  placehloder="Password"
                  value={values.password}
                />
                <View style={styles.errorContainer}>
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                </View>
                <Input
                  onChangeText={handleChange("passwordAgain")}
                  placehloder="Password Again"
                  value={values.passwordAgain}
                />
                <View style={styles.errorContainer}>
                  <Text style={styles.errorMessage}>
                    {errors.passwordAgain}
                  </Text>
                </View>
                <Btn onPress={handleSubmit} btnName="Sign Up" />
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
