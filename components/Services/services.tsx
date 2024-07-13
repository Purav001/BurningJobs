import { Service } from '@/lib/models/servicesModel'
import './service.css'
import React from 'react'

export default function services({service}: {service: Service}) {
  return (
    
    
    <div className="services_card" key={service.id}>
        <div className="services_card-image">
            <img 
                src={service.imageSrc}
                srcSet={service.imageSrcSet}
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 450px, (max-width: 1279px) 30vw, (max-width: 1919px) 31vw, 450px"
                alt="" 
                className="image-10" 
            />
        </div>
        <div className="services_card-content">
            <div className="services_card_heading-wrapper">
                <h3>{service.title}</h3>
                <p className="text-weight-light">{service.description}</p>
            </div>
            <div className="services_card_button-wrapper">
                <a href={`/service/${service.slug}`} className="button is-secondary w-button">Register Now</a>
            </div>
        </div>
    </div>
  )
}
