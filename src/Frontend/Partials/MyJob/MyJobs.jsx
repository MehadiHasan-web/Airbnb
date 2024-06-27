import { useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import Swal from 'sweetalert2'


const card = [
    {
        id: 1,
        image : "https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Single room"
    },
    {
        id: 2,
        image : "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
        title: "Single room"
    },
    {
        id: 3,
        image : "https://media.istockphoto.com/id/1889370498/photo/exterior-view-of-modern-house.webp?b=1&s=170667a&w=0&k=20&c=LUSwewynDTjRRVTpTZRcQCS_9WDQ4BLj1fAAHpbyL-Q=",
        title: "Single room"
    },
    {
        id: 4,
        image : "https://static.vecteezy.com/system/resources/thumbnails/022/336/414/small_2x/beautiful-luxurious-house-exterior-architecture-study-design-generative-ai-free-photo.jpg",
        title: "Single room"
    },
    {
        id: 5,
        image : "https://c4.wallpaperflare.com/wallpaper/846/173/87/5c1cbaf96bcec-wallpaper-preview.jpg",
        title: "Single room"
    },
    {
        id: 6,
        image : "https://png.pngtree.com/thumb_back/fh260/background/20230616/pngtree-exterior-design-of-a-modern-house-in-the-city-a-3d-image_3606113.jpg",
        title: "Single room"
    },
    {
        id: 7,
        image : "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D",
        title: "Single room"
    }
]

function MyJobs() {
    const [file, setFile] = useState();
    const fileInputRef = useRef(null);

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    function removeImg() {
        setFile('')
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    const submitFunction = (e) => {
        e.preventDefault();
        let form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        console.log(description)
    };

    function delateTolet() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }






    return (
        <>
            <div className="container mx-auto pt-4">
                {/* post model */}
                <dialog id="my_modal_3" className="modal overflow-hidden">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Upload Toelate</h3>

                        <form onSubmit={submitFunction}>

                            <div className="App relative ">
                                <img className="rounded shadow" src={file} />
                                <input type="file" className={`file-input file-input-bordered w-full  mt-2 ${file ? 'hidden' : ''}`} onChange={handleChange} ref={fileInputRef} />
                                <button type="button" className={`btn btn-sm btn-circle absolute top-0 right-0 mt-2 mr-2 ${file ? '' : 'hidden'}`} onClick={removeImg} >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <label className="input input-bordered flex items-center gap-2 mt-2">
                                Name
                                <input name="name" type="text" className="grow" placeholder="Daisy" />
                            </label>

                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Description</span>
                                </div>
                                <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Write .."></textarea>
                            </label>
                            <button className="btn btn-sm mt-2" type="submit">
                                Post
                                <IoCloudUploadOutline />
                            </button>
                        </form>
                    </div>
                </dialog>


                {/* profile  */}
                <div className="md:flex md:justify-between gap-3 md:gap-2 xl:gap-1 mt-2">
                    <div className="w-full md:w-4/12 ">
                        <div className="relative">
                            <img className="w-full h-28 sm:h-32 md:h-28 lg:h-32 xl:h-40  object-cover rounded" src="https://images.unsplash.com/photo-1556691421-cf15fe27a0b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 rounded-full object-cover  absolute bottom-[-30px] sm:bottom-[-35px] md:bottom-[-30px] lg:bottom-[-35px] xl:bottom-[-50px] left-2 shadow-2xl" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="mt-9 sm:mt-10 md:mt-11 xl:mt-14 ms-2 ">
                            <div className="flex justify-between mb-3">
                                <h2 className="font-bold text-lg sm:text-[20px] md:text-base lg:text-lg xl:text-2xl">Mehadi Hasan</h2>
                                <button className="btn btn-xs sm:btn-xs md:text-xs lg:btn-sm xl:btn-sm" onClick={() => document.getElementById('my_modal_3').showModal()}>Post Tolet <CiLocationArrow1 /></button>
                            </div>
                            <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-base w-full sm:w-[75%] md:w-full">Hi, i am a person who can help your to provide service to sell your property and find out your target client</p>
                            <div className="flex gap-6 md:gap-2 lg:gap-4 items-center mt-1">
                                <span className="text-slate-400 text-base sm:text-base md:text-sm lg:text-base xl:text-base" >@code</span>
                                <span className="flex items-center text-slate-400 text-base sm:text-base md:text-sm lg:text-base xl:text-base"><CiLocationOn className="me-1" /> sun facebook</span>
                                <div className="rating rating-xs sm:rating-sm md:rating-xs lg:rating-sm xl:rating-sm">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2  mt-4">
                                {/* item 1 */}
                                <div className="h-20 sm:h-24 md:h-20 lg:h-24 xl:h-28 bg-slate-200 rounded shadow flex justify-center items-center">
                                    <div className="text-center">
                                        <h2 className="font-bold text-xl sm:text-2xl md:text-lg lg:text-xl  xl:text-3xl">332</h2>
                                        <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-base">Book Fee</p>
                                    </div>
                                </div>
                                {/* item 1 */}
                                {/* item 2 */}
                                <div className="h-20 sm:h-24 md:h-20 lg:h-24 xl:h-28 bg-slate-200 rounded shadow flex justify-center items-center">
                                    <div className="text-center">
                                        <h2 className="font-bold text-xl sm:text-2xl md:text-lg lg:text-xl  xl:text-3xl">332</h2>
                                        <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-base">Home Fee</p>
                                    </div>
                                </div>
                                {/* item 2 */}


                            </div>
                        </div>
                    </div>


                    {/* list to-late  */}
                    <div className="w-full md:w-8/12 ps-2 mt-5 md:mt-0">

                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-3 lg:gap-2 xl:gap-2">
                            {/* i1 */}
                            {
                                card.map((data,index) => <div key={index} className="p-s relative drop-shadow-md w-full h-28 sm:h-40 md:h-36 lg:h-36 xl:h-40 overflow-hidden">
                                <img className="rounded shadow w-full h-full" src={data.image} alt="" />

                                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 mb-2">
                                    <p className=" text-white font-bold text-[11px] sm:text-[13px] md:text-sm lg:text-xs xl:text-sm">{data.title}</p>
                                    <span className="flex items-center bg-green-400 text-black p-1 rounded font-semibold"> <span className="text-[10px] sm:text-xs md:text-[10px] lg:text-[9px] xl:text-xs">Approved</span> <CiCircleCheck className="text-[10px] sm:text-xs md:text-[10px] lg:text-[9px] xl:text-xs" /></span>
                                </div>
                                {/* edit  */}
                                <div className="absolute top-0 right-0 pe-2 pt-2">
                                    <details className="dropdown dropdown-left ">
                                        <summary className="btn btn-sm btn-ghost"> <CiMenuKebab className="text-black" /></summary>
                                        <ul className="menu dropdown-content bg-base-100 rounded z-[1]  shadow">
                                            <li onClick={() => document.getElementById('my_modal_3').showModal()}><a>Edit</a></li>
                                            <li onClick={delateTolet} className="text-red-500"><a>Delate</a></li>
                                        </ul>
                                    </details>

                                </div>
                            </div>)
                            }
                            {/* i1 */}
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}

export default MyJobs
