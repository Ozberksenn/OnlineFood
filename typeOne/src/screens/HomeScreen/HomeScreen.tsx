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
const HomeScreen: FC<Category> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [food, setFood] = useState<any>(null);
  const [restaurant, setRestaurant] = useState<any>(null);
  const navigation = useNavigation();
  useEffect(() => {
    axios
      .get("https://online-foods.herokuapp.com/food/availability/40012")
      .then(function (response) {
        setFood(response.data.categories);
        setRestaurant(response.data.restaurants);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
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
        data={food}
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
                  navigation.navigate("RestaurantsPage", {
                    restaurant: item,
                  })
                }
              >
                <Image
                  style={styles.restaurantImage}
                  source={{
                    uri: item?.images[0],
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
                uri: "https://online-foods.herokuapp.com/images/chicken_dry.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
