import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./PostScreen.style";
import { Ionicons } from "@expo/vector-icons";
import PostCard from "../../components/PostCard/PostCard";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";

const PostScreen = () => {
  const [post, setPost] = useState<any>("");

  useEffect(() => {
    try {
      axios.get("http://10.22.16.1:3000/posts").then((response) => {
        setPost(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <View style={styles.header}>
          <Ionicons name="md-fast-food-outline" size={24} color="black" />
          <Text style={styles.title}>Online Food</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="plus-square-o" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={post}
          renderItem={({ item }) => <PostCard data={item} />}
          style={{ height: "93%" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PostScreen;
