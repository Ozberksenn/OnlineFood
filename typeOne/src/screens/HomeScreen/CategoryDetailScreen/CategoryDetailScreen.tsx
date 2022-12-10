import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import React from "react";
import styles from "./CategoryDetailScreen.style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "../../../utils/useNavigation";
const CategoryDetailScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
        style={styles.background}
        source={{
          uri: "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        }}
      ></ImageBackground>
      <View style={styles.content}>
        <Text style={styles.title}>No service provider found.</Text>
        <Ionicons
          onPress={() => navigation.navigate("HomePage")}
          style={styles.icon}
          name="chevron-back"
        />
      </View>
    </View>
  );
};

export default CategoryDetailScreen;
