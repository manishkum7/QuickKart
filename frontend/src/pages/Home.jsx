import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button
} from "@mui/material";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/cart/add",
        { productId, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Product added to cart 🛒");
    } catch (error) {
      alert("Please login first to add to cart");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Products
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {products.length === 0 ? (
          <Typography>No products found</Typography>
        ) : (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
              <Card
                sx={{
                  width: 260,
                  height: 420, // slightly taller to fit description & stock
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  mx: "auto",
                  boxShadow: 3,
                  borderRadius: 2
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    height: 180,
                    objectFit: "cover",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8
                  }}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{product.name}</Typography>

                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {product.description}
                  </Typography>

                  {/* Price */}
                  <Typography color="text.secondary">₹{product.price}</Typography>

                  {/* In Stock */}
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: product.countInStock > 0 ? "green" : "red",
                      mt: 0.5
                    }}
                  >
                    {product.countInStock > 0
                      ? `In Stock: ${product.countInStock}`
                      : "Out of Stock"}
                  </Typography>
                </CardContent>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ m: 1 }}
                  onClick={() => addToCart(product._id)}
                >
                  Add to Cart
                </Button>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default Home;
