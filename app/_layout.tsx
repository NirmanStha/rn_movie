import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1">
          <Stack
            screenOptions={{
              headerShown: true,
              headerStyle: { backgroundColor: "red" },
              headerTransparent: false,
            }}
          >
            <Stack.Screen name="(tabs)" options={{ title: "Home" }} />
            <Stack.Screen
              name="movie/[id]"
              options={({
                route,
              }: {
                route: { params?: { title?: string } };
              }) => ({
                title: route?.params?.title ?? "Movie",
              })}
            />
            <Stack.Screen
              name="tv/[id]"
              options={({
                route,
              }: {
                route: { params?: { title?: string } };
              }) => ({
                title: route?.params?.title ?? "TV Show",
              })}
            />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar barStyle={"default"} translucent={false} />
    </>
  );
}
