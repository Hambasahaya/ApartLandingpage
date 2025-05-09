import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {Zoom,EffectCoverflow, Pagination } from 'swiper/modules';

export default function Unit(){
    return(
        <>
        <div className="row d-flex flex-column">
            <div className="col">
<h5 className='text-center'>Unit</h5>
            </div>
            <div className="col mt-5">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={10}
        zoom={true}
        rewind={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
         breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 30,
          },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: false,
            
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show2.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show2.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show3.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show4.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show5.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show6.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show7.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show8.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show9.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show10.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show11.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show12.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show13.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show14.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show15.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show16.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show17.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="card-unit">
                    <img src="/img/show18.jpg" alt="" srcset="" />
                </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
        </>
    )
}