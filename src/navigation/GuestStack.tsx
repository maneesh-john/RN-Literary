import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { GuestStackProps } from "../types/navigation";
import Landing from "../screens/guest/Landing";
import Login from "../screens/guest/Login";
import Register from "../screens/guest/Register";

const options = { headerShown: false };

const { Navigator, Screen } = createNativeStackNavigator<GuestStackProps>();

const GuestStack: React.FC = () => {

  return(
    <Navigator>
      <Screen
        name="Landing"
        component={Landing}
        options={options}
      />
      <Screen
        name="Login"
        component={Login}
        options={options}
      />
      <Screen
        name="Register"
        component={Register}
        options={options}
      />
    </Navigator>
  );
}

export default GuestStack;