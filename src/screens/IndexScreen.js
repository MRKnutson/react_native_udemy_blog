import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import BlogsContext from "../context/BlogsContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogsContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default IndexScreen;
