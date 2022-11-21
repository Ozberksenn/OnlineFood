import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import styles from "./OfferCard.style";
interface offerCardProps {
  image: string;
  title: string;
  text: string;
}
const OfferCard: FC<offerCardProps> = ({ image, title, text }) => {
  return (
    <View style={styles.offerCard}>
      <Image style={styles.discountImage} source={{ uri: image }} />
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <View style={{ marginLeft: 5, justifyContent: "center" }}>
          <Text style={styles.offerTitle}>{title} OFF on Chicken Items</Text>
          <Text style={styles.offerText}>
            {text} of for any non Chicken Items.
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Apply NJOY10</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OfferCard;
