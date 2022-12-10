import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState, FC } from "react";
import axios from "axios";
import { Category } from "../../redux/models/index";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { EvilIcons } from "@expo/vector-icons";
import styles from "./HomeScreen.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "../../utils/useNavigation";
import Loading from "../../components/Loading/Loading";
import foodApi from "../../../assets/food.json";
const HomeScreen: FC<Category> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<any>(null);
  const [restaurant, setRestaurant] = useState<any>(null);
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      setCategories(foodApi.categories);
      setRestaurant(foodApi.restaurants);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput placeholder="Search Foods" />
      </View>
      <FlatList
        horizontal={true}
        data={categories}
        renderItem={({ item }) => <CategoryCard data={item} />}
      />
      <ScrollView>
        <View style={{ marginVertical: 15 }}>
          <Text style={styles.restaurantTitle}>Top Restaurants</Text>
          <FlatList
            horizontal={true}
            data={restaurant}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantsPage", { restaurant: item })
                }
              >
                <Image
                  style={styles.restaurantImage}
                  source={{
                    uri: item.image,
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ marginVertical: 15 }}>
          <Text style={styles.restaurantTitle}>30 Minutes Foods</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("FoodDetailPage")}
          >
            <Image
              style={styles.foodImage}
              source={{
                uri: "https://eticaretyap.com/data/uploads/2021/02/E-Ticaret-Firmalar%C4%B1-H%C4%B1zl%C4%B1-Teslimat-%C4%B0%C3%A7in-Neler-Yapmal%C4%B1d%C4%B1r.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
