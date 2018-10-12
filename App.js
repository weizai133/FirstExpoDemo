import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header";
import AlbumList from "./components/AlbumList";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText="Albums!" />
        <AlbumList />
      </View>
    );
  }
}
