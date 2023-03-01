import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);

  // const getMovies = async () => {
  //   try {
  //     const response = await fetch("https://reactnative.dev/movies.json");
  //     const json = await response.json();
  //     console.log(json);
  //     setData(json.movies);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getMovies = () => {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.movies);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getAxiosMovies = () => {
    axios({
      method: "get",
      url: "https://reactnative.dev/movies.json",
    })
      .then((response) => {
        setData(response.data.movies);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    // getMovies();
    getAxiosMovies();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <Text style={styles.text}>
            Title : {itemData.item.title}, Release Year :{" "}
            {itemData.item.releaseYear}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "70%",
  },
  text: {
    fontSize: 20,
  },
});
export default App;
