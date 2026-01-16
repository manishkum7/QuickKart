import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "inherit" }}>
          QuickKart
        </Typography>

        <Box>
          <Button component={Link} to="/" color="inherit">
            Products
          </Button>
          {token ? (
            <>
              <Button component={Link} to="/cart" color="inherit">
                Cart
              </Button>
              <Button component={Link} to="/orders" color="inherit">
                Orders
              </Button>
              <Button onClick={handleLogout} color="inherit">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
              <Button component={Link} to="/register" color="inherit">
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
