import error from "../assets/404.jpeg";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img style={{ width: "75%" }} src={error} alt="404" />
      <Button
        variant="outlined"
        color="error"
        onClick={() => navigate("/")}
        sx={{ width: "50%" }}
      >
        Home
      </Button>
    </Container>
  );
};

export default NotFound;
