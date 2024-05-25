import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MusicCard from '../components/banners/musicpages/MusicCard';
import MusicPlayer from '../components/banners/MusicPlayer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TwentySongs = () => {
    const [getData, setData] = useState([]);
    const [getMusic, setMusic] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const carouselRef = useRef(null);

    const musicList = async () => {
        try {
            const res = await axios.get('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 20 of this week"}', {
                headers: {
                    'projectId': 'f104bi07c490'
                }
            });
            console.log(res.data.data);
            setData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        musicList();
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

    const onMusicHandler = (index) => {
        console.log(index);
        let list = getData[index];
        setMusic(list);
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            partialVisibilityGutter: 40,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            partialVisibilityGutter: 30,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 20,
        },
    };

    const nextSlide = () => {
        carouselRef.current.next();
    };

    const prevSlide = () => {
        carouselRef.current.previous();
    };

    if (isMobile) {
        return null; // Return null to hide the component on mobile devices
    }

    return (
        <>
            <h1 style={{ color: 'rgba(247, 245, 245)', marginLeft: '150px',fontWeight:'500'  }}>Top 20 </h1>
            <div className='twenty' style={{ marginLeft: '150px', marginRight: '150px', position: 'relative' }}>
                <Carousel
                    ref={carouselRef}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={false}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px pr-[15px]"
                >
                    {getData.map((obj, index) => (
                        <MusicCard
                            key={index}
                            title={obj.title}
                            thumbnail={obj.thumbnail}
                            artist={obj.artist}
                            id={index}
                            onMusicHandler={onMusicHandler}
                        />
                    ))}
                </Carousel>
                {isMobile && (
                    <>
                        <button
                            onClick={prevSlide}
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "0",
                                transform: "translateY(-50%)",
                                zIndex: "1",
                                background: 'transparent',
                                border: 'none',
                                fontSize: '2rem',
                                color: 'gray',
                            }}
                        >
                            &lt;
                        </button>
                        <button
                            onClick={nextSlide}
                            style={{
                                position: "absolute",
                                top: "50%",
                                right: "0",
                                transform: "translateY(-50%)",
                                zIndex: "1",
                                background: 'transparent',
                                border: 'none',
                                fontSize: '2rem',
                                color: 'gray',
                            }}
                        >
                            &gt;
                        </button>
                    </>
                )}
            </div>
            {getMusic && (
                <MusicPlayer
                    title={getMusic.title}
                    thumbnail={getMusic.thumbnail}
                    artist={getMusic.artist}
                    audio_url={getMusic.audio_url}
                    songId={getMusic._id}
                />
            )}
        </>
    );
}

export default TwentySongs;
