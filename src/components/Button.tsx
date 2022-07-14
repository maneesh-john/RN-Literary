import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, ActivityIndicator, TextStyle } from "react-native";

import { colors } from "../utils/colors";

type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
}

const Button: React.FC<Props> = ({ title, onPress, style, loading, textStyle }) => {

  return(
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={.7}
    >
      {loading
        ? <ActivityIndicator size="small" color="#fff" />
        : <Text style={[styles.text, textStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: colors.primary,
    width: "100%",
    marginBottom: 10
  },
  text: {
    textAlign: "center",
    fontSize: 17,
    color: colors.white
  }
});

export default Button;