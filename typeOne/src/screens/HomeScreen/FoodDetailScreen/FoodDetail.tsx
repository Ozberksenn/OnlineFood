import { SafeAreaView, View, Text, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./FoodDetail.style";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "../../../utils/useNavigation";
import FoodCard from "../../../components/FoodCard/FoodCard";
import axios from "axios";
import Loading from "../../../components/Loading/Loading";
const FoodDetail = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [foodDetail, setFoodDetail] = useState<any>();
  const [foodSearch, setFoodSearch] = useState<any>();
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get("https://online-foods.herokuapp.com/food/availability/40012")
      .then(function (res) {
        setFoodDetail(res.data.foods);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <Ionicons name="chevron-back" size={40} color="#ba3a10" />
        </TouchableOpacity>
        <TextInput
          onChangeText={(value) => setFoodSearch(value)}
          style={styles.searchInput}
          placeholder=" Search Foods "
        />
      </View>
      <View>
        <FlatList
          data={
            foodSearch?.length > 0
              ? foodDetail.filter((item: any) => {
                  return item.name.includes(foodSearch);
                })
              : foodDetail
          }
          renderItem={({ item }) => <FoodCard data={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default FoodDetail;
