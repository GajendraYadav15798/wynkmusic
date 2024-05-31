import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: !isMobile,
    variableWidth: !isMobile,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  const imageStyle = {
    borderRadius: '20px',
    margin: isMobile ? '0 5px' : '0 10px',
    marginTop: '50px',
    marginBottom: '50px',
    maxWidth: '100%', // Ensure images don't overflow container
    height: 'auto', // Maintain aspect ratio
  };

  return (
    <div className='barapp' style={{ background: 'black', position: 'relative', top: '95px' }}>
      <Slider {...settings}>
        <div>
        <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/66473ee5d83710614a01960f/BANNER_34474852554275.png" alt="" style={imageStyle} />
        </div>
        <div>
          <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/660fd3c5b4f9e115a0f6c48a/BANNER_162814980521707.jpeg" alt="" style={imageStyle} />
        </div>
        <div>
          <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/665053bc34a219283eb58d0e/BANNER_20423215653118.jpg" alt="" style={imageStyle} />
        </div>
        <div>
          <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/665069fa5c3d3b2ab05d7f90/BANNER_26157792887009.png" alt="" style={imageStyle} />
        </div>
        <div>
          <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/664f3f6f6bb30d618035f61a/BANNER_3880114223922.jpeg" alt="" style={imageStyle} />
        </div>
        <div>
          <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/tile/artwork/1716810153830_fresh-arrivals-featuredbanner_(19).jpg" alt="" style={imageStyle} />
        </div>
        <div>
          <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/665714e7aecc9109af2f41c6/BANNER_25816516955929.jpg" alt="" style={imageStyle} />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;

