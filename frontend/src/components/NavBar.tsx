import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={() => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:  "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
            })}
          >
            <Typography variant="h6" component="div">
              <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
                Connectify
              </Link>
            </Typography>
            <Box sx={{ display: "flex", gap: 5 }}>
              <Typography variant="h6" component="div">
              <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
                Users
              </Link>
              </Typography>
              <Typography variant="h6" component="div">
              <Link to={"/teams"} style={{ color: "white", textDecoration: "none" }}>
                Teams
              </Link>
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;
