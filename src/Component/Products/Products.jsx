import React from 'react'
import {Pagination} from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css'
import './Products.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import img1 from '../../Assets/istockphoto-479986430-612x612.jpg'
import img2 from '../../Assets/64289745_2160759387547285_5577148847891434528_n.jpg'
import img3 from '../../Assets/WhatsApp Image 2023-06-09 at 17.58.50.jpeg'
import img4 from '../../Assets/farm-investment-own-a-farm-poultry-farm.jpg'
import img5 from '../../Assets/WhatsApp Image 2023-06-09 at 17.58.51 (1).jpeg'


const Products = () => {
  return (
    <div  className='p-wrapper' name='products'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-600'>Products</p>
                <p className='py-6 text-xl'>Check out some of our Products</p>
            </div>
       
      
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{clickable: true}}
          className='product-slider'
        
        >
            <SwiperSlide>
                <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="" />
            </SwiperSlide>

        </Swiper>
        </div>
    </div>
  )
}

export default Products