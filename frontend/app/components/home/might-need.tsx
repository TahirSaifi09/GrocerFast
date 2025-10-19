import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function MightNeed() {
  const data = [
    {
      id: 1,
      image: require("../../../assets/cauliflower.jpg"),
      name: "Cauliflower",
      size: "1 kg.",
      price: 80,
    },
    {
      id: 2,
      image: require("../../../assets/lettuce.jpg"),
      name: "Lettuce",
      size: "500 gm.",
      price: 60,
    },
    {
      id: 3,
      image: require("../../../assets/Tomato-red.png"),
      name: "Tomato",
      size: "500 gm.",
      price: 40,
    },
    {
      id: 4,
      image: require("../../../assets/potato.jpg"),
      name: "Potato",
      size: "1 kg.",
      price: 90,
    },
    {
      id: 5,
      image: require("../../../assets/onion.jpg"),
      name: "Onion",
      size: "500 gm.",
      price: 40,
    },
  ];

  return (
    <View style={{ padding: 16, width: "100%", marginTop:40}}>
      <View style={styles.heading}>
        <Text style={styles.title}>You might need</Text>
        <Link href="/products" style={styles.link}>
        See more
        </Link>
      </View>

      <FlatList
        data={data}
        horizontal  // 👈 Makes it scroll like a slider
        showsHorizontalScrollIndicator={false} // 👈 Hides scroll bar
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={{color:"gray"}}>{item.size}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingRight: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: "700",
    color: "#1d3824",
  },
  link: {
    fontSize: 19,
    fontWeight: "600",
    color: "#cc8a28ff",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    marginRight: 12,
    width: 105, // controls item width
    // elevation: 3,
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
  },
  image: {
    width: 100,
    height: 70,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    color: "#1d3824",
    fontWeight: "500",
  },
});
