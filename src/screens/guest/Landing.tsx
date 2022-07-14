import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { GuestStackProps } from "../../types/navigation";
import { logo } from "../../assets/images";
import { colors } from "../../utils/colors";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<GuestStackProps, "Landing">;

const Landing: React.FC<Props> = ({ navigation }) => {

  const login = () => navigation.navigate("Login");

  const register = () => navigation.navigate("Register");

  return(
    <Wrapper>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.header}>Literary</Text>
      <View style={styles.fullFlex} />
      <Button
        title="Login"
        onPress={login}
        style={styles.button}
      />
      <Button
        title="Register"
        onPress={register}
        style={styles.button}
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
    tintColor: colors.primary,
    marginTop: 50
  },
  header: {
    color: colors.primary,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 10
  },
  fullFlex: {
    flex: 1
  },
  button: {
    marginBottom: 20
  }
});

export default Landing;