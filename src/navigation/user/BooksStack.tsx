import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BookStackProps } from "../../types/navigation";
import Books from "../../screens/auth/Books";
import BookDetails from "../../screens/auth/BookDetails";
import Checkout from "../../screens/auth/Checkout";

const options = { headerShown: false };

const { Screen, Navigator } = createNativeStackNavigator<BookStackProps>();

const BookStack: React.FC = () => {

  return(
    <Navigator>
      <Screen
        name="Book"
        component={Books}
        options={options}
      />
      <Screen
        name="BookDetails"
        component={BookDetails}
        options={options}
      />
      <Screen
        name="Checkout"
        component={Checkout}
        options={options}
      />
    </Navigator>
  );
}

export default BookStack;