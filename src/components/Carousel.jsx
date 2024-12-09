import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import data from '../data/servicios.json';

const Carousel = () => {   
    const carouselStyle = {
        width: '500px', // Cambia el porcentaje o usa valores en px como '600px'
        margin: '0 auto', // Centra el carrusel horizontalmente        
    };

    return (
        <Swiper style={carouselStyle}
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
                delay: 3000, 
                disableOnInteraction: false, // Continúa el autoplay incluso al interactuar
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
                        />
                        <CardContent>
                            <Typography variant="h5">{slide.title}</Typography>                            
                        </CardContent>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
