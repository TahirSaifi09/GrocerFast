import { Stack } from "expo-router";
import Header from "./components/Header";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View>
      <Header />
      <Stack />
    </View>
  );
}
