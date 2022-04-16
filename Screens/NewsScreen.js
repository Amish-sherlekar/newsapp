import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class NewsScreen extends Component {
  constructor() {
    super();
    this.state = {
      article_: '',
    };
  }

  getNews = async () => {
    //change latitude and longitude
    var url = 'https://saurav.tech/NewsAPI/top-headlines/category/business/in.json';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          article_: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.getNews();
  };

  render() {
    if (this.state.article_ === '') {
      return (
        <View>
          <Text>Loading....</Text>{
          }
        </View>
      );
    } else {
      return (
        <View style={{ padding: 10, margin: 10 }}>

          <View style={{ backgroundColor: '#af1', margin: 10, padding: 10 }}>
            <Image source={{ uri: this.state.article_.articles[0].urlToImage }} />
            <Text style={{ padding: 10, margin: 10 }}>{this.state.article_.articles[0].title}</Text>
            <Text style={{ fontSize: 10 }}>{this.state.article_.articles[0].description}</Text>
          </View>

          <View style={{ backgroundColor: '#af1', margin: 10, padding: 10 }}>
            <Image source={{ uri: this.state.article_.articles[1].urlToImage }} />
            <Text style={{ padding: 10, margin: 10 }}>{this.state.article_.articles[1].title}</Text>
            <Text style={{ fontSize: 10 }}>{this.state.article_.articles[1].description}</Text>
          </View>

          <View style={{ backgroundColor: '#af1', margin: 10, padding: 10 }}>
            <Image source={{ uri: this.state.article_.articles[2].urlToImage }} />
            <Text style={{ padding: 10, margin: 10 }}>{this.state.article_.articles[2].title}</Text>
            <Text style={{ fontSize: 10 }}>{this.state.article_.articles[2].description}</Text>
          </View>

          <View style={{ backgroundColor: '#af1', margin: 10, padding: 10 }}>
            <Image source={{ uri: this.state.article_.articles[3].urlToImage }} />
            <Text style={{ padding: 10, margin: 10 }}>{this.state.article_.articles[3].title}</Text>
            <Text style={{ fontSize: 10 }}>{this.state.article_.articles[3].description}</Text>
          </View>

          <View style={{ backgroundColor: '#af1', margin: 10, padding: 10 }}>
            <Image source={{ uri: this.state.article_.articles[4].urlToImage }} />
            <Text style={{ padding: 10, margin: 10 }}>{this.state.article_.articles[4].title}</Text>
            <Text style={{ fontSize: 10 }}>{this.state.article_.articles[4].description}</Text>
          </View>

        </View>
      )
    }
  }
}
