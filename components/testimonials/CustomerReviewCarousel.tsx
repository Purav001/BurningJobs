'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import QuoteIcon from './QuoteIcon'
import './crc.css'
import { Pagination, Navigation } from 'swiper/modules'

interface CarouselItem {
  name: string
  company: string
  description: string
  imageUrl: string
  imageSizes: {
    size: number;
    url: string; 
  }[];
}

interface CarouselProps {
  items: CarouselItem[]
}

const CustomerReviewCarousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Swiper
      spaceBetween={50}
      breakpoints={{
        1200: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {items.map((testimonial, index) => (
        <SwiperSlide key={index}>
              <div key={index} className="swiper-slide slick-slide slick-cloned" tabIndex={-1} role="tabpanel" style={{ width: '309px' }}>
                    <div>
                      <div className="quote w-embed">
                        <QuoteIcon />
                      </div>
                      <p className="testimonials_para">{testimonial.description}</p>
                    </div>
                    <div className="testimonials_image-wrapper">
                      <img
                        src={testimonial.imageUrl}
                        srcSet={testimonial.imageSizes.map((size: { url: any; size: any }) => `${size.url} ${size.size}w`).join(', ')}
                        loading="lazy"
                        width="100"
                        sizes="(max-width: 479px) 100vw, 100px"
                        alt=""
                      />
                      <div className="testimonials_name-wrapper">
                        <div className="testimonials_name">{testimonial.name}</div>
                        <div>{`Placed in ${testimonial.company} | 100% Hike`}</div>
                      </div>
                    </div>
              </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CustomerReviewCarousel
