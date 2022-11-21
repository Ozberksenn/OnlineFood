import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import styles from "./Btn.style";
interface btnProps {
  btnName: string;
  onPress: () => void;
}
const Btn: FC<btnProps> = ({ btnName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.btnName}>{btnName}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
