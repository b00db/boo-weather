import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

const { height:SCREEN_HEIGHT, width:SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView 
        pagingEnabled 
        horizontal
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {

  },
  day: {
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignContent: "center",
  },
  temp: {
    marginTop: -30,
    fontSize: 178,
  },
  description: {
    fontSize: 60,
  },
});
