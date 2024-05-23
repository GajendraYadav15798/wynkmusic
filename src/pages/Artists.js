import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Artists() {
  const [getArtist, setArtist] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const fetchArtists = async () => {
    try {
      const res = await axios.get(
        "https://academics.newtonschool.co/api/v1/music/artist",
        {
          headers: {
            projectId: "f104bi07c490",
          },
        }
      );
      console.log(res.data.data);
      setArtist(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Configuration for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 20,
    },
  };

  const containerStyle = {
    margin: isMobile ? "0 10px" : "0 150px",
  };

  const textStyle = {
    marginLeft: isMobile ? "0" : "30px",
    textAlign: isMobile ? "center" : "left",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "gray", textAlign: isMobile ? "center" : "left",fontStyle:'italic' }}>
        Top Artist
      </h1>
      <Carousel
        responsive={responsive}
        ssr={true} // Server Side Rendering
        infinite={true} // Infinite loop sliding
        autoPlay={true} // Auto play
        autoPlaySpeed={3000} // Auto play speed
        removeArrowOnDeviceType={["tablet", "mobile"]} // Remove arrow on specified devices
        containerClass="carousel-container" // Custom container class name
        itemClass="carousel-item" // Custom item class name
      >
        {getArtist.map((artist, index) => (
          <div key={index}>
            <img
              src={artist.image}
              alt={artist.name}
              style={{
                width: isMobile ? "150px" : "250px",
                height: isMobile ? "150px" : "250px",
                borderRadius: "50%",
                display: "block",
                margin: isMobile ? "0 auto" : "0",
              }}
            />
            <p style={textStyle}>{artist.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Artists;
