import { Stack } from "expo-router";
import Header from "./components/Header";
import { View } from "react-native";
import Footer from "./components/Footer";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
      <Footer />
    </View>
  );
}
