/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { register } from "../firebase/firebase";
import { Container, TextField, Button, ImageListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { wrong, success } from "../helper/Toasts";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(email, password, navigate, wrong, success);
  };
  return (
    <Container sx={{ display: "flex", height: "88vh" }}>
      <Container maxWidth="sm" sx={{ display: { xs: "none", md: "flex" } }}>
        <ImageListItem>
          <img src="https://picsum.photos/1600/900" alt="picture" key={4} />
        </ImageListItem>
      </Container>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <form sx={{ width: { xs: "60%", md: "80%" } }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            id="name"
            label="name"
            type="text"
            placeholder="Enter your Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            margin="normal"
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            margin="normal"
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            disabled={!name || !password || !email}
            type="submit"
            variant="contained"
            sx={{ width: "100%", mt: 3 }}
          >
            Register
          </Button>
        </form>
      </Container>
    </Container>
  );
};

export default Register;
