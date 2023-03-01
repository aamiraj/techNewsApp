import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import { ListItemButton, ListItemText } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  { name: "Home", to: "/" },
  { name: "History", to: "/history" },
  { name: "Dashboard", to: "/dashboard" },
];

const Main = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Tech News
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <Link to={item.to}>{item.name}</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{ zIndex: "10"}}>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav" position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Tech News
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, i) => (
                <Link
                  to={item.to}
                  key={i}
                  style={{
                    color: "#fff",
                    all: "unset",
                    cursor: "pointer",
                    padding: "0px 8px",
                    font: "inherit",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
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
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ width: "100%", p: 3 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default Main;
