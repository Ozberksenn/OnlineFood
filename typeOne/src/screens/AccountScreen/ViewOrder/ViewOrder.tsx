import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import styles from "./ViewOrder.style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "../../../utils/useNavigation";
import { AntDesign } from "@expo/vector-icons";
const ViewOrder = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          padding: 5,
        }}
      >
        <Ionicons
          onPress={() => navigation.navigate("AccountPage")}
          style={{ left: 10 }}
          name="ios-arrow-back-sharp"
          size={36}
          color="orange"
        />
      </View>
      <MapView style={styles.map}>
        <Marker
          coordinate={{
            latitude: 40.188526,
            longitude: 29.060965,
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: "https://imzalikitabim.com/wp-content/uploads/2018/02/S%C4%B0TE-%C4%B0CON-03-min.png",
            }}
          />
        </Marker>
      </MapView>
    </SafeAreaView>
  );
};

export default ViewOrder;
