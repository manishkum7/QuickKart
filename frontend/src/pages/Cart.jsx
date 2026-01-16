import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/cart", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setCart(res.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  const placeOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/orders/create",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Order placed successfully 🎉");
      navigate("/orders");
    } catch (error) {
      alert("Failed to place order");
    }
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>
        My Cart 🛒
      </Typography>

      {!cart || cart.items.length === 0 ? (
        <Typography>No items in cart</Typography>
      ) : (
        <>
          {cart.items.map((item) => (
            <Card
              key={item._id}
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                p: 1
              }}
            >
              {/* Product Image */}
              <CardMedia
                component="img"
                image={item.product.image}
                alt={item.product.name}
                sx={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  borderRadius: 1
                }}
              />

              {/* Product Info */}
              <Box sx={{ ml: 2 }}>
                <CardContent sx={{ padding: 0 }}>
                  <Typography variant="h6">
                    {item.product.name}
                  </Typography>
                  <Typography color="text.secondary">
                    Price: ₹{item.product.price}
                  </Typography>
                  <Typography color="text.secondary">
                    Quantity: {item.quantity}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          ))}

          {/* Place Order Button */}
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 3 }}
            onClick={placeOrder}
          >
            Place Order
          </Button>
        </>
      )}
    </Container>
  );
}

export default Cart;
