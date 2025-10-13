import { View, Text, StyleSheet, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
export default function Header() {
  return (
    <LinearGradient
      colors={["#1d3824", "#1d3824"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBox}>
      <Text style={styles.title} >GrocerFast</Text>
      <View >
        <TextInput
          placeholder="Search for groceries..."
          placeholderTextColor="#888"
          style={styles.input}
        />
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBox: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 100,      // rounded corners
    borderBottomRightRadius: 80,
    padding: 20,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,          // shadow on Android
    shadowColor: "#000",   // shadow on iOS
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
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
});
