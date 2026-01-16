import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box
} from "@mui/material";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/orders/my-orders", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>
        My Orders 📦
      </Typography>

      {orders.length === 0 ? (
        <Typography>No orders found</Typography>
      ) : (
        orders.map((order) => (
          <Card key={order._id} sx={{ mt: 2, p: 2 }}>
            <Typography variant="h6">
              Order ID: {order._id}
            </Typography>
            <Typography>
              Total Amount: ₹{order.totalAmount}
            </Typography>

            {order.items.map((item) => (
              <Box
                key={item._id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 1
                }}
              >
                <CardMedia
                  component="img"
                  image={item.product.image}
                  alt={item.product.name}
                  sx={{
                    width: 60,
                    height: 60,
                    objectFit: "cover",
                    borderRadius: 1,
                    mr: 2
                  }}
                />
                <CardContent sx={{ padding: 0 }}>
                  <Typography>{item.product.name}</Typography>
                  <Typography color="text.secondary">
                    ₹{item.product.price} × {item.quantity}
                  </Typography>
                </CardContent>
              </Box>
            ))}
          </Card>
        ))
      )}
    </Container>
  );
}

export default Orders;
