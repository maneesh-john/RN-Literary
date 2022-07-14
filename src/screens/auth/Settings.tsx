import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { GuestStackProps } from "../../types/navigation";
import { AppContext, initState } from "../../contexts/AppContext";
import Wrapper from "../../components/Wrapper";
import { colors } from "../../utils/colors";

const Settings: React.FC = () => {

  const { setUser } = useContext(AppContext);

  const onLogout = () => {
    setUser(initState.user);
  }

  return(
    <Wrapper title="Settings">
      <View style={styles.container}>
        <TouchableOpacity style={styles.block}>
          <Text style={styles.text}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}>
          <Text style={styles.text}>Address Management</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}>
          <Text style={styles.text}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onLogout}
          style={styles.block}
        >
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: "15%"
  },
  block: {
    width: "100%",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.dullText
  },
  text: {
    color: colors.primary,
    fontSize: 18,
    textAlign: "center"
  }
})

export default Settings;