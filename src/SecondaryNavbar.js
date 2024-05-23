import React, { useState, useEffect } from "react";
import "./SecondaryNavbar.css";
import { Link, useNavigate } from "react-router-dom";

function SecondaryNavbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <div className="secondaryNavbar">
      <nav>
        <ul className="uls">
          <li className="list-group-item">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: '14px',
              }}
            >
              All
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/trending"
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: '12px'
              }}
            >
              Trending
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/toptwenty"
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: '14px'
              }}
            >
              Top 20's Songs 
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/topfifty"
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: '14px'
              }}
            >
              Top 50's
            </Link>
          </li>
          
          <li className="list-group-item">
            <Link
              to="/sad"
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: '14px'
              }}
            >
              Sad Songs
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/romantic"
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: '14px'
              }}
            >
              Romantic Song
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/romantic"
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: '14px'
              }}
            >
              Romantic Song
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/happy"
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: '14px'
              }}
            >
              Happy Songs
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/library"
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: '14px'
              }}
            >
              Favourite Song
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/podcast"
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: '14px'
              }}
            >
              Podcast
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/updatepassword"
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: '14px'
              }}
            >
              Update Password
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SecondaryNavbar;
