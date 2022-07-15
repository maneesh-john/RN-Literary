import React from "react";
import { StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SettingsStackProps } from "../../types/navigation";
import Wrapper from "../../components/Wrapper";

type Props = NativeStackScreenProps<SettingsStackProps, "Support">;

const Support: React.FC<Props> = () => {

  return(
    <Wrapper title="Support" showBackButton>

    </Wrapper>
  );
}

const styles = StyleSheet.create({

});

export default Support;