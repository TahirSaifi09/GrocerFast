import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function CategorySlider() {

    const { width } = Dimensions.get("window");


    const sliderImages = [
        { id: 1, uri: require("../../../assets/lettuce.jpg"), name: "Lettuce" },
        { id: 2, uri: require("../../../assets/Lady's Finger.jpg"), name: "Lady's Finger" },
        { id: 3, uri: require("../../../assets/cauliflower.jpg"), name: "Cauliflower" },
        { id: 4, uri: require("../../../assets/radish.jpg"), name: "Radish" },
        { id: 5, uri: require("../../../assets/Cucumber.jpg"), name: "Cucumber" },
        { id: 6, uri: require("../../../assets/Lady's Finger.jpg"), name: "Lady's Finger" },
        { id: 7, uri: require("../../../assets/cauliflower.jpg"), name: "Cauliflower" },
    ];

      const slidesToShow = 4.5;
  const slideWidth = width / slidesToShow;
  
    return (
        
        <View style={styles.sliderContainer}>
            <FlatList
                data={sliderImages}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingHorizontal: 10,  }}
                renderItem={({ item }) => (
                    <View style={{ width: slideWidth, alignItems: "center", }}>
                        <View style={styles.imageWrapper}>
                            <Image source={item.uri} style={styles.image} resizeMode="cover" />
                        </View>
                        <Text style={{ fontSize: 10, textAlign: "center", color: "#fff" }}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        width: "100%",
        alignItems: "center",
        transform:[{translateY:-50}]
    },
    imageWrapper: {
    width: 70,
    height: 70,
    borderRadius: 100,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginBottom: 6,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
})