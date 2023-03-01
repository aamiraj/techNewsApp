import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AddIcon from '@mui/icons-material/Add';
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menus = [{text:"List of News", icon:<FormatListNumberedIcon/>, to: "/dashboard" }, {text:"Add A News", icon:<AddIcon/>, to: "/dashboard/addNews" }];
  const drawer = (
    <div>
      <Toolbar />
      <List>
        {menus.map((menu, index) => (
          <Link to={menu.to} key={index} style={{all:"unset", cursor: "pointer"}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItemButton>
          </ListItem></Link>
          
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, background: "transparent" }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
              background: "transparent",
              border: "none"
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "transparent",
              border: "none"
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet/>
      </Box>
    </Box>
  );
}

export default Dashboard;
