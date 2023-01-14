import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Brightness4, Brightness7, SportsEsports } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { StyledItemButton, StyledListItemButton, StyledNavbar } from "../style/styles";

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    text: "Home",
    to: "/",
  },
  {
    id: 2,
    text: "Genres",
    to: "/genres",
  },
  {
    id: 3,
    text: "Platforms",
    to: "/platforms",
  },
];

function Navbar(props) {
  const { window, mode, handle } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const modeString = mode.toString();
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography sx={{ my: 2, fontSize: "1.3rem", fontWeight: "bold", fontFamily: "Chivo Mono" }}>M-GAMES</Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding component={Link} to={item.to}>
            <StyledListItemButton mode={modeString} className={item.to === location.pathname ? "active" : ""}>
              <ListItemText primary={item.text} />
            </StyledListItemButton>
          </ListItem>
        ))}
        <IconButton onClick={() => handle()}>{mode ? <Brightness4 /> : <Brightness7 />}</IconButton>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <StyledNavbar position="static" mode={modeString}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <SportsEsports sx={{ marginRight: "10px", display: { sm: "none" } }} />
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              fontFamily: "Chivo Mono",
              display: { sm: "none" },
            }}
          >
            M-GAMES
          </Typography>
          <SportsEsports sx={{ marginRight: "10px", display: { xs: "none", sm: "block" } }} />
          <Typography
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontSize: "1.3rem",
              fontWeight: "bold",
              fontFamily: "Chivo Mono",
            }}
          >
            M-GAMES
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center", alignItems: "center" }}>
            {navItems.map((item) => (
              <StyledItemButton key={item.id} component={Link} to={item.to} mode={modeString} mx={2} className={item.to === location.pathname ? "active" : ""}>
                {item.text}
              </StyledItemButton>
            ))}
            <IconButton onClick={() => handle()}>{mode ? <Brightness4 /> : <Brightness7 />}</IconButton>
          </Box>
        </Toolbar>
      </StyledNavbar>
      <Box>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </div>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
