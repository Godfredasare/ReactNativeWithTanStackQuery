import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { fetcRatedMovies } from '../service/movies-api';
import { useQuery } from '@tanstack/react-query';
import MovieListItem from '@/components/MovieListItem';
import { fetchWatchList } from '../service/watchList-api';

export default function WatchList() {
  const { data: movies, error, isLoading } = useQuery({
    queryKey: ['watchlist'],
    queryFn: fetchWatchList
  })





  if (isLoading) {
    return <ActivityIndicator />
  }
  if (error) {
    return <Text>Error fetching movies</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 5, padding: 5, paddingRight: 10}}
        columnWrapperStyle={{ gap: 5 }}
        numColumns={2}
        data={movies}
        //  keyExtractor={}
        renderItem={({ item }) =>
          <MovieListItem movie={item} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
