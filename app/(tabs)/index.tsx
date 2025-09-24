import Card from "@/src/components/Card";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const movies = [
  {
    id: "1",
    title: "Inception",
    posterUrl: "https://m.media-amazon.com/images/I/51s+4G+3G-L._AC_SY445_.jpg",
    rating: 8.8,
  },
  {
    id: "2",
    title: "The Dark Knight",
    posterUrl: "https://m.media-amazon.com/images/I/51k0qaipG+L._AC_SY445_.jpg",
    rating: 9.0,
  },
  {
    id: "3",
    title: "Interstellar",
    posterUrl: "https://m.media-amazon.com/images/I/71n58r3cwkL._AC_SY679_.jpg",
    rating: 8.6,
  },
];

export default function Index() {
  return (
    <SafeAreaView className="  bg-blue-500 flex-1 px-4">
      <View className="  discover ">
        <Text className="text-white text-lg font-bold ">Discover</Text>
        <View className="  ">
          <Text className="text-white text-base">
            Discover new movies and shows
          </Text>
        </View>
        <View className="h-56 bg-black/20">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={movies}
            renderItem={({ item }: { item: any }) => (
              <Card
                title={item.title}
                posterUrl={item.posterUrl}
                rating={item.rating}
              />
            )}
            keyExtractor={(item: any) => item.id}
            contentContainerStyle={{
              paddingHorizontal: 8,
              alignItems: "center",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
