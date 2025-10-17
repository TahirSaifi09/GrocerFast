import { Text, View } from "react-native";
import Header from "./components/Header";
import MightNeed from "./components/home/might-need";
import CategorySlider from "./components/home/catogery-slider";

export default function Index() {
  return (
    <View>
      <Header />
      {/* <CategorySlider /> */}
      <MightNeed />
    </View>
  );
}
