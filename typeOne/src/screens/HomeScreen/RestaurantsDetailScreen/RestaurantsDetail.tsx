import {
  View,
  Text,
  Image,
  FlatList,
  SectionList,
  ScrollView,
} from "react-native";
import React, { FC } from "react";
import styles from "./RestaurantsDetail.style";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "../../../utils/useNavigation";
import FoodCard from "../../../components/FoodCard/FoodCard";
interface RestaurantProps {
  navigation: { getParam: Function };
}
const RestaurantsDetail: FC<RestaurantProps> = (props) => {
  const navigation = useNavigation();
  const { getParam } = props.navigation;
  const restaurant = getParam("restaurant");
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <Ionicons name="chevron-back" size={40} color="#ba3a10" />
        </TouchableOpacity>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 24, fontWeight: "500" }}>
            {restaurant.restaurantInfo[0].restaurantName}
          </Text>
        </View>
      </View>

      <View>
        <Image
          style={styles.restaurantImage}
          source={{ uri: restaurant.image }}
        />
        <View style={styles.shadowContainer}></View>
        <View style={styles.shadowContent}>
          <Text style={styles.restaurantName}>
            {restaurant.restaurantInfo[0].restaurantName}
          </Text>
          <View style={styles.addressAndPincode}>
            <Text style={styles.address}>
              {restaurant.restaurantInfo[0].address} ,
            </Text>
            <Text style={styles.pincode}>
              {restaurant.restaurantInfo[0].phone}
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        style={{ height: "50%" }}
        data={restaurant.restaurantInfo[0].food}
        renderItem={({ item }) => <FoodCard data={item} />}
      />
    </View>
  );
};

export default RestaurantsDetail;
