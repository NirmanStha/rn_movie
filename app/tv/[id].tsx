import React from "react";
import { Button, Image, ScrollView, StyleSheet, Text } from "react-native";

const mockTvShow = {
  id: "1",
  title: "Mock TV Show",
  poster: "https://via.placeholder.com/300x450.png?text=TV+Show+Poster",
  description:
    "This is a mock description of the TV show. It provides an overview of the plot, main characters, and other interesting details.",
  genres: ["Drama", "Thriller"],
  rating: 8.5,
  seasons: 3,
  episodes: 24,
};

export default function TvShowScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: mockTvShow.poster }} style={styles.poster} />
      <Text style={styles.title}>{mockTvShow.title}</Text>
      <Text style={styles.genres}>{mockTvShow.genres.join(", ")}</Text>
      <Text style={styles.rating}>⭐ {mockTvShow.rating}/10</Text>
      <Text style={styles.details}>
        {mockTvShow.seasons} Seasons • {mockTvShow.episodes} Episodes
      </Text>
      <Text style={styles.description}>{mockTvShow.description}</Text>
      <Button title="Watch Now" onPress={() => {}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  poster: {
    width: 300,
    height: 450,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  genres: {
    fontSize: 16,
    color: "#888",
    marginBottom: 4,
  },
  rating: {
    fontSize: 18,
    marginBottom: 4,
  },
  details: {
    fontSize: 16,
    marginBottom: 12,
    color: "#555",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});
