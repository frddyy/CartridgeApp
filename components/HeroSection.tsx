import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Menu, Button } from "react-native-paper";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("3-step");
  const [brandMenuVisible, setBrandMenuVisible] = useState(false);
  const [seriesMenuVisible, setSeriesMenuVisible] = useState(false);
  const [modelMenuVisible, setModelMenuVisible] = useState(false);

  const [printerBrand, setPrinterBrand] = useState("1. Printer Brand");
  const [printerSeries, setPrinterSeries] = useState("2. Printer Series");
  const [printerModel, setPrinterModel] = useState("3. Printer Model");

  const brands = ["HP", "Canon", "Epson"];
  const series = ["Series 1000", "Series 2000", "Series 3000"];
  const models = ["Model A", "Model B", "Model C"];

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1600832331197-ad575931911b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>
          FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
        </Text>

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "3-step" && styles.activeTab]}
            onPress={() => setActiveTab("3-step")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "3-step" && styles.activeTabText,
              ]}
            >
              3-Step Easy Search®
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "serial" && styles.activeTab]}
            onPress={() => setActiveTab("serial")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "serial" && styles.activeTabText,
              ]}
            >
              Search by Serial Number
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search Container */}
        <View style={styles.searchContainer}>
          {activeTab === "3-step" ? (
            <>
              {/* Printer Brand Dropdown */}
              <Menu
                visible={brandMenuVisible}
                onDismiss={() => setBrandMenuVisible(false)}
                anchor={
                  <Button
                    mode="outlined"
                    onPress={() => setBrandMenuVisible(true)}
                    style={styles.dropdownButton}
                  >
                    {printerBrand}
                  </Button>
                }
              >
                {brands.map((brand, index) => (
                  <Menu.Item
                    key={index}
                    onPress={() => {
                      setPrinterBrand(brand);
                      setBrandMenuVisible(false);
                    }}
                    title={brand}
                  />
                ))}
              </Menu>

              {/* Printer Series Dropdown */}
              <Menu
                visible={seriesMenuVisible}
                onDismiss={() => setSeriesMenuVisible(false)}
                anchor={
                  <Button
                    mode="outlined"
                    onPress={() => setSeriesMenuVisible(true)}
                    style={styles.dropdownButton}
                  >
                    {printerSeries}
                  </Button>
                }
              >
                {series.map((series, index) => (
                  <Menu.Item
                    key={index}
                    onPress={() => {
                      setPrinterSeries(series);
                      setSeriesMenuVisible(false);
                    }}
                    title={series}
                  />
                ))}
              </Menu>

              {/* Printer Model Dropdown */}
              <Menu
                visible={modelMenuVisible}
                onDismiss={() => setModelMenuVisible(false)}
                anchor={
                  <Button
                    mode="outlined"
                    onPress={() => setModelMenuVisible(true)}
                    style={styles.dropdownButton}
                  >
                    {printerModel}
                  </Button>
                }
              >
                {models.map((model, index) => (
                  <Menu.Item
                    key={index}
                    onPress={() => {
                      setPrinterModel(model);
                      setModelMenuVisible(false);
                    }}
                    title={model}
                  />
                ))}
              </Menu>
            </>
          ) : (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Serial Number"
                placeholderTextColor="#999"
              />
            </View>
          )}

          {/* Find Button */}
          <TouchableOpacity style={styles.findButton}>
            <Text style={styles.findButtonText}>FIND CARTRIDGES</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 400,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f8f9fa",
    width: "90%",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tab: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  activeTab: {
    backgroundColor: "#007BFF",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 60,
  },
  tabText: {
    color: "#555",
    fontWeight: "bold",
    textAlign: "center",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  searchContainer: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  dropdownButton: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 5,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#f8f8f8",
  },
  findButton: {
    backgroundColor: "#FF9800",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  findButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HeroSection;
