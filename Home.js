import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import coffees from './coffees';

export default function Home(props) {

  const renderCoffeeItem = (item) => {
    return (
      <TouchableOpacity 
      style={styles.coffeeItem} 
      onPress={()=> props.navigation.navigate("CoffeeItem", {item})}>
        <Image style={styles.coffeeImage} source={{uri: item.image}}/>
        <Text>{item.name}</Text>
        <Text>{item.price}€</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      {/* Pour appliquer plusieurs styles */}
      {/* style={`${styles.title} ${styles.header}`} */}
      {/* <Text style={styles.title}>Bonjour!</Text> */}

      <Image style={styles.header} source={require("./img/header.jpg")} />

      <FlatList
          keyExtractor={item => item.id}
          data={coffees}
          renderItem={({ item }) => renderCoffeeItem(item)}
          numColumns={2}
        />

    </View>


  );
}

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
  },
  title: {
    fontSize: 30
  },
  header: {
    width: vw,
    height: vh / 3
  },
  coffeeItem:{
    flex:1,
    padding:10
  },
  coffeeImage: {
    width: 100,
    height: 200,
  }
});
