import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "../utils/colors";
import TabbarIcon from "../components/TabbarIcon";
import UserHome from "../screens/auth/UserHome";
import Settings from "./user/SettingsStack";
import Books from "./user/BooksStack";
import Orders from "../screens/auth/Orders";

const options = (tab: string) => ({
  headerShown: false,
  tabBarIcon: (p: { focused: boolean }) => <TabbarIcon tab={tab} focused={p.focused} />,
  tabBarLabelStyle: {
    color: colors.dullText,
    fontSize: 12
  }
});

const { Navigator, Screen } = createBottomTabNavigator();

const UserStack: React.FC = () => {
  
  return(
    <Navigator>
      <Screen
        name="Home"
        component={UserHome}
        options={options("home")}
      />
      <Screen
        name="Books"
        component={Books}
        options={options("books")}
      />
      <Screen
        name="Orders"
        component={Orders}
        options={options("orders")}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={options("settings")}
      />
    </Navigator>
  );
}

export default UserStack;