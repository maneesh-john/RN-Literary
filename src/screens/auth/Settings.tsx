import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SettingsStackProps } from "../../types/navigation";
import { AppContext, initState } from "../../contexts/AppContext";
import Wrapper from "../../components/Wrapper";
import { colors } from "../../utils/colors";

type Props = NativeStackScreenProps<SettingsStackProps, "Setting">;

const Settings: React.FC<Props> = ({ navigation }) => {

  const { setUser, user: { name } } = useContext(AppContext);

  const editProfile = () => {
    navigation.navigate("EditProfile");
  }

  const addressManagement = () => {
    navigation.navigate("Address");
  }

  const support = () => {
    navigation.navigate("Support");
  }

  const onLogout = () => {
    setUser(initState.user);
  }

  return(
    <Wrapper title="Settings">
      <View style={styles.container}>
        <View style={styles.profile}>
          <Text style={styles.profileText}>{name?.[0] || "NA"}{name?.[1] || ""}</Text>
        </View>
        <TouchableOpacity style={styles.block} onPress={editProfile}>
          <Text style={styles.text}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block} onPress={addressManagement}>
          <Text style={styles.text}>Address Management</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block} onPress={support}>
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
    width: "100%"
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
  },
  profile: {
    height: 100,
    width: 100,
    backgroundColor: colors.primary,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  profileText: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});

export default Settings;