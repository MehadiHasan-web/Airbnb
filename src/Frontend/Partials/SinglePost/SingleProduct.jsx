import Title from "../../../Components/Title"
import { PiImagesThin } from "react-icons/pi";
import { BsInfoSquare } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { MdOutlineBathroom, MdOutlineSpeakerNotes, MdBalcony } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const SingleProduct = () => {
    return (
        <>
            <Title title={'Airbnb Post'} />

            <div className="container mx-auto mt-6 ">
                <div className="grid justify-items-center">
                    {/* title and share button  */}
                    <div className=" shadow-sm border p-4 w-4/6  rounded ">
                        <h2 className="font-bold text-md  text-slate-500">Artist's House & Gallery • British Colonial Suite Lorem ipsum dolor sit.</h2>
                    </div>

                    {/* slider  */}
                    <div className=" shadow-sm border w-4/6  rounded mt-4">
                        <div className="border-b pb-4 p-4 flex items-center">
                            <PiImagesThin className="me-2 font-bold" /> <strong>Image</strong>
                        </div>
                        {/* slid image  */}
                        <div className="p-4">
                            <Swiper
                                slidesPerView={'auto'}
                                centeredSlides={true}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </SwiperSlide>
                            </Swiper>

                        </div>
                    </div>

                    {/* basic information  */}
                    <div className=" shadow-sm border w-4/6  rounded mt-4">
                        <div className="border-b pb-4 p-4 flex items-center">
                            <BsInfoSquare className="me-2 font-bold" /> <strong>Basic information</strong>
                        </div>
                        <div className="p-4 pb-0">
                            <div className="grid grid-cols-3 border-b pb-4">
                                {/* i 1 */}
                                <div className="flex items-center">
                                    <FaBed /> <p className="ms-2">Bedroom : 2</p>
                                </div>
                                {/* i 2 */}
                                <div className="flex items-center">
                                    <MdOutlineBathroom /> <p className="ms-2">Bathroom  : 2</p>
                                </div>
                                {/* i 3 */}
                                <div className="flex items-center">
                                    <MdBalcony /> <p className="ms-2">Balcony : 2</p>
                                </div>
                            </div>

                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols4 lg:gird-cols-5 xl:grid-cols-5 2xl:gird-cols-5">
                                {/* item 1 */}
                                <div>
                                    <p className="text-[11px] text-slate-500">PROPERTY ID</p>
                                    <span className="text-slate-500">323</span>
                                </div>
                                {/* item 1 */}
                                <div>
                                    <p className="text-[11px] text-slate-500">UPDATED AT</p>
                                    <span className="text-slate-500">08 Jun 2024</span>
                                </div>
                                {/* item 1 */}
                                <div>
                                    <p className="text-[11px] text-slate-500">AVAILBLE FROM</p>
                                    <span className="text-slate-500">July</span>
                                </div>
                                {/* item 1 */}
                                <div>
                                    <p className="text-[11px] text-slate-500">CATEGORY</p>
                                    <span className="text-slate-500">Family</span>
                                </div>
                                {/* item 1 */}
                                <div>
                                    <p className="text-[11px] text-slate-500">PROPERTY TYPE</p>
                                    <span className="text-slate-500">Flat</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Location information */}
                    <div className=" shadow-sm border w-4/6  rounded mt-4">
                        <div className="border-b pb-4 p-4 flex items-center">
                            <CiLocationArrow1 className="me-2 font-bold" /> <strong>Location information</strong>
                        </div>

                        <div className="p-4">
                            <div className="grid grid-cols-3">
                                {/* item 1 */}
                                <div>
                                    <p className="text-[11px] text-slate-500">DIVISION</p>
                                    <span className="text-slate-500">Dhaka</span>
                                </div>
                                {/* item 1 */}
                                <div>
                                    <p className="text-[11px] text-slate-500">DISTRICT</p>
                                    <span className="text-slate-500">Mohammadpur</span>
                                </div>
                                {/* item 1 */}
                                <div>
                                    <p className="text-[11px] text-slate-500">AREA / THANA</p>
                                    <span className="text-slate-500">Mohammadpur</span>
                                </div>

                            </div>
                            <div className="mt-4">
                                <p className="text-[11px] text-slate-500">SHORT ADDRESS</p>
                                <span className="text-red-700">Locked information</span>
                            </div>
                        </div>
                    </div>
                    {/* Summary*/}
                    <div className=" shadow-sm border w-4/6  rounded mt-4">
                        <div className="border-b pb-4 p-4 flex items-center">
                            <MdOutlineSpeakerNotes className="me-2 font-bold" /> <strong>Summary</strong>
                        </div>

                        <div className="p-4">

                            জুলাই মাস থেকে ৩ টি ফ্ল্যাট ভাড়া হবে
                            ভাড়া           - ৯০০০/-
                            সার্ভিস চার্জ - ২৫০০/-
                            সর্ব মোট।   - ১১,৫০০/-(গ্যাস+বিদ্যুৎ ছাড়া)
                            ২ বেড
                            ডাইনিং
                            ড্রয়িং
                            ২ বেলকনি
                            লিফ্ট
                            সিকিউরিটি ২৪ ঘণ্টা

                        </div>
                    </div>


                </div>



            </div>


        </>
    )
}

export default SingleProduct
