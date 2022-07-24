import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../firebase/firebase";
import { setLogout } from "../redux/reducers/auth";
import { success } from "../helper/Toasts";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    navigate("/login");
    console.log(user);
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogout = async () => {
    await logout(navigate, success);
    dispatch(setLogout());
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <HomeIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {!user ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={handleLogin}>
                    Login
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={handleRegister}>
                    Register
                  </Typography>
                </MenuItem>
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={handleLogout}>
                    Logout
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    {user.displayName === null ? "John Doe" : user.displayName}
                  </Typography>
                </MenuItem>
              </Menu>
            )}
          </Box>
          <HomeIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          {!user ? (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Button
                onClick={handleLogin}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Login
              </Button>
              <Button
                onClick={handleRegister}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Register
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                flexDirection: "row-reverse",
                gap: 3,
                alignItems: "center",
              }}
            >
              <Typography
                textAlign="center"
                onClick={handleLogout}
                sx={{ cursor: "pointer", fontSize: "1.7rem" }}
              >
                Logout
              </Typography>
              <Typography textAlign="center">
                {user.displayName === null ? "John Doe" : user.displayName}
              </Typography>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
