import React, { useEffect, useState } from "react";
import wynklogo from "../assets/wynklogo.svg";
import search from "../assets/search.svg";
import rupees from "../assets/rupees.svg";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import axios from "axios";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import LockIcon from '@mui/icons-material/Lock';

function PrimaryNavbar() {
  const navigate = useNavigate();
  const { setSearchData } = useUser();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onSearchDetails = async (event) => {
    const queryString = { title: event.target.value };
    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/music/song",
        {
          params: { search: JSON.stringify(queryString) },
          headers: { projectID: "f104bi07c490" },
        }
      );
      setSearchData(response.data.data);
      navigate("/search");
    } catch (error) {
      setSearchData(null);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const logoutHandler = (event) => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.reload();
    navigate("/login");
    event.preventDefault();
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {!isMobile ? (
        <div className="navbar-main-container">
          <div className="log">
            <img src={wynklogo} alt="logo" />
            <h2
              style={{
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                marginTop: "28px",
                fontWeight: "300",
              }}
            >
              Wynk Music
            </h2>
          </div>
          <div className="appSearchNavbar">
            <input
              type="text"
              placeholder="Search Songs"
              style={{ color: "white" }}
              onChange={onSearchDetails}
            />
            <div
              className="searchIcon-navbar"
              style={{ marginLeft: "35px", marginTop: "-30px" }}
            >
              <FaSearch
                style={{ color: "gray", height: "20px", width: "20px" }}
              />
            </div>
          </div>
          <img
            src={rupees}
            alt="rupees"
            style={{
              height: "25px",
              width: "25px",
              marginLeft: "25px",
              marginTop: "26px",
            }}
          />
          <div className="Manage_Subscription">
            <button
              style={{
                border: "none",
                textDecoration: "none",
                background: "#1A1A1A",
                color: "white",
                marginTop: "-1px",
                cursor: "pointer",
                marginLeft: "-70px",
                fontSize: "16px",
              }}
              onClick={() => navigate("/manageSubscriptions")}
            >
              Manage Subscription
            </button>
          </div>
          <div style={{ marginInlineStart: "25px", marginTop: "30px" }}>
            <IoPersonOutline style={{ fontSize: "20px" }} />
          </div>
          <div
            className="person"
            style={{ paddingLeft: "65px", marginTop: "28px" }}
          >
            {!localStorage.getItem("token") ? (
              <button
                style={{ background: "blue", color: "white" }}
                onClick={handleLogin}
              >
                Log In
              </button>
            ) : (
              <button
                color="inherit"
                style={{
                  background: "blue",
                  color: "white",
                  fontWeight: "400",
                }}
                onClick={logoutHandler}
              >
                {localStorage.getItem("name")} Logout
              </button>
            )}
          </div>

          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <MenuIcon sx={{ color: "white",bgcolor:'#1C1B1B' }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
           
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  bgcolor:'#1C1B1B',
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
            <MenuItem onClick={handleClose} sx={{ color: 'gray', background: '#1C1B1B' }}>
            <ListItemIcon>
              <LockIcon fontSize="small" sx={{ color: 'gray' }} />
            </ListItemIcon>
            <Link
              to="/updatepassword"
              style={{
                textDecoration: 'none',
                color: 'gray',
                fontWeight: '400',
                marginLeft: '8px', // Adds some space between the icon and the text
              }}
            >
              UpdatePassword
            </Link>
          </MenuItem>
            </Menu>
          </React.Fragment>
        </div>
      ) : (
        <div className="navbar-main-container">
          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "white",
              }}
            >
              <Typography sx={{ minWidth: 100 }}>
                <div className="log">
                  <img src={wynklogo} alt="logo" />
                </div>
              </Typography>
              <Typography sx={{ minWidth: 100 }}>
                <div className="appSearchNavbar">
                  <input
                    type="text"
                    placeholder="Search Songs"
                    style={{ color: "white" }}
                    onChange={onSearchDetails}
                  />
                  <div className="searchIcon-navbar">
                    <img src={search} alt="search icon" />
                  </div>
                </div>
              </Typography>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleMenuClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <MenuIcon
                    sx={{
                      width: 32,
                      height: 32,
                      color: "white",
                      marginRight: 6,
                      marginTop: -3,
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleMenuClose}
              onClick={handleMenuClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  bgcolor:'#1C1B1B',
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <Avatar /> My account
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                <Link to="/login">Login</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Link to="/">All</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Link to="/trending">Trending</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Link to="/toptwenty">Top 20's Songs</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Link to="/topfifty">Top 50's Songs</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Link to="/sad">Sad Songs</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Link to="/romantic">Romantic Songs</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Link to="/happy">Happy Songs</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Link to="/favourite">Favourite Songs</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Link to="/podcast">Podcast</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <Avatar />
                <Link to="/manageSubscriptions">Manage Subscription</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ bgcolor: "black" }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Settings fontSize="small" />
                </ListItemIcon>
                <Link to="/updatepassword">Update Password</Link>
              </MenuItem>
            </Menu>
          </React.Fragment>
        </div>
      )}
    </>
  );
}

export default PrimaryNavbar;
