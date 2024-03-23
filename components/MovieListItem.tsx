import { Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export interface results {
    id: number,
    poster_path?: string
}

export interface MoviesProps{
    movie: results
}


const MovieListItem = ({ movie } : MoviesProps) => {
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