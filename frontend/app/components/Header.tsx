import { View, Text, StyleSheet, TextInput, Dimensions, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const sliderImages = [
  { id: 1, uri: require("../../assets/lettuce.jpg"), name: "Lettuce" },
  { id: 2, uri: require("../../assets/Lady's Finger.jpg"), name: "Lady's Finger" },
  { id: 3, uri: require("../../assets/cauliflower.jpg"), name: "Cauliflower" },
  { id: 4, uri: require("../../assets/radish.jpg"), name: "Radish" },
  { id: 5, uri: require("../../assets/Cucumber.jpg"), name: "Cucumber" },
  { id: 6, uri: require("../../assets/Lady's Finger.jpg"), name: "Lady's Finger" },
  { id: 7, uri: require("../../assets/cauliflower.jpg"), name: "Cauliflower" },
];

export default function Header() {
  const slidesToShow = 4.5;
  const slideWidth = width / slidesToShow - 20;

  return (
    <LinearGradient
      colors={["#1d3824", "#1d3824"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBox}
    >
      <Text style={styles.title}>GrocerFast</Text>

      {/* Search Bar */}
      <View style={styles.search}>
        <TextInput
          placeholder="Search for groceries..."
          placeholderTextColor="#888"
          style={styles.input}
        />
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
      </View>
      <View style={{width:"100%", flexDirection:"column", justifyContent:"center", gap:10, transform:[{translateY:30}]}}>
        <Text style={{ color: "white", textAlign:"center", }}>Current Location</Text>
        <Text style={styles.text}>New Delhi, India 📍</Text>
      </View>
      
      {/* Slider */}
      <View style={styles.sliderContainer}>
        <Carousel
          width={slideWidth}
          height={slideWidth + 10}
          data={sliderImages}
          loop
          autoPlay
          autoPlayInterval={2500}
          scrollAnimationDuration={800}
          pagingEnabled={false}
          style={{ width: 300, height: 90, alignItems: "center", flexDirection: "row", justifyContent: "center", transform: [{ translateY: 50 }], }}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 0, }}>
              <View style={styles.imageWrapper}>
                <Image source={item.uri} style={styles.image} resizeMode="cover" />
              </View>
              <Text style={{ fontSize: 10, textAlign: "center" }}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBox: {
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    width: "100%",
    paddingTop: 45,
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  title: {
    width: "90%",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
  },
  search: {
    height: 50,
    width: "90%",
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 100,
    backgroundColor: "white",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  sliderContainer: {
    width: "100%",
    alignItems: "center",
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 100,
    flexDirection: "row",
    gap: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: "90%",
    borderRadius: 100,
  },
  text: {
    color: "#a3b67dff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
