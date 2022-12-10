import { SafeAreaView, View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import styles from "./AccountScreen.style";
import AccountCard from "../../components/AccountCard/AccountCard";
import { useNavigation } from "../../utils/useNavigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import axios from "axios";
const AccountScreen = () => {
  const navigation = useNavigation();
  const userInfo = useSelector((state: any) => state.user.userInfo);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout({}));
    navigation.navigate("SignInPage");
  };
  const handleEditProfile = () => {
    navigation.navigate("EditProfilePage");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profilImage}
          source={{
            uri: userInfo.profilePhoto,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.profilName}>
            {userInfo.name} {userInfo.last_name}
          </Text>
          <Text style={styles.email}>{userInfo.email}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <AccountCard onPress={handleEditProfile} buttonName="Edit Profile" />
        <AccountCard
          onPress={() => navigation.navigate("ViewOrderPage")}
          buttonName="View Order"
        />
        <AccountCard
          onPress={() => navigation.navigate("DeleteUserPage")}
          buttonName="Delete User"
        />
        <AccountCard onPress={handleLogout} buttonName="Logout" />
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
