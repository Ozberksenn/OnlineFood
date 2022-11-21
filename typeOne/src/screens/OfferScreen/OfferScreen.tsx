import { SafeAreaView, View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./OfferScreen.style";
("react-native-gesture-handler");
import OfferCard from "../../components/OfferCard/OfferCard";
const OfferScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.title}>Offers & Deals</Text>
      </View>
      <ScrollView>
        <OfferCard
          text="10%"
          title="10%"
          image="https://cdn.grabon.in/gograbon/images/web-images/uploads/1548853247591/Foodpanda-Coupons.jpg"
        />
        <OfferCard
          text="30%"
          title="30%"
          image="https://images.freeclues.com/assets/images/coupons/coupon_af62e412243ed29856aa6697cb5dca17.png"
        />
        <OfferCard
          text="50%"
          title="50%"
          image="https://gotaiwanlab.com/wp-content/uploads/2020/03/foodpanda-coupon.001.jpeg"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OfferScreen;
