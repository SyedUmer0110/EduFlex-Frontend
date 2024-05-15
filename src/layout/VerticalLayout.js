import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IoIdCardOutline } from "react-icons/io5";
import { IoMenuSharp, IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { FaUserCheck } from "react-icons/fa6";
import { BsFileRuled } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { MdLogout } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";

const VerticalLayout = ({ children }) => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const [pageTitle, setPageTitle] = useState("Dashboard");

  useEffect(() => {
    if (window.location.pathname === "/") {
      setPageTitle("Dashboard");
    } else if (window.location.pathname === "/classrooms") {
      setPageTitle("Classrooms");
    } else if (window.location.pathname === "/attendance") {
      setPageTitle("Attendance");
    } else if (window.location.pathname === "/marks") {
      setPageTitle("Marks");
    } else if (window.location.pathname === "/jobs") {
      setPageTitle("Jobs");
    }else if(window.location.pathname === "/scholarships"){
      setPageTitle("Scholarships");
    }else if(window.location.pathname === "/updates"){
      setPageTitle("Society Updates");
    }else if(window.location.pathname === "/announcements"){
        setPageTitle("General Announcements");
    }

  }, [window.location.pathname]);

  const handleDrawerClose = () => {
    setCollapsed(!collapsed);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    
    // localStorage.clear()
    navigate("/signin");
  };

  return (
    <div className="v_layout">
      <AppBar
        position="fixed"
        className="layout_header"
        sx={{
          width: !collapsed ? "calc(100% - 240px)" : "calc(100% - 80px)",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, color: "#000000" }}
                onClick={handleDrawerClose}
              >
                <IoMenuSharp />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "#000000" }}
              >
                {pageTitle}
              </Typography>
            </Box>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "#000000" }}
              onClick={logoutHandler}
            >
              <MdLogout />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={collapsed}
        className="layout_drawer"
        sx={{
          width: !collapsed ? "240px" : "80px",
          "& .MuiDrawer-paper": {
            width: !collapsed ? "240px" : "80px",
          },
        }}
      >
        <Box>
          <IconButton>{!collapsed ? "" : ""}</IconButton>
        </Box>

        <List>
          {[
            { name: "Dashboard", route: "/", icon: <RxDashboard /> },
            {
              name: "Classrooms",
              route: "/classrooms",
              icon: <SiGoogleclassroom />,
            },
            { name: "Attendance", route: "/attendance", icon: <FaUserCheck /> },
            { name: "Marks", route: "/marks", icon: <BsFileRuled /> },
            {name: "Scholarships", route: "/scholarships", icon: <IoMenuSharp/>},
            {name: "Society Updates", route: "/updates", icon: <FaUserCheck/>},
            { name: "General Announcements", route: "/announcements", icon: <TbWorldSearch /> },
            { name: "Jobs", route: "/jobs", icon: <TbWorldSearch /> },
            { name: "Lectures", route: "/classroom/lectures", icon: <IoIdCardOutline /> },
            { name: "Feedbacks", route: "/classroom/feedbacks", icon: <IoIdCardOutline /> },
            {
              name: "Settings",
              route: "/settings",
              icon: <IoSettingsOutline />,
            },
          ].map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: !collapsed ? "initial" : "center",
                  gap: "10px",
                  px: 2.5,
                }}
                onClick={() => navigate(item?.route)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: !collapsed ? 3 : "none",
                    margin: !collapsed ? "unset" : 0,
                    justifyContent: "center",
                    // color: "#ffffff",
                    color:
                      window.location.pathname === item?.route
                        ? "var(--primary)"
                        : "#ffffff",
                  }}
                >
                  {item?.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item?.name}
                  sx={{
                    opacity: !collapsed ? 1 : 0,
                    display: !collapsed ? "unset" : "none",
                    color:
                      window.location.pathname === item?.route
                        ? "var(--primary)"
                        : "#ffffff",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ padding: "100px 20px 20px 20px", width: "100%" }}
      >
        {children}
      </Box>
    </div>
  );
};

export default VerticalLayout;
