import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { fetcRatedMovies } from '../service/movies-api';

export default function TabOneScreen() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMovies = async () => {
    setLoading(true)
    try {
      const movies = await fetcRatedMovies()
      setMovies(movies)
      setLoading(false)
      
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  if(loading) {
    return <ActivityIndicator />
  }
  if(error) {
    return <Text>Error fetching movies</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        //  keyExtractor={}
        renderItem={({ item }) => (
          <View>

            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
