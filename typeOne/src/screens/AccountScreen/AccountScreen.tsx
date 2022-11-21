import { SafeAreaView, View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import styles from "./AccountScreen.style";
import AccountCard from "../../components/AccountCard/AccountCard";
import { useNavigation } from "../../utils/useNavigation";
import axios from "axios";
const AccountScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    try {
      axios.get("http://192.168.9.188:3000/users/5").then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelete = async () => {
    // try {
    //   await axios.get("http://192.168.9.188:3000/users/").then((res) => {
    //     console.log(res.data);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profilImage}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.profilName}>Özberk Şen</Text>
          <Text style={styles.email}>ozberksenn@gmail.com</Text>
        </View>
      </View>
      <View style={styles.content}>
        <AccountCard
          onPress={() => console.log("hello Edit")}
          buttonName="Edit Profile"
        />
        <AccountCard
          onPress={() => navigation.navigate("ViewOrderPage")}
          buttonName="View Order"
        />
        <AccountCard onPress={handleDelete} buttonName="Delete User" />
        <AccountCard
          onPress={() => navigation.navigate("SignInPage")}
          buttonName="Logout"
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
