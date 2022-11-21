import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./AccountCard.style";
interface buttonProps {
  buttonName: string;
  onPress: () => void;
}
const AccountCard: FC<buttonProps> = ({ buttonName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{ fontSize: 16 }}>{buttonName}</Text>
      <MaterialIcons name="arrow-forward-ios" size={34} color="gray" />
    </TouchableOpacity>
  );
};

export default AccountCard;
