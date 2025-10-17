import { Text, View } from "react-native";
import Header from "./components/Header";
import MightNeed from "./components/home/might-need";

export default function Index() {
  return (
    <View>
      <Header />
      <MightNeed />
    </View>
  );
}
