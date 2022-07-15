import React from "react";
import { Image, StyleSheet } from "react-native";

import { home, book, orders, settings } from "../assets/images";
import { colors } from "../utils/colors";

type Props = {
  tab: string;
  focused: boolean;
}

const TabbarIcon: React.FC<Props> = ({ focused, tab }) => {

  const renderIcon = () => {
    switch(tab){
      case "home":
        return home;
      case "books":
        return book;
      case "orders":
        return orders;
      default:
        return settings;
    }
  }

  return(
    <Image
      source={renderIcon()}
      style={{...styles.icon, tintColor: focused? colors.primary: colors.dullText}}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20
  }
});

export default TabbarIcon;