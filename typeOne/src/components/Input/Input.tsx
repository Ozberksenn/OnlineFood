import { View, Text, TextInput } from "react-native";
import React, { FC } from "react";
import styles from "./Input.style";
interface inputProps {
  placehloder: string;
  onChangeText: (value: any) => void;
}
const Input: FC<inputProps> = ({ placehloder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placehloder}
      />
    </View>
  );
};

export default Input;
