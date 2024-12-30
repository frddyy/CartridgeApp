import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Navbar = () => {
  const menuItems = [
    "HOME",
    "INK CARTRIDGES",
    "TONER CARTRIDGES",
    "CONTACT US",
    "LOGIN / REGISTER",
  ];

  return (
    <View style={styles.navbar}>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.navItemContainer}>
          <Text style={styles.navItem}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#007BFF", // Warna biru navbar
        paddingVertical: 10,
    margin: 10
  },
  navItemContainer: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
  },
  navItem: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "center",
    margin: 2,
  },
});

export default Navbar;
