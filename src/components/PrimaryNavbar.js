import React from "react";
import wynklogo from "../assets/wynklogo.svg";
import search from "../assets/search.svg";
import rupees from "../assets/rupees.svg";
import { IoPersonOutline } from "react-icons/io5";
import line from "../assets/line.svg";
import music from "../assets/music.svg";
import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import axios from "axios";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


function PrimaryNavbar() {
  const navigate = useNavigate();
  const { setSearchData } = useUser();
  const { isMobile } = useUser();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onSearchDetails = (event) => {
    const queryString = {
      title: event.target.value,
    };

    axios
      .get("https://academics.newtonschool.co/api/v1/music/song", {
        params: queryString,
        headers: {
          projectID: "f104bi07c490",
        },
      })
      .then((response) => {
        setSearchData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const logoutHandler = (event) => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.reload(); // You might not need this line if you're using React Router
    navigate("/login");
    event.preventDefault();
  };

  return (
    <>
      {!isMobile ? (
        <div className="navbar-main-container">
          <div className="log">
            <img src={wynklogo} alt="logo" />
            <h2 style={{fontStyle:'italic',fontSize:'11pt',marginTop:'28px'}}>Wynk Music</h2>
          </div>
          <div className="appSearchNavbar">
            <input
              type="text"
              placeholder="Search Songs"
              style={{ color: "white" }}
              onChange={onSearchDetails}
            />
            <div className="searchIcon-navbar">
              <img src={search} alt="" />
            </div>
          </div>
          <img src={rupees} alt="rupees" style={{height:'25px',width:'25px',marginLeft:'25px',marginTop:'26px'}} />
          <div className="Manage_Subscription">
          
            <button
              style={{
                border: "none",
                textDecoration: "none",
                background: "black",
                color: "white",
               marginTop:'-2px',
                cursor: "pointer",
                fontSize:'12pt',
                marginLeft:'-60px',
                
              }}
              onClick={() => navigate("/manageSubscriptions")}
            >
              Manage Subscription
            </button>
          </div>

          <div className="line">
            <img src={line} alt="" />
          </div>
          <div className="music">
            <img src={music} alt="" />
          </div>
          <div className="person">
            {!localStorage.getItem("token") ? (
              <button
                style={{ background: "red", color: "white", fontSize: "20px" }}
                onClick={handleLogin}
              >
                <IoPersonOutline /> Log In
              </button>
            ) : (
              <button
                color="inherit"
                style={{ background: "blue", color: "white", fontSize: "20px" }}
                onClick={logoutHandler}
              >
                {localStorage.getItem("name")} Logout
              </button>
            )}
          </div>
          <div className="login"></div>
        </div>
      ) : (
        <div className="navbar-main-container">
          <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' ,color:'white'}}>
        <Typography sx={{ minWidth: 100 }}><div className="log">
            <img src={wynklogo} alt="logo" />
            {/* <h2>Wynk Music</h2> */}
          </div></Typography>
        <Typography sx={{ minWidth: 100 }}><div className="appSearchNavbar">
            <input
              type="text"
              placeholder="Search Songs"
              style={{ color: "white" }}
              onChange={onSearchDetails}
            />
            <div className="searchIcon-navbar">
              <img src={search} alt="" />
            </div>
          </div></Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
          <IconButton>
          <MenuIcon sx={{ width: 32, height: 32,color:'gray',marginRight:3,marginTop:-2 }} />
        </IconButton>
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
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
          <Avatar /> My account
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
          <ListItemIcon sx={{color:'white'}}>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
         <Link to='/login'>Login</Link> 
        </MenuItem>
       
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
          <ListItemIcon sx={{color:'white'}}>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
          <ListItemIcon sx={{color:'white'}}>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Link to='/'>All</Link> 
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
          <ListItemIcon sx={{color:'white'}}>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Link to='/trending'>Trending</Link> 
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
          <ListItemIcon sx={{color:'white'}}>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Link to='/toptwenty'>Top 20's Songs </Link> 
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
          <ListItemIcon sx={{color:'white'}}>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Link to='/topfifty'>Top 50's Songs </Link>    
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
          <ListItemIcon sx={{color:'white'}}>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Link to='/sad'>Sad Songs </Link> 
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
          <ListItemIcon sx={{color:'white'}}>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Link to='/romantic'> Romantic Songs </Link>   
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
          <ListItemIcon sx={{color:'white'}}>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Link to='/happy'> Happy Songs </Link>   
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
          <ListItemIcon sx={{color:'white'}}>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Link to='/favourite'>Favourite Songs </Link> 
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
          <ListItemIcon sx={{color:'white'}}>
            <Logout fontSize="small" />
          </ListItemIcon>
         <Link to='/podcast'>Podcast </Link> 
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
          <Avatar />
          <Link to='/manageSubscriptions'> Manage Subscription </Link> 
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{bgcolor:'black'}}>
        <ListItemIcon sx={{color:'white'}}>
          <Settings fontSize="small" />
        </ListItemIcon>
        <Link to='/updatepassword'> Update Password </Link>  
      </MenuItem>
      </Menu>
    </React.Fragment>
    </div>
      )}
    </>
  );
}

export default PrimaryNavbar;
