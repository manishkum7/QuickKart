import { useState } from "react";
import axios from "axios";
import { Button, TextField, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      alert("Registered Successfully, please login");
      console.log(res.data);

      navigate("/login"); 

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
          Register
        </Button>
      </form>
    </Container>
  );
}

export default Register;
