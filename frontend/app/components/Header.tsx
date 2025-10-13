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
      <View style={styles.search}>
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
    borderBottomLeftRadius: 100 * 0.75,
    borderBottomRightRadius: 100 * 0.75,
    marginTop:-5,
    padding: 20,
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: "100%",
    width: 180,
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
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 100,
    backgroundColor: "white",
    flexDirection: "row",
    gap: 5,
    alignItems: "center"
  }
});
