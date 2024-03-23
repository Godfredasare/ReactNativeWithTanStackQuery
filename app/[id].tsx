import { ActivityIndicator, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from '@/components/Themed';

import { Stack, useLocalSearchParams } from 'expo-router'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchMoviesDetails } from './service/movies-api'
import { FontAwesome } from '@expo/vector-icons';
import { addToWatchList } from './service/watchList-api';


const MoviesDetails = () => {
  const { id } = useLocalSearchParams()
  
  const client = useQueryClient()
  
  const { data, error, isLoading } = useQuery({
    queryKey: ['movies', id],
    queryFn: () => fetchMoviesDetails(id)
  })


  const { mutate } = useMutation({
    mutationFn: () => addToWatchList(id),
    onSuccess: () => {
      client.invalidateQueries(['watchlist']);
    }
  })



  if (isLoading) {
    return <ActivityIndicator />
  }
  if (error) {
    return <Text>Error fetching movies</Text>
  }

  return (
    <View>
      <Stack.Screen options={{ title: data.title }} />
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/` + data.backdrop_path }}
        style={{
          width: '100%',
          height: 300
        }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 25, fontWeight: '500', marginVertical: 10 }}>{data.title}</Text>

        <Pressable
          onPress={() => mutate()}
          style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginVertical: 5 }}
        >
          <FontAwesome name="bookmark-o" size={24} color="black" />
          <Text>add to watchList</Text>
        </Pressable>

        <Text style={{ fontSize: 16 }}>{data.overview}</Text>

      </View>
    </View>
  )
}

export default MoviesDetails

const styles = StyleSheet.create({})