import axios from "axios";
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from "@mui/material";

export default function ProductCard({ product }) {

  const addToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/cart/add",
        { productId: product._id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert("Product added to cart 🛒");
    } catch (error) {
      console.log(error);
      alert("Failed to add to cart");
    }
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image || "https://via.placeholder.com/300"}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="text.secondary">₹{product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={addToCart}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
