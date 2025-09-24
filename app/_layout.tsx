import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" translucent={false} />
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: "red" },
          headerTransparent: false,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="(tabs)" options={{ title: "Chrome" }} />
        <Stack.Screen
          name="movie/[id]"
          options={({ route }: { route: { params?: { title?: string } } }) => ({
            title: route?.params?.title ?? "Movie",
          })}
        />
        <Stack.Screen
          name="tv/[id]"
          options={({ route }: { route: { params?: { title?: string } } }) => ({
            title: route?.params?.title ?? "TV Show",
          })}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
