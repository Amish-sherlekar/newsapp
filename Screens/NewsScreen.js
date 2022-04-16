import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default NewsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/general/in.json');
      const json = await response.json();
      setData(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}, {item.releaseYear}</Text>
            </View>
          )}
        />
      )}
      {/* <Text>
        Amish
      </Text> */}
    </View>
  );
};