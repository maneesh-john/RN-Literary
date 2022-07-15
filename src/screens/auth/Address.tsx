import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AppContext } from "../../contexts/AppContext";
import { SettingsStackProps } from "../../types/navigation";
import { AddressResponse } from "../../types/api";
import { addNewAddress, getAddresses } from "../../services/user";
import { getUserLocation } from "../../helpers/location";
import { getLocation } from "../../services/user";
import { colors } from "../../utils/colors";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";

type Props = NativeStackScreenProps<SettingsStackProps, "Address">;

const Address: React.FC<Props> = () => {

  const { user: { token, id } } = useContext(AppContext);
  const [addresses, setAddresses] = useState<AddressResponse[]>([]);

  const getUserAddress = async () => {
    const data = await getAddresses(token);
    setAddresses(data);
  }

  const addAddress = async () => {
    const data = await getUserLocation();
    if(data){
      const locationData = await getLocation(data.latitude, data.longitude);
      if(locationData){
        const body = {
          region: locationData.neighbourhood,
          city: locationData.city,
          state: locationData.state,
          country: locationData.country,
          coords: {
              lat: data.latitude,
              lng: 	data.longitude
          },
          userId: id
      }
        const newAddress = await addNewAddress(token, body);
        if(newAddress){
          getUserAddress();
        }
      }
    }
  }

  useEffect(() => {
    getUserAddress();
  }, []);

  return(
    <Wrapper
      title="Address Management"
      showBackButton
      innerStyle={styles.innerWrapper}
    >
      <Button title="Add current location" onPress={addAddress} />
      <FlatList
        data={addresses}
        keyExtractor={(address => address._id)}
        renderItem={({ item }) => {
          return(
            <View style={styles.address}>
              <Text style={styles.addressText}>{item.region}, {item.city}, {item.state}, {item.country}</Text>
              <Button style={styles.button} title="Delete address" onPress={() => {}} />
            </View>
          );
        }}
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  innerWrapper: {
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  address: {
    padding: 20
  },
  addressText: {
    fontSize: 18,
    marginBottom: 10
  },
  button: {
    backgroundColor: colors.error
  }
});

export default Address;