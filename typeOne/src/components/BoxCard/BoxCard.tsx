import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import styles from "./BoxCard.style";
import { FontAwesome } from "@expo/vector-icons";
interface boxProps {
  data: any;
}
const BoxCard: FC<boxProps> = ({ data }) => {
  return (
    <>
      {data.count === 0 ? (
        false
      ) : (
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
              <Text
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                piece : {data.count}
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default BoxCard;
