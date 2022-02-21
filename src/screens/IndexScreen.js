import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import { Context as BlogsContext } from "../context/BlogsContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogsContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
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
