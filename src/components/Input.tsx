import React from "react";
import { TextInput, StyleSheet, KeyboardTypeOptions, View, Text, NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { colors } from "../utils/colors";

type Props = {
  value: string;
  onChange: (s: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  disabled?: boolean;
  secureEntry?: boolean;
  errorText?: string;
  touched?: boolean;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  onBlur,
  label,
  placeholder,
  maxLength,
  keyboardType,
  disabled,
  secureEntry,
  errorText,
  touched
}) => {

  const showError = touched && errorText;

  return(
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChange}
        onBlur={e => onBlur?.(e)}
        placeholder={placeholder}
        placeholderTextColor={colors.dullText}
        maxLength={maxLength}
        keyboardType={keyboardType || "default"}
        editable={!disabled}
        secureTextEntry={secureEntry || false}
        style={styles.input}
        autoCapitalize="none"
      />
      {showError && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 15
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primary,
    color: colors.black,
    borderRadius: 7,
    fontSize: 16,
    textAlignVertical: "top"
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: colors.black
  },
  errorText: {
    marginTop: 5,
    color: colors.error,
    fontSize: 13
  }
});

export default Input;