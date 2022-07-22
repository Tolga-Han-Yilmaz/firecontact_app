import { useState } from "react";
import { googleLogin, login } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

import { Container, TextField, Button, ImageListItem } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password, navigate);
  };

  const handleGoogle = async () => {
    await googleLogin(navigate);
  };

  return (
    <Container sx={{ display: "flex", height: "88vh" }}>
      <Container maxWidth="sm" sx={{ display: { xs: "none", md: "flex" } }}>
        <ImageListItem>
          <img src="https://picsum.photos/1600/900" alt="picture" key={4} />
        </ImageListItem>
      </Container>
      <Container
        maxWidth="sm"
        sx={{
          mt: 10,
        }}
      >
        <form sx={{ width: { xs: "60%", md: "80%" } }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your Email"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            margin="normal"
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your Password"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "100%", mt: 3 }}
            disabled={!password || !email}
          >
            Login
          </Button>
        </form>
        <Container sx={{ width: { xs: "60%", md: "80%" }, mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "100%" }}
            onClick={handleGoogle}
          >
            <GoogleIcon /> OO
            <GoogleIcon />
            LE
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Login;
