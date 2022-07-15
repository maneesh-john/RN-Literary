import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsStackProps } from "../../types/navigation";
import Settings from "../../screens/auth/Settings";
import EditProfile from "../../screens/auth/EditProfile";
import Support from "../../screens/auth/Support";
import Address from "../../screens/auth/Address";

const options = { headerShown: false };

const { Screen, Navigator } = createNativeStackNavigator<SettingsStackProps>();

const SettingsStack: React.FC = () => {

  return(
    <Navigator>
      <Screen
        name="Setting"
        component={Settings}
        options={options}
      />
      <Screen
        name="EditProfile"
        component={EditProfile}
        options={options}
      />
      <Screen
        name="Support"
        component={Support}
        options={options}
      />
      <Screen
        name="Address"
        component={Address}
        options={options}
      />
    </Navigator>
  );
}

export default SettingsStack;