import { Stack } from "expo-router";
import Header from "./components/Header";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
