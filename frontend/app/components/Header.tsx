import { View, Text, StyleSheet, TextInput, Dimensions, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const sliderImages = [
  { id: 1, uri: require("../../assets/images.jpg") },
  { id: 2, uri: require("../../assets/images-1.jpg") },
  { id: 3, uri: require("../../assets/images-2.jpg") },
  { id: 4, uri: require("../../assets/images-3.jpg") },
  { id: 5, uri: require("../../assets/images-4.jpg") },
];

export default function Header() {
  const slidesToShow = 5;
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
          style={{width:300, alignItems:"center", flexDirection:"row", justifyContent:"center",}}
          renderItem={({ item }) => (
            <View style={styles.imageWrapper}>
              <Image source={item.uri} style={styles.image} resizeMode="cover" />
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
    paddingVertical: 20,
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
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  search: {
    height: 50,
    width: "90%",
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 100,
    backgroundColor: "white",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  sliderContainer: {
    width: "100%",
    alignItems: "center",
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 100, // 👈 circular shape
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
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 15,
  },
});
