import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Entypo name="home" size={40} color="black" />
            <EvilIcons name="heart" size={40} color="black" />
            <MaterialCommunityIcons name="truck-delivery" size={40} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: "70%",
        flexDirection: "row",
        justifyContent:"space-between",
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius:100,
        padding:8,
        backgroundColor: "gray",
        transform: [{ translateY: -30 }],
        gap: 4,

    }
})