import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BookStackProps } from "../../types/navigation";
import { AppContext } from "../../contexts/AppContext";
import { BookResponse } from "../../types/api";
import { getBookList } from "../../services/books";
import Wrapper from "../../components/Wrapper";
import { colors } from "../../utils/colors";

type Props = NativeStackScreenProps<BookStackProps, "Book">;

const Books: React.FC<Props> = ({ navigation }) => {

  const { user: { token } } = useContext(AppContext);
  const [books, setBooks] = useState<BookResponse[]>([]);

  const getData = async () => {
    const data = await getBookList(token);
    setBooks(data);
  }

  const viewDetails = (book: BookResponse) => {
    navigation.navigate("BookDetails", { book });
  }

  useEffect(() => {
    getData();
  }, []);

  return(
    <Wrapper title="Books" innerStyle={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(book) => book._id}
        numColumns={2}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity
              onPress={() => viewDetails(item)}
              style={styles.book}
            >
              <Image source={{ uri: item.cover }} style={styles.cover} />
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.priceText}>Rs. {item.price}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0
  },
  book: {
    width: "50%",
    alignItems: "center",
    padding: 10
  },
  cover: {
    width: "100%",
    aspectRatio: .65,
    marginBottom: 10,
    borderRadius: 10
  },
  nameText: {
    color: colors.primary,
    fontSize: 16,
    marginBottom: 5
  },
  priceText: {
    color: colors.black,
    fontSize: 13,
    fontWeight: "bold"
  }
});

export default Books;