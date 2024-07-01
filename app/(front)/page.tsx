import data from "@/lib/data";
import Services from '@/components/Services/services'
import Hero from "@/components/Hero/Hero";
import AboutUs from "@/components/about-us/page";
import Features from '@/components/Features/features'
import CustomerReviewCarousel from "@/components/testimonials/CustomerReviewCarousel";


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
const items: CarouselItem[] = [
  {
    name: 'Akhil',
    company: 'Capgemini',
    description: 'I got placed in Capgemini as Data Privacy Consultant with 100% hike. Thank you Diksha Mam for your mentorship and guidance. I would definitely recommend her interview preparation and resume building services to all the job seekers!',
    imageUrl: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png',
    imageSizes: [
      { size: 500, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-500.png' },
      { size: 800, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-800.png' },
      { size: 972, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png' },
    ],
  },
  {
    name: 'Akhil',
    company: 'Capgemini',
    description: 'I got placed in Capgemini as Data Privacy Consultant with 100% hike. Thank you Diksha Mam for your mentorship and guidance. I would definitely recommend her interview preparation and resume building services to all the job seekers!',
    imageUrl: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png',
    imageSizes: [
      { size: 500, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-500.png' },
      { size: 800, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-800.png' },
      { size: 972, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png' },
    ],
  },
  {
    name: 'Akhil',
    company: 'Capgemini',
    description: 'I got placed in Capgemini as Data Privacy Consultant with 100% hike. Thank you Diksha Mam for your mentorship and guidance. I would definitely recommend her interview preparation and resume building services to all the job seekers!',
    imageUrl: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png',
    imageSizes: [
      { size: 500, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-500.png' },
      { size: 800, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-800.png' },
      { size: 972, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png' },
    ],
  },
  {
    name: 'Akhil',
    company: 'Capgemini',
    description: 'I got placed in Capgemini as Data Privacy Consultant with 100% hike. Thank you Diksha Mam for your mentorship and guidance. I would definitely recommend her interview preparation and resume building services to all the job seekers!',
    imageUrl: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png',
    imageSizes: [
      { size: 500, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-500.png' },
      { size: 800, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-800.png' },
      { size: 972, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png' },
    ],
  },
  {
    name: 'Akhil',
    company: 'Capgemini',
    description: 'I got placed in Capgemini as Data Privacy Consultant with 100% hike. Thank you Diksha Mam for your mentorship and guidance. I would definitely recommend her interview preparation and resume building services to all the job seekers!',
    imageUrl: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png',
    imageSizes: [
      { size: 500, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-500.png' },
      { size: 800, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-800.png' },
      { size: 972, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png' },
    ],
  },
  {
    name: 'Akhil',
    company: 'Capgemini',
    description: 'I got placed in Capgemini as Data Privacy Consultant with 100% hike. Thank you Diksha Mam for your mentorship and guidance. I would definitely recommend her interview preparation and resume building services to all the job seekers!',
    imageUrl: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png',
    imageSizes: [
      { size: 500, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-500.png' },
      { size: 800, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-800.png' },
      { size: 972, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png' },
    ],
  },

  // Add more items as needed
];

export default function Home() {
  return (
    <>
    <Hero />
    <section id="Services" className="section_services">
        <div id='services' className='container-large'>
          <div className="services_heading-wrapper">
            <h2>Services Offered</h2>
          </div>
          <div className="services_wrapper ">
            <div className="services_card-wrapper center">
              {
                data.services.map((service)=><Services key={service.title} service={service}/>)
              }
            </div>
          </div>
        </div>
      </section> 
    <AboutUs />
    <Features />
    <div className="center slick-initialized slick-slider slick-dotted">
      <div className="slick-list draggable" style={{ padding: '0px 80px' }}>
        <div className="slick-track" style={{ opacity: 1, width: '100vw', transform: 'translate3d(-80px, 0px, 0px)' }}>
          <CustomerReviewCarousel items={items} />
        </div>
      </div>
    </div>
    </>
  );
}
