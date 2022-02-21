import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogsContext } from "../context/BlogsContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogsContext);

  const id = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
