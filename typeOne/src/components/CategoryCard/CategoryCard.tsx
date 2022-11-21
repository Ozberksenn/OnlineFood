import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import styles from "./CategoryCard.style";
import { TouchableOpacity } from "react-native-gesture-handler";
export interface Category {
  data: any;
}
const CategoryCard: FC<Category> = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{ uri: data.icon }} />
      <Text style={{ textAlign: "center" }}>{data.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
