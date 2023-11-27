import React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
  Card,
  CardContent,
  Avatar,
  Button,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";

import Footer from "./Footer";

// AppBar styles
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// User profile card styles
const UserProfileCard = styled(Card)({
  marginTop: "-50px",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "500px",
  borderRadius: "20px",
  position: "relative",
  zIndex: 1,
});

export default function PageLayout() {
  // State and handlers for menu items

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            BlissBazaar
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            // Add onClick handler to open menu
          >
            <MoreIcon />
          </IconButton>
          <IconButton size="large" aria-label="wallet">
            <WalletIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Profile section */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
        <UserProfileCard>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ width: 90, height: 90, mb: 2 }}
                src="/images/avatar.jpg"
                alt="User Name"
              />
              <Typography variant="h5" gutterBottom>
                Anis Jemail
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                @Anis
              </Typography>
              <Typography variant="body2" sx={{ px: 3, textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
                consectetur purus amet...
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Edit Profile
              </Button>
            </Box>
          </CardContent>
        </UserProfileCard>
      </Container>

      {/* Footer */}

      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Footer />
      </Container>

      {/* End footer */}
    </>
  );
}
