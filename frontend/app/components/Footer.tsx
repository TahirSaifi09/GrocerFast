import { StyleSheet, View, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Entypo name="home" size={28} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="bars" size={28} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <EvilIcons name="heart" size={32} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="truck-delivery" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 50,
    elevation: 5, // android shadow
  },
});