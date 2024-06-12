import { FaHome, FaBus, FaMotorcycle} from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import {  Navigation } from 'swiper/modules';

// data section start
const iconData = [
  {
    "id": "01",
    "icon" : <FaHome className='text-red-400 text-xl text-center mx-auto'></FaHome>,
    "name": "home"
  },
  {
    "id": "02",
    "icon" : <FaBus className='text-red-400 text-xl text-center mx-auto'></FaBus>,
    "name": "Bus"
  },
  {
    "id": "03",
    "icon" : <FaMotorcycle className='text-red-400 text-xl text-center mx-auto'></FaMotorcycle>,
    "name": "home"
  },
  {
    "id": "04",
    "icon" : <FaHome className='text-red-400 text-xl text-center mx-auto'></FaHome>,
    "name": "home"
  },
  {
    "id": "05",
    "icon" : <FaBus className='text-red-400 text-xl text-center mx-auto'></FaBus>,
    "name": "Bus"
  },
  {
    "id": "06",
    "icon" : <FaMotorcycle className='text-red-400 text-xl text-center mx-auto'></FaMotorcycle>,
    "name": "home"
  },
  {
    "id": "07",
    "icon" : <FaHome className='text-red-400 text-xl text-center mx-auto'></FaHome>,
    "name": "home"
  },
  {
    "id": "08",
    "icon" : <FaBus className='text-red-400 text-xl text-center mx-auto'></FaBus>,
    "name": "Bus"
  },
  {
    "id": "09",
    "icon" : <FaMotorcycle className='text-red-400 text-xl text-center mx-auto'></FaMotorcycle>,
    "name": "home"
  },
  {
    "id": "10",
    "icon" : <FaMotorcycle className='text-red-400 text-xl text-center mx-auto'></FaMotorcycle>,
    "name": "home"
  },
  {
    "id": "11",
    "icon" : <FaHome className='text-red-400 text-xl text-center mx-auto'></FaHome>,
    "name": "home"
  },
  {
    "id": "12",
    "icon" : <FaBus className='text-red-400 text-xl text-center mx-auto'></FaBus>,
    "name": "Bus"
  },
  {
    "id": "13",
    "icon" : <FaMotorcycle className='text-red-400 text-xl text-center mx-auto'></FaMotorcycle>,
    "name": "home"
  },
  {
    "id": "14",
    "icon" : <FaHome className='text-red-400 text-xl text-center mx-auto'></FaHome>,
    "name": "home"
  },
  {
    "id": "15",
    "icon" : <FaBus className='text-red-400 text-xl text-center mx-auto'></FaBus>,
    "name": "Bus"
  },
  {
    "id": "16",
    "icon" : <FaMotorcycle className='text-red-400 text-xl text-center mx-auto'></FaMotorcycle>,
    "name": "home"
  },
  {
    "id": "17",
    "icon" : <FaHome className='text-red-400 text-xl text-center mx-auto'></FaHome>,
    "name": "home"
  },
  {
    "id": "18",
    "icon" : <FaBus className='text-red-400 text-xl text-center mx-auto'></FaBus>,
    "name": "Bus"
  },
  {
    "id": "19",
    "icon" : <FaMotorcycle className='text-red-400 text-xl text-center mx-auto'></FaMotorcycle>,
    "name": "home"
  },
  {
    "id": "20",
    "icon" : <FaHome className='text-red-400 text-xl text-center mx-auto'></FaHome>,
    "name": "home"
  },
  {
    "id": "21",
    "icon" : <FaBus className='text-red-400 text-xl text-center mx-auto'></FaBus>,
    "name": "Bus"
  },
  {
    "id": "22",
    "icon" : <FaMotorcycle className='text-red-400 text-xl text-center mx-auto'></FaMotorcycle>,
    "name": "home"
  },
  {
    "id": "23",
    "icon" : <FaMotorcycle className='text-red-400 text-xl text-center mx-auto'></FaMotorcycle>,
    "name": "home"
  },
  {
    "id": "24",
    "icon" : <FaHome className='text-red-400 text-xl text-center mx-auto'></FaHome>,
    "name": "home"
  },
  {
    "id": "25",
    "icon" : <FaBus className='text-red-400 text-xl text-center mx-auto'></FaBus>,
    "name": "Bus"
  },
  {
    "id": "26",
    "icon" : <FaMotorcycle className='text-red-400 text-xl text-center mx-auto'></FaMotorcycle>,
    "name": "home"
  },
]
// data section end


const Tag = () => {

  return (
    <div className='p-5'>
      {/* swiper slider section start */}
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          480: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          640: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          768: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          1024: {
            slidesPerView: 12,
            slidesPerGroup: 6,
          },

        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <div className='px-5'>
          {/* content section start */}
          {
            iconData.map((data, index) => <SwiperSlide key={index}>
              <ul className="text-center">
                <li>{data.icon}</li>
                <li>{data.name}</li>
              </ul>
            </SwiperSlide>)
          }
        {/* content section end */}
        </div>
      </Swiper>
      {/* swiper slider section end */}
    </div>
  );
};

export default Tag;