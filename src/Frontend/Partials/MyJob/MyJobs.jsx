import { useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import Swal from 'sweetalert2'



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
                <dialog id="my_modal_3" className="modal">
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
                <div className="flex mt-2">
                    <div className="w-4/12 ">
                        <div className="relative">
                            <img className="h-40 w-full object-cover rounded" src="https://images.unsplash.com/photo-1556691421-cf15fe27a0b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <img className="w-32 h-32 rounded-full object-cover  absolute bottom-[-50px] left-2 shadow-2xl" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="mt-14 ms-2 ">
                            <div className="flex justify-between mb-3">
                                <h2 className="font-bold text-2xl">Mehadi Hasan</h2>
                                <button className="btn btn-sm" onClick={() => document.getElementById('my_modal_3').showModal()}>Post Tolet <CiLocationArrow1 /></button>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, possimus?</p>
                            <div className="flex gap-6 items-center">
                                <span className="text-slate-400	" >@code</span>
                                <span className="flex items-center text-slate-400 "><CiLocationOn className="me-1" /> sun facebook</span>
                                <div className="rating rating-sm">
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
                                <div className="h-32 bg-slate-200 rounded shadow flex justify-center items-center">
                                    <div>
                                        <h2 className="font-bold text-4xl">332</h2>
                                        <p>Lorem, ipsum.</p>
                                    </div>
                                </div>
                                {/* item 1 */}
                                <div className="h-32 bg-slate-200 rounded shadow flex justify-center items-center">
                                    <div>
                                        <h2 className="font-bold text-4xl">332</h2>
                                        <p>Lorem, ipsum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* list tolate  */}
                    <div className="w-8/12 ps-2">

                        <div className="grid grid-cols-4 gap-4">
                            {/* i1 */}
                            <div className="p-s relative drop-shadow-md">
                                <img className="rounded shadow" src="https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 mb-2">
                                    <p className="  text-white font-bold">Lorem ipsum </p>
                                    <span className="flex items-center bg-green-400 text-black p-1 rounded font-semibold "> Approved <CiCircleCheck /></span>
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
                            </div>
                            {/* i1 */}
                            <div className="p-s relative drop-shadow-md">
                                <img className="rounded shadow" src="https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 mb-2">
                                    <p className="  text-white font-bold">Lorem ipsum </p>
                                    <span className="flex items-center bg-green-100 p-1 rounded"> Pending...</span>
                                </div>
                            </div>
                            {/* i1 */}
                            <div className="p-s relative drop-shadow-md">
                                <img className="rounded shadow" src="https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 mb-2">
                                    <p className="  text-white font-bold">Lorem ipsum </p>
                                    <span className="flex items-center bg-green-100 p-1 rounded"> Pending...</span>
                                </div>
                            </div>
                            {/* i1 */}
                            <div className="p-s relative drop-shadow-md">
                                <img className="rounded shadow" src="https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 mb-2">
                                    <p className="  text-white font-bold">Lorem ipsum </p>
                                    <span className="flex items-center bg-green-100 p-1 rounded"> Pending...</span>
                                </div>
                            </div>
                            {/* i1 */}
                            <div className="p-s relative drop-shadow-md">
                                <img className="rounded shadow" src="https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 mb-2">
                                    <p className="  text-white font-bold">Lorem ipsum </p>
                                    <span className="flex items-center bg-green-100 p-1 rounded"> Pending...</span>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>


            </div>

        </>
    )
}

export default MyJobs
