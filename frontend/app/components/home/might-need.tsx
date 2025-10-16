import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function MightNeed() {
    const data = [
        {
            id: 1,
            image: require("../../../assets/cauliflower.jpg"),
            name: "Banana",
            quantity: "",
            price: 150,
        },
        {
            id: 2,
            image: require("../../../assets/lettuce.jpg"),
            name: "Banana",
            quantity: "",
            price: 150,
        },
        {
            id: 3,
            image: require("../../../assets/lettuce.jpg"),
            name: "Banana",
            quantity: "",
            price: 150,
        },
    ]
    return (
        <View style={{ padding: 16, }}>
            <View style={styles.heading}>
                <Text style={{ fontSize: 19, fontWeight: "700", color: "#1d3824" }}>You might need</Text>
                <Text style={{ fontSize: 19, fontWeight: "600", color: "#cc8a28ff" }}>See more</Text>
            </View>
            <FlatList
                data={data}
                numColumns={2}
                // columnWrapperStyle={{ justifyContent: "space-between" }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.sliderbar}>
                        <Image source={item.image} style={{ width: 100, height: 50 }} />
                        <Text>{item.name}</Text>
                    </View>
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    sliderbar: {
        height: 70,
        width: "50%",
    }
});