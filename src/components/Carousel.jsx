import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import data from '../data/servicios.json';

const Carousel = () => {
    const containerStyle = {
        maxWidth: '500px',
        width: '100%',
        margin: '0 auto', // Centra horizontalmente
    };

    return (
        <Box sx={containerStyle}>
            <Typography
                variant="h2"
                sx={{
                    textAlign: 'center',
                    backgroundColor: 'secondary.dark',
                    color: 'white',
                    p: 2,
                    mt: 5,
                    maxWidth: '100%',
                }}
            >
                Servicios
            </Typography>
            <Swiper
                style={{ maxWidth: '100%' }}
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {data.rows.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="300"
                                image={new URL(slide.image, import.meta.url).href}
                                alt={`Image for ${slide.title}`}
                                sx={{
                                    filter: 'hue-rotate(350deg) saturate(60%)',
                                    transition: 'transform 5s ease',
                                    '&:hover': {
                                        filter: 'none',
                                    },
                                }}
                            />
                            <CardContent>
                                <Typography variant="h5">{slide.title}</Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Carousel;
