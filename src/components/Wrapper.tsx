import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, StyleProp, ViewStyle, Text, TouchableOpacity } from "react-native";

import { colors } from "../utils/colors";

type Props = {
  children: React.ReactNode;
  title?: string;
  outerStyle?: StyleProp<ViewStyle>;
  innerStyle?: StyleProp<ViewStyle>;
  showBackButton?: boolean;
}

const Wrapper: React.FC<Props> = ({ children, outerStyle, innerStyle, title, showBackButton }) => {

  const navigation = useNavigation();

  return(
    <>
      <View style={[styles.container, outerStyle]}>
        {showBackButton && (
          <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
            <Text style={styles.backIcon}>+</Text>
          </TouchableOpacity>
        )}
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
      <View style={[styles.innerWrapper, innerStyle]}>
        {children}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .15,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    borderBottomLeftRadius: 25,
    elevation: 5,
    shadowColor: colors.black,
    shadowOpacity: .35,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 2
    },
    position: "relative"
  },
  innerWrapper: {
    flex: .85,
    backgroundColor: colors.white,
    padding: "5%",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: colors.white,
    fontSize: 22,
    textAlign: "center",
    textTransform: "capitalize"
  },
  backButton: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: 75,
    justifyContent: "center",
    alignItems: "center"
  },
  backIcon: {
    color: colors.white,
    fontSize: 30,
    transform: [{
      rotate: "45deg"
    }]
  }
});

export default Wrapper;