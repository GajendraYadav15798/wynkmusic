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
        <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65a68ec7ed7dad04b5a74e4e/BANNER_94879319150057.png" alt="" style={imageStyle} />
        </div>
        <div>
          <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/667e7b2b1df2707511a165c0/BANNER_23105162642994.jpg" alt="" style={imageStyle} />
        </div>
        <div>
          <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/667e908709a83e21ae05d44e/BANNER_26069202389172.jpg" alt="" style={imageStyle} />
        </div>
        <div>
          <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/667e8fb40a816862f296ba1b/BANNER_22630803685798.jpg" alt="" style={imageStyle} />
        </div>
        <div>
          <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/66740b4a1c80553f155bf696/BANNER_115781009988814.jpg" alt="" style={imageStyle} />
        </div>
        <div>
          <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/667eb2fd01fd9c087c7f9b13/BANNER_27281925731717.jpg" alt="" style={imageStyle} />
        </div>
        <div>
          <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/667e8baec7019e1a5aef3d72/BANNER_278432527020294.jpg" alt="" style={imageStyle} />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;

