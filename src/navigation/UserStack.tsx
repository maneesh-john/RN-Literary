import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import UserHome from "../screens/auth/UserHome";
import Settings from "../screens/auth/Settings";
import TabbarIcon from "../components/TabbarIcon";
import { colors } from "../utils/colors";

const options = {
  headerShown: false,
  tabBarIcon: TabbarIcon,
  tabBarLabelStyle: {
    color: colors.primary,
    fontSize: 12
  }
};

const { Navigator, Screen } = createBottomTabNavigator();

const UserStack: React.FC = () => {
  
  return(
    <Navigator>
      <Screen
        name="Home"
        component={UserHome}
        options={options}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={options}
      />
    </Navigator>
  );
}

export default UserStack;