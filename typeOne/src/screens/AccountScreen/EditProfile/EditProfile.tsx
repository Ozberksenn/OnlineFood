import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./EditProfile.style";
import { useNavigation } from "../../../utils/useNavigation";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import Input from "../../../components/Input/Input";
import Btn from "../../../components/Btn/Btn";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../../redux/userSlice";
import Toast from "react-native-toast-message";
import * as Yup from "yup";

const EditProfile = () => {
  const navigation = useNavigation();
  const userInfo = useSelector((state: any) => state.user.userInfo);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too Short"),
    last_name: Yup.string().min(1, "Too Short"),
    email: Yup.string().email("Invalid email!"),
    password: Yup.string().trim().min(8, "Password is too short!"),
  });

  const handleSubmit = async (values: any) => {
    try {
      await axios.patch(`http://192.168.1.3:3000/users/${userInfo.id}`, {
        name: values.name,
        last_name: values.last_name,
        password: values.password,
        email: values.email,
      });
      dispatch(
        update({
          ...userInfo,
          name: values.name,
          last_name: values.last_name,
          password: values.password,
          email: values.email,
        })
      );
      navigation.navigate("AccountPage");
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Update Your Info.",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate("AccountPage")}
        style={{ margin: 10 }}
      >
        <Ionicons name="chevron-back-outline" size={34} color="#EB6440" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <Formik
        initialValues={{ email: "", password: "", name: "", last_name: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View style={styles.content}>
            <Input
              onChangeText={handleChange("email")}
              placehloder="E-mail"
              value={values.email}
            />
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>{errors.email}</Text>
            </View>
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
              onChangeText={handleChange("password")}
              placehloder="Password"
              value={values.password}
            />
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>{errors.password}</Text>
            </View>
            <Btn onPress={handleSubmit} btnName="Update" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default EditProfile;
