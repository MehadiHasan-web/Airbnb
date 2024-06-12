import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './home.css'

// import './styles.css';

// import required modules
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import axios from 'axios';





const Posts = () => {

    const [post, setPost] = useState([]);

    const getPost = () => {
        axios({
            method: 'get',
            url: 'https://dummyjson.com/products',
            responseType: 'stream'
        })
            .then(function (response) {
                const data = JSON.parse(response.data);
                setPost(data.products)
                // console.log('Products:', data.products);
            });
    }

    useEffect(() => {
        getPost();
    }, []);
    console.log(post)

    return (
        <>
            <div className="grid grid-cols-5 gap-6 mt-4">
                {/* item  */}
                {
                    post.map((item, index) =>

                        <div key={index} className='relative'>
                            {/* slider  */}
                            <Swiper
                                spaceBetween={30}
                                hashNavigation={{
                                    watchState: true,
                                }}
                                pagination={{
                                    clickable: true
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation, HashNavigation]}
                                className="mySwiper rounded-lg shadow"
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide data-hash="slide1" className='w-[320px] h-[300px] rounded-lg'>
                                    <img className='w-full h-full rounded-lg object-cover ' src={item.images[0]} alt="" />
                                </SwiperSlide>
                                <SwiperSlide data-hash="slide2" className='w-[320px] h-[300px] rounded-lg'>
                                    <img className='w-full h-full rounded-lg object-cover' src="../../../../public/img/post/balian2.webp" alt="" />
                                </SwiperSlide>
                                <SwiperSlide data-hash="slide3" className='w-[320px] h-[300px] rounded-lg'>
                                    <img className='w-full h-full rounded-lg object-cover' src="../../../../public/img/post/balian3.webp" alt="" />
                                </SwiperSlide>
                            </Swiper>
                            {/* position top section  */}
                            <div className="absolute top-0 left-0 right-0 flex justify-between px-2 pt-2 items-center">
                                <div>
                                    <button className="button-hover z-20" data-text="Awesome">
                                        <span className="actual-text">&nbsp;Gest favorite&nbsp;</span>
                                        <span aria-hidden="true" className="hover-text">&nbsp;Gestfavorite&nbsp;</span>
                                    </button>
                                </div>
                                {/* loved button  */}
                                <div className='z-20'>
                                    <button className="btn btn-ghost btn-sm text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </button>

                                </div>
                            </div>
                            <div className='mt-2 flex justify-between '>
                                {/* details  */}
                                <div>
                                    <strong className=''>{item.title}</strong>
                                    <p className='text-slate-400'>Lorem ipsum dolor sit amet.</p>
                                    <p className='text-slate-400'>jun20-28</p>
                                    <p><strong>$45</strong> night</p>
                                </div>
                                {/* rating */}
                                <div>
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    )
                }


            </div>



        </>
    )
}

export default Posts
