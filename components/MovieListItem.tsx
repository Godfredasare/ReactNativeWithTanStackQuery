import { Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';


const MovieListItem = ({ movie }) => {
    return (
        <Link href={`/${movie.id}`} asChild>

            <Pressable style={styles.main}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500/` + movie.poster_path }}
                    style={{
                        width: '100%',
                        aspectRatio: 3 / 5,
                        borderRadius: 10

                    }}
                />
                {/* <Text>{movie.title}</Text> */}
            </Pressable>
        </Link>
    )
}

export default MovieListItem

const styles = StyleSheet.create({
    main: {
        flex: 1,
    }
})