import { Text, Image } from "react-native";
import React, { FC } from "react";
import styles from "./CategoryCard.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "../../utils/useNavigation";
export interface Category {
  data: any;
}
const CategoryCard: FC<Category> = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryDetailPage")}
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: data.image }} />
      <Text style={{ textAlign: "center" }}>{data.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
