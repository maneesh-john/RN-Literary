import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

import { BookStackProps } from "../../types/navigation";
import { colors } from "../../utils/colors";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";

type Props = NativeStackScreenProps<BookStackProps, "BookDetails">;

const BookDetails: React.FC<Props> = ({ route, navigation }) => {

  const { name, description, cover, author, price, genre } = route.params.book;

  const checkout = () => {
    navigation.navigate("Checkout", { book: route.params.book });
  }

  return(
    <Wrapper
      title={name}
      showBackButton
      innerStyle={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <Image source={{ uri: cover }} style={styles.cover} />
        <Text style={styles.title}><Text style={styles.label}>Author:</Text> {author}</Text>
        <Text style={styles.title}><Text style={styles.label}>Genre:</Text> {genre}</Text>
        <Text style={styles.text}><Text style={styles.label}>Description:</Text> {description}</Text>
        <Text style={styles.priceText}><Text style={styles.label}>Price:</Text> Rs. {price}</Text>
        <Button
          title="Buy now"
          onPress={checkout}
        />
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0
  },
  scrollView: {
    paddingHorizontal: "5%"
  },
  cover: {
    width: "100%",
    aspectRatio: .65,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 15
  },
  title: {
    fontSize: 18,
    marginBottom: 10
  },
  text: {
    fontSize: 15,
    marginBottom: 10
  },
  priceText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 15
  },
  label: {
    color: colors.primary
  }
});

export default BookDetails;