import { View, SafeAreaView, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./CardScreen.style";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { order } from "../../redux/FoodSlice";
import BoxCard from "../../components/BoxCard/BoxCard";
import Toast from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";

const CardScreen = () => {
  const { footerInfo } = useSelector((state: any) => state.food);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(false);
  let newSum = 0;
  useEffect(() => {
    footerInfo.map((item: any) => {
      const sum = item.price * item.count;
      newSum += sum;
      setTotal(newSum);
    });
  }, [footerInfo]);

  const handleOrderNow = () => {
    setPay(!pay);
    // dispatch(order([]));
    // setTotal(0);
    // Toast.show({
    //   type: "success",
    //   text1: "Successfully",
    //   text2: "your order has been successfully created ",
    // });
  };

  if (pay === false) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.cardTitle}>My Card</Text>
          <MaterialCommunityIcons
            name="truck-check-outline"
            size={32}
            color="#f14154"
          />
        </View>
        <View style={styles.content}>
          {footerInfo ? (
            <FlatList
              data={footerInfo}
              renderItem={({ item }) => <BoxCard data={item} />}
            />
          ) : (
            <Text>Any Item</Text>
          )}
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <Text style={styles.Total}>Total</Text>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome name="turkish-lira" size={24} color="black" />
              <Text style={styles.price}>{total}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={handleOrderNow} style={styles.button}>
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <>
        <SafeAreaView style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            onPress={handleOrderNow}
            style={{ marginLeft: 20, marginHorizontal: 20 }}
            name="chevron-back"
            size={32}
            color="black"
          />
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Back To Order Page
          </Text>
        </SafeAreaView>
      </>
    );
  }
};

export default CardScreen;
