import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const mockMovie = {
  id: "1",
  title: "Inception",
  poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
  releaseDate: "2010-07-16",
  rating: 8.8,
  overview:
    "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
  genres: ["Action", "Science Fiction", "Adventure"],
};

const MovieDetail = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: mockMovie.poster }} style={styles.poster} />
      <Text style={styles.title}>{mockMovie.title}</Text>
      <Text style={styles.subtitle}>
        {mockMovie.releaseDate} • {mockMovie.genres.join(", ")}
      </Text>
      <Text style={styles.rating}>⭐ {mockMovie.rating}</Text>
      <Text style={styles.overview}>{mockMovie.overview}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Add to Favorites" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  poster: {
    width: 220,
    height: 330,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },
  rating: {
    fontSize: 18,
    color: "#f5a623",
    marginBottom: 16,
  },
  overview: {
    fontSize: 16,
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
});

export default MovieDetail;
