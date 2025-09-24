import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen
        name="movies"
        options={{ headerShown: false, title: "Movies" }}
      />
      <Tabs.Screen
        name="tv"
        options={{ headerShown: false, title: "TV Shows" }}
      />
      <Tabs.Screen
        name="search"
        options={{ headerShown: false, title: "Search" }}
      />
    </Tabs>
  );
}
