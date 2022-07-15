import React from "react";
import { StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SettingsStackProps } from "../../types/navigation";
import Wrapper from "../../components/Wrapper";

type Props = NativeStackScreenProps<SettingsStackProps, "EditProfile">;

const EditProfile: React.FC<Props> = () => {

  return(
    <Wrapper title="Edit Profile" showBackButton>

    </Wrapper>
  );
}

const styles = StyleSheet.create({

});

export default EditProfile;