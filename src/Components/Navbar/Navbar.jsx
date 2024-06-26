// import React, { useState } from "react";
// import "./Navbar.css"; // Import your CSS file for styling
// import { Link } from "react-router-dom";
// import logo from "../assests/finbarNavbar.jpg";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <a href="/">
//             <img src={logo} alt="Logo" className="navbar-logo-image" />
//           </a>
//         </div>
//         <div className={`navbar-links ${isOpen ? "active" : ""}`}>
//           <ul>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <a href="/services">Services</a>
//             </li>
//             <li>
//               <a href="/contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-toggle" onClick={toggleMenu}>
//           <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logo from "../assests/finbarNavbar.jpg"; // Adjust the path to your logo image

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div href="/" style={{ color: "red" }}>
          Finbarrsax
        </div>{" "}
        {/* <img src={logo} alt="Logo" className="navbar-logo-image" /> */}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const myStyle = {
    color: "white",
    fontSize: "25px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "black" }}>
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
            className="Typography"
            style={myStyle}
          >
            <a className="fin" href="/">
              Finbarrsax
            </a>{" "}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                component={Link}
                to={item.path}
                key={item.name}
                sx={{ color: "#fff" }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        {/* Main content goes here */}
      </Box>
    </Box>
  );
}
