import React, { useState, useEffect } from "react";
import "./SecondaryNavbar.css";
import { Link, useNavigate } from "react-router-dom";

function SecondaryNavbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovere, setIsHovere] = useState(false);
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
                fontWeight: "400",
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
                fontWeight: "400",
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
                fontWeight: "400",
              }}
            >
              OldSongs
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/topfifty"
              style={{
                textDecoration: "none",
                color: "gray",
                fontWeight: "400",
              }}
            >
              NewSong
            </Link>
          </li>

          <li
            className="list-group-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ position: "relative" }}
          >
            <Link
              to="/sad"
              style={{
                textDecoration: "none",
                color: "gray",
                fontWeight: "400",
              }}
            >
              Moods&Genre
            </Link>
            {isHovered && (
              <ul
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  backgroundColor: "#1A1919",
                  listStyle: "none",
                  padding: "10px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <li
                  style={{
                    padding: "5px",
                    flex: "1",
                    backgroundColor: "#1A1919",
                  }}
                >
                  <Link
                    to="/party-songs"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Party Songs
                  </Link>
                </li>
                <li
                  style={{
                    padding: "5px",
                    flex: "1",
                    backgroundColor: "#1A1919",
                  }}
                >
                  <Link
                    to="/dance-songs"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Dance Songs
                  </Link>
                </li>
                <li
                  style={{
                    padding: "5px",
                    flex: "1",
                    backgroundColor: "#1A1919",
                  }}
                >
                  <Link
                    to="/bollywood-songs"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Bollywood Songs
                  </Link>
                </li>
                <li
                  style={{
                    padding: "5px",
                    flex: "1",
                    backgroundColor: "#1A1919",
                  }}
                >
                  <Link
                    to="/romantic-songs"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Romantic Songs
                  </Link>
                </li>
                <li
                  style={{
                    padding: "5px",
                    flex: "1",
                    backgroundColor: "#1A1919",
                  }}
                >
                  <Link
                    to="/90s-hits"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    90's Hits
                  </Link>
                </li>
                <li
                  style={{
                    padding: "5px",
                    flex: "1",
                    backgroundColor: "#1A1919",
                  }}
                >
                  <Link
                    to="/ghazals"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Ghazals
                  </Link>
                </li>
                <li
                  style={{
                    padding: "5px",
                    flex: "1",
                    backgroundColor: "#1A1919",
                  }}
                >
                  <Link
                    to="/bhakti-songs"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Bhakti Songs
                  </Link>
                </li>
                <li
                  style={{
                    padding: "5px",
                    flex: "1",
                    backgroundColor: "#1A1919",
                  }}
                >
                  <Link
                    to="/lofi-songs"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    LoFI Songs
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="list-group-item"
            onMouseEnter={() => setIsHovere(true)}
            onMouseLeave={() => setIsHovere(false)}
            style={{ position: "relative" }}
          >
            <Link
              to="/romantic"
              style={{
                textDecoration: "none",
                color: "gray",
                fontWeight: "400",
              }}
            >
              Top Albums
            </Link>
            {isHovere && (
              <ul
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  backgroundColor: "#1A1919",
                  listStyle: "none",
                  padding: "10px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <li
                  style={{
                    padding: "5px",
                    flex: "1",
                    backgroundColor: "#1A1919",
                  }}
                >
                  <Link
                    to="/hindi "
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Top Hindi{" "}
                  </Link>
                </li>
                <li
                  style={{
                    padding: "5px",
                    flex: "1",
                    backgroundColor: "#1A1919",
                  }}
                >
                  <Link
                    to="/ english"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Top English{" "}
                  </Link>
                </li>
                <li
                  style={{
                    padding: "5px",
                    flex: "1",
                    backgroundColor: "#1A1919",
                  }}
                >
                  <Link
                    to="/telugu"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Top Telugu{" "}
                  </Link>
                </li>
                <li
                  style={{
                    padding: "5px",
                    flex: "1",
                    backgroundColor: "#1A1919",
                  }}
                >
                  <Link
                    to="/tamil"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Top Tamil{" "}
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="list-group-item">
            <Link
              to="/happy"
              style={{
                textDecoration: "none",
                color: "gray",
                fontWeight: "400",
              }}
            >
              HappySongs
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/library"
              style={{
                textDecoration: "none",
                color: "gray",
                fontWeight: "400",
              }}
            >
              FavouriteSong
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/podcast"
              style={{
                textDecoration: "none",
                color: "gray",
                fontWeight: "400",
              }}
            >
              Podcast
            </Link>
          </li>
          <li className="list-group-item">
           
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SecondaryNavbar;
