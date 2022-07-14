import React from "react";
import { Image, StyleSheet } from "react-native";

import { home } from "../assets/images";
import { colors } from "../utils/colors";

const TabbarIcon: React.FC = (props: any) => {

  return(
    <Image
      source={home}
      style={styles.icon}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    tintColor: colors.primary
  }
});

export default TabbarIcon;