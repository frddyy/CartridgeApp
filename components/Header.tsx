import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <>
      {/* Informasi tambahan di atas header */}
      <View style={styles.infoBar}>
        <View style={styles.leftInfo}>
          <Text style={styles.infoText}>Franchise Opportunities</Text>
          <Text style={styles.infoText}>Help</Text>
          <Text style={styles.infoText}>Feedback</Text>
        </View>
        <View style={styles.rightInfo}>
          <Text style={styles.infoText}>hello@email.com</Text>
          <Text style={styles.infoText}>0800 022 2 022</Text>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <MaterialCommunityIcons
            name="crown"
            size={24}
            color="#FF9800" 
          />
          <Text style={styles.logo}>CARTRIDGE KINGS</Text>
        </View>

        {/* Search bar */}
        <TextInput
          style={styles.search}
          placeholder="SEARCH"
          placeholderTextColor="#aaa"
        />

        {/* Cart Button */}
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>CART (1)</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  infoBar: {
    flexDirection: "row",
    flexWrap: "wrap", 
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#f8f8f8",
  },
  leftInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    fontSize: 12,
    color: "#555",
    marginHorizontal: 8,
    marginBottom: 2, 
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 5, 
  },
  search: {
    flex: 1,
    marginHorizontal: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  cartButton: {
    backgroundColor: "#ff9800",
    padding: 10,
    borderRadius: 5,
  },
  cartText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Header;
