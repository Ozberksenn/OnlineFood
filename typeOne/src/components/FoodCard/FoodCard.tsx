import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";
import styles from "./FoodCard.style";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { deleteFood, setFood } from "../../redux/FoodSlice";
export interface detailProps {
  data: any;
}
const FoodCard: FC<detailProps> = ({ data }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(0);
  const handleAdd = () => {
    setCount(count + 1);
    dispatch(setFood(data));
  };
  const handleDelete = () => {
    setCount(count - 1);
    dispatch(deleteFood(data));
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: data?.images[0],
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.foodName}>{data.name}</Text>
          <Text
            style={{
              marginLeft: 5,
              marginVertical: 10,
            }}
          >
            {data.category.toUpperCase()}
          </Text>
        </View>
        <View style={styles.buttonAndPrice}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome
              style={{ marginHorizontal: 5 }}
              name="turkish-lira"
              size={24}
              color="black"
            />
            <Text style={styles.price}>{data.price}</Text>
          </View>
          {count > 0 ? (
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={handleDelete}
                style={styles.plusAndMinus}
              >
                <AntDesign name="minus" size={14} color="#ef4e53" />
              </TouchableOpacity>
              <Text style={styles.count}>{count}</Text>
              <TouchableOpacity onPress={handleAdd} style={styles.plusAndMinus}>
                <AntDesign name="plus" size={14} color="#ef4e53" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={handleAdd}
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonName}>Add</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default FoodCard;
