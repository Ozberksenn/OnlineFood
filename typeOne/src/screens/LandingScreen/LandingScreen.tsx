import { View, Text, Image, SafeAreaView } from "react-native";
import React, { useState, useReducer, useEffect } from "react";
import styles from "./LandingScrren.style";
import * as Location from "expo-location";
import { useNavigation } from "../../utils/useNavigation";

const LandingScreen = () => {
  const { navigate } = useNavigation();
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState<Location.LocationGeocodedAddress>();

  const [displayAddress, setDisplayAddress] = useState(
    "Waiting For Current Location"
  );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location: any = await Location.getCurrentPositionAsync({});

      const { coords } = location;

      if (coords) {
        const { latitude, longitude } = coords;
        let addresResponse: any = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
        for (let item of addresResponse) {
          setAddress(item);
          let currentAddress = `${item.name},${item.street},${item.country}`;
          setDisplayAddress(currentAddress);
          if (currentAddress.length > 0) {
            setTimeout(() => {
              navigate("HomePage");
            }, 2000);
          }
          return;
        }
      }
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        style={styles.image}
        source={{
          uri: "https://www.kurye365.com/wp-content/uploads/2022/09/moto-kurye.png",
        }}
      />
      <Text style={styles.addrres}>Your Delivery Address</Text>
      <View style={styles.line}></View>
      <Text style={styles.location}>{displayAddress}</Text>
    </SafeAreaView>
  );
};

export default LandingScreen;
