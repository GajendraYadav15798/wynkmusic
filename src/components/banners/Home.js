import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicCard from '../../components/banners/musicpages/MusicCard';
import MusicPlayer from '../../components/banners/MusicPlayer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Banner from '../../pages/Banner';
import New from '../../pages/New';
import Fifty from '../../pages/Fifty';
import TwentySongs from '../../pages/TwentySongs';
import Sads from '../../pages/Sads';
import Romantics from '../../pages/Romantics';
import Happys from '../../pages/Happys';
import Artists from '../../pages/Artists';
import { useUser } from '../../providers/UserProvider';

function Home() {
    const [getData, setData] = useState([]);
    const [getMusic, setMusic] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initialize state
    const { searchData } = useUser();

    const musicList = async () => {
        try {
            const res = await axios.get(
                'https://academics.newtonschool.co/api/v1/music/song',
                {
                    headers: {
                        projectId: 'f104bi07c490',
                    },
                }
            );
            console.log(res.data.data);
            setData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        musicList();
        console.log(searchData);
    }, [searchData]);

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
        let list = getData[index];
        setMusic(list);
    };
    console.log({ getMusic });

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
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

    return (
        <>
            <Banner />
            <h1 style={{ color: 'rgba(247, 245, 245)', marginLeft: '150px', marginTop: '90px',fontWeight:'500'  }}>New Songs</h1>
            <div className="home" style={{ marginLeft: isMobile ? '20px' : '120px', marginRight: isMobile ? '20px' : '120px' }}>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px pr-[15px]"
                >
                    <div className="search-Song" style={{ display: 'flex', gap: isMobile ? '20px' : '55px' }}>
                        {(searchData.length <= 0 ? getData : searchData).map((obj, index) => (
                            <MusicCard
                                key={index}
                                title={obj.title}
                                thumbnail={obj.thumbnail}
                                artist={obj.artist}
                                id={index}
                                onMusicHandler={onMusicHandler}
                            />
                        ))}
                    </div>
                </Carousel>
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

            <New />
            <TwentySongs />
            <Fifty />
            <Sads />
            <Romantics />
            <Happys />
            <Artists />
        </>
    );
}

export default Home;
