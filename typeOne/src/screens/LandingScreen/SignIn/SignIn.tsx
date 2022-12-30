import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import styles from "./SignIn.style";
import Input from "../../../components/Input/Input";
import Btn from "../../../components/Btn/Btn";
import { useNavigation } from "../../../utils/useNavigation";
import { useDispatch } from "react-redux";
import { signIn } from "../../../redux/userSlice";
import axios from "axios";
import { Formik } from "formik";
import Toast from "react-native-toast-message";
import * as Yup from "yup";

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email!"),
    password: Yup.string().trim().min(8, ""),
  });

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      if (values.email && values.password) {
        await axios
          .post("http://10.22.16.1:3000/users/login", {
            email: values.email,
            password: values.password,
          })
          .then((res) => {
            console.log(res.data.payload.result.email);
            if (
              res.data.payload.result.email &&
              res.data.payload.result.password
            ) {
              dispatch(signIn(res.data.payload.result));
              navigation.navigate("Landing");
            } else {
              Alert.alert("Kullanıcı Bulunamadı.");
            }
          });
        Toast.show({
          type: "success",
          text2: "Login Successful",
        });
      } else {
        Toast.show({
          type: "error",
          text2: "Email and Password must be not empty!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.footer}>
        <View style={styles.content}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleLogin}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, values, handleChange, errors }) => (
              <>
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
                <Btn onPress={handleSubmit} btnName="Login" />
              </>
            )}
          </Formik>
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
