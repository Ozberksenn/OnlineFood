import { View, TextInput } from "react-native";
import React, { FC } from "react";
import styles from "./Input.style";
interface inputProps {
  placehloder: string | any;
  onChangeText: (value: any) => void;
  value: string;
}
const Input: FC<inputProps> = ({ placehloder, onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placehloder}
      />
    </View>
  );
};

export default Input;
