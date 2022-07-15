import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BookStackProps } from "../../types/navigation";
import { AppContext } from "../../contexts/AppContext";
import { colors } from "../../utils/colors";
import { AddressResponse } from "../../types/api";
import { getAddresses } from "../../services/user";
import { placeOrder } from "../../services/books";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";

type Props = NativeStackScreenProps<BookStackProps, "Checkout">;

const Checkout: React.FC<Props> = ({ route }) => {

  const { user: { token } } = useContext(AppContext);
  const [addresses, setAddresses] = useState<AddressResponse[]>([]);
  const [activeAddress, setActiveAddress] = useState<string>("");
  const { name, price, author, _id } = route.params.book;

  const getUserAddresses = async () => {
    const data = await getAddresses(token);
    setAddresses(data);
    setActiveAddress(data?.[0]?._id || "");
  }

  const confirmOrder = async () => {
    const body = {
      book: _id,
      address: activeAddress
    }
    const data = await placeOrder(token, body);
    console.log(data);
  }

  useEffect(() => {
    getUserAddresses();
  }, []);

  return(
    <Wrapper
      title="Checkout"
      showBackButton
      innerStyle={styles.innerWrapper}
    >
      <View style={styles.block}>
        <Text style={styles.header}>Item for purchase:</Text>
        <Text style={styles.detailText}>{name}</Text>
        <Text style={styles.detailText}>By {author}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.detailText}>Item price: Rs. {price}</Text>
        <Text style={styles.detailText}>Shipping charges: Rs. 50</Text>
        <Text style={styles.header}>Total amount: Rs. {price + 50}</Text>
      </View>
      {(addresses.length > 0) && <View style={styles.block}>
        {addresses.map(address => {
          return(
            <TouchableOpacity onPress={() => setActiveAddress(address._id)}>
              <Text
                style={{...styles.detailText, color: (activeAddress === address._id)? colors.primary: colors.black}}
                numberOfLines={1}
              >
                {address.region}, {address.city}, {address.state}, {address.country}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>}
      <Button
        title="Place order"
        onPress={confirmOrder}
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  innerWrapper: {
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  header: {
    fontSize: 18,
    marginBottom: 5,
    color: colors.primary
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5
  },
  block: {
    padding: 10,
    borderWidth: 2,
    borderColor: colors.dullText,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20
  }
});

export default Checkout;