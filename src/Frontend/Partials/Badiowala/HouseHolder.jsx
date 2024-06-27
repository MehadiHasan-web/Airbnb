import Title from "../../../Components/Title"
import { Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoCallOutline } from "react-icons/io5";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { useState } from "react";
import { CiHeart } from "react-icons/ci";


const HouseHolder = () => {
    const [src, setSrc] = useState();

    const changeImg = (e) => {
        setSrc(e.target.src);
        console.log(e.target.className)
    }


    return (
        <div>
            <Title title={'Profile'} />



            <div className="container mx-auto mt-2">
                <div className="flex">
                    <div className="w-8/12">
                        <div className="h-[600px]  p-4">
                            <img className="w-full h-full rounded shadow-lg" src={src} alt="" />
                        </div>
                        <Swiper
                            slidesPerView={6}
                            spaceBetween={20}
                            centeredSlides={true}
                            pagination={{
                                type: 'fraction',
                            }}
                            modules={[Navigation]}
                            className="mySwiper px-4 "
                        >
                            <SwiperSlide>
                                <div className="cursor-pointer ">
                                    <img onClick={changeImg} className="rounded shadow-lg h-24" src="https://images.unsplash.com/photo-1719242086474-426087b8e0d3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="  cursor-pointer">
                                    <img onClick={changeImg} className="rounded shadow-lg h-24" src="https://images.unsplash.com/photo-1717501218221-1da14c0f365e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cursor-pointer">
                                    <img onClick={changeImg} className="rounded shadow-lg h-24" src="https://plus.unsplash.com/premium_photo-1717478899616-d3c79db0f62f?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                            </SwiperSlide>



                        </Swiper>
                    </div>
                    <div className="w-4/12">
                        <div className="ms-10 rounded border p-5 ">
                            <div className="flex justify-between">
                                <h2 className="font-bold text-2xl">The Harper Tuips</h2>
                                <button className="btn btn-ghost btn-sm"><CiHeart className="text-2xl" /></button>
                            </div>
                            <div className="flex justify-between mt-2">
                                {/* <h2 className="font-bold text-xl">$17.900</h2> */}

                                <div className="stats  w-full">
                                    <div className="stat p-0 mb-2">
                                        <div className="stat-figure text-primary ">
                                            <div className="rating rating-sm ">
                                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                            </div>
                                        </div>
                                        <div className="stat-value text-primary">25.6K</div>
                                        <div className="stat-desc">21% more than last month</div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="font-semibold">Description</h2>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam doloremque consequuntur neque delectus officiis quisquam odio, similique corrupti! Laboriosam, ratione?

                            <button className="btn btn-outline btn-secondary mt-4 w-full "> <IoCallOutline /> Call</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HouseHolder
