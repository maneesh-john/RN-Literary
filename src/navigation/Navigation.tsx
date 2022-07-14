import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppStackProps } from "../types/navigation";
import { AppContext } from "../contexts/AppContext";
import GuestStack from "./GuestStack";
import UserStack from "./UserStack";

const options = { headerShown: false };

const { Screen, Navigator } = createNativeStackNavigator<AppStackProps>();

const Naviagtion: React.FC = () => {

  const { user: { auth } } = useContext(AppContext);

  return(
    <NavigationContainer>
      <Navigator>
        {auth?
          <Screen
            name="User"
            component={UserStack}
            options={options}
          />:
          <Screen
            name="Guest"
            component={GuestStack}
            options={options}
          />
        }
      </Navigator>
    </NavigationContainer>
  );
}

export default Naviagtion;