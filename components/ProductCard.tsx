import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Product } from "@/constants/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <View style={styles.card}>
      {/* Product Image */}
      <Image source={{ uri: product.image }} style={styles.image} />

      {/* Product Name */}
      <Text style={styles.name}>{product.name}</Text>

      {/* Product Code */}
      {product.code && <Text style={styles.code}>{product.code}</Text>}

      {/* Price Section */}
      <View style={styles.priceContainer}>
        {product.discountedPrice ? (
          <>
            {/* Original Price with Strikethrough */}
            <Text style={styles.originalPrice}>{product.price}</Text>
            {/* Discounted Price */}
            <Text style={styles.discountedPrice}>
              {product.discountedPrice}
            </Text>
          </>
        ) : (
          <Text style={styles.price}>{product.price}</Text>
        )}
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    alignItems: "center",
    width: 160,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#333",
  },
  code: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
    textAlign: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  originalPrice: {
    fontSize: 12,
    color: "#888",
    textDecorationLine: "line-through",
    marginRight: 5,
  },
  discountedPrice: {
    fontSize: 14,
    color: "#FF0000", // Red for discounted price
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#333", // Default black for price
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#FF9800",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default ProductCard;
