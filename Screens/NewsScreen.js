import React, { Component } from 'react';
import { Text, View, Image, ScrollView, FlatList, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const windowWidth = Dimensions.get('window').width;

export default class NewsScreen extends Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }

  getWeather = async () => {
    //change latitude and longitude
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          weather: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.getWeather();
  };

  render() {
    if (this.state.weather === '') {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>
              Weather Forecast
            </Text>
            <Image
              style={styles.cloudImage}
              source={require('./clouds.png')}
            />
            <View style={styles.textContainer}>
            <Text style={{ fontSize: 18}}>
              {this.state.weather.main.temp}&deg;C
            </Text>
            <Text style={{ fontSize: 18, margin:10}}>
              humidity : {this.state.weather.main.humidity}
            </Text>
            <Text style={{fontSize: 18}}>
              {this.state.weather.weather[0].description}
            </Text>
          </View>
          </View>
        </View>
      );
    }
  }
}
