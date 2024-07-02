
import { BsHouseAdd, BsHouse } from "react-icons/bs";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import { IoMdBed } from "react-icons/io";
import { MdOutlineBathroom, MdOutlineBalcony, MdOutlineCategory } from "react-icons/md";
import { GiFloorHatch } from "react-icons/gi";
import { SiPrivatedivision } from "react-icons/si";
import { CiMap } from "react-icons/ci";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { PiMapPinAreaThin } from "react-icons/pi";



const AddProperty = () => {


    // submit function 
    const submitFunction = (e) => {
        e.preventDefault();
        let form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        console.log(description)
    };


    const [files, setFiles] = useState([]);
    const [fileDragging, setFileDragging] = useState(null);
    const [fileDropping, setFileDropping] = useState(null);

    const humanFileSize = (size) => {
        const i = Math.floor(Math.log(size) / Math.log(1024));
        return `${(size / Math.pow(1024, i)).toFixed(2) * 1} ${['B', 'kB', 'MB', 'GB', 'TB'][i]}`;
    };

    const removeFile = (index) => {
        let updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        let updatedFiles = [...files];
        const droppedIndex = Number(fileDropping);
        const draggingIndex = Number(fileDragging);

        const [removed] = updatedFiles.splice(draggingIndex, 1);
        updatedFiles.splice(droppedIndex, 0, removed);

        setFiles(updatedFiles);
        setFileDragging(null);
        setFileDropping(null);
    };

    const handleDragEnter = (e, index) => {
        e.preventDefault();
        setFileDropping(index);
    };

    const handleDragStart = (e, index) => {
        setFileDragging(index);
        e.dataTransfer.effectAllowed = 'move';
    };

    const loadFile = (file) => {
        return URL.createObjectURL(file);
    };

    const handleFileChange = (e) => {
        const newFiles = [...files, ...Array.from(e.target.files)];
        setFiles(newFiles);
    };


    return (
        <>
            {/* property section */}
            <div className="join">
                {/* <button className="btn btn-xx sm:btn-sm md:btn-xs lg:btn-sm join-item btn-outline font-bold" onClick={() => document.getElementById('my_modal_3').showModal()}>
                    <BsHouseAdd className="text-xs sm:text-base xl:text-2xl" /> Add Property
                </button> */}
                <button className="btn btn-sm join-item btn-outline font-bold" onClick={() => document.getElementById('my_modal_3').showModal()}>
                    <BsHouseAdd className="text-xs sm:text-base xl:text-2xl" /> Add Property
                </button>
                <button className="btn btn-xx sm:btn-sm md:btn-x1 lg:btn-sm join-item btn-outline ">Button</button>
                <button className="btn btn-xx sm:btn-sm md:btn-x1 lg:btn-sm join-item btn-outline">Button</button>
            </div>

            {/* add property modal  */}
            <dialog id="my_modal_3" className="modal overflow-hidden">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Upload Toelate</h3>

                    <form onSubmit={submitFunction}>
                        {/* multiple image upload start   */}
                        <div className="bg-white rounded w-12/12 mx-auto my-2">
                            <div className="relative flex flex-col p-4 text-gray-400 border border-gray-200 rounded">
                                <div className="relative flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer"
                                    onDrop={handleDrop}
                                    onDragOver={(e) => e.preventDefault()}>

                                    <input accept="*" type="file" multiple
                                        className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
                                        onChange={handleFileChange}
                                        title="" />

                                    <div className="flex flex-col items-center justify-center py-10 text-center">
                                        <svg className="w-6 h-6 mr-1 text-current-50" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="m-0">Drag your files here or click in this area.</p>
                                    </div>
                                </div>

                                {files.length > 0 && (
                                    <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3">
                                        {files.map((file, index) => (
                                            <div key={index}
                                                className={`relative flex flex-col items-center overflow-hidden text-center bg-gray-100 border rounded cursor-move select-none   ${fileDragging === index ? 'border-blue-600' : ''}`}
                                                style={{ paddingTop: '100%' }}
                                                onDragStart={(e) => handleDragStart(e, index)}
                                                onDragEnd={() => setFileDragging(null)}
                                                draggable="true">

                                                <button className="absolute top-0 right-0 z-50 p-1 bg-white rounded-bl focus:outline-none"
                                                    type="button"
                                                    onClick={() => removeFile(index)}>
                                                    <svg className="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>

                                                {file.type.includes('audio/') && (
                                                    <svg className="absolute w-12 h-12 text-gray-400 transform top-1/2 -translate-y-2/3"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                                    </svg>
                                                )}

                                                {file.type.includes('application/') && (
                                                    <svg className="absolute w-12 h-12 text-gray-400 transform top-1/2 -translate-y-2/3"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                    </svg>
                                                )}

                                                {file.type.includes('image/') && (
                                                    <img className="absolute inset-0 z-0 object-cover w-full h-full border-4 border-white preview"
                                                        src={loadFile(file)} alt={file.name} />
                                                )}

                                                {file.type.includes('video/') && (
                                                    <video className="absolute inset-0 object-cover w-full h-full border-4 border-white pointer-events-none preview">
                                                        <source src={loadFile(file)} type="video/mp4" />
                                                    </video>
                                                )}

                                                <div className="absolute bottom-0 left-0 right-0 flex flex-col p-2 text-xs bg-white bg-opacity-50">
                                                    <span className="w-full font-bold text-gray-900 truncate">{file.name}</span>
                                                    <span className="text-xs text-gray-900">{humanFileSize(file.size)}</span>
                                                </div>

                                                <div className={`absolute inset-0 z-40 transition-colors duration-300 ${fileDropping === index && fileDragging !== index ? 'bg-blue-200 bg-opacity-80' : ''}`}
                                                    onDragEnter={(e) => handleDragEnter(e, index)}
                                                    onDragLeave={() => setFileDropping(null)}>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* multiple image upload end  */}

                        <div className="grid grid-cols-2 gap-2 mb-2">
                            {/* i 1 */}
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text  flex items-center"><IoMdBed className="me-2 text-xl" /> Bedroom</span>
                                </div>
                                <select className="select select-bordered ">
                                    <option disabled selected>Pick one</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </label>
                            {/* i 1 */}
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text  flex items-center"><MdOutlineBathroom className="me-2 text-xl" /> Bathroom</span>
                                </div>
                                <select className="select select-bordered ">
                                    <option disabled selected>Pick one</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </label>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-2">
                            {/* i 1 */}
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text  flex items-center"><MdOutlineBalcony className="me-2 text-xl" /> Balcony </span>
                                </div>
                                <select className="select select-bordered ">
                                    <option disabled selected>Pick one</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </label>
                            {/* i 1 */}
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text flex items-center"><GiFloorHatch className="me-2 text-xl" /> Floor No</span>
                                </div>
                                <select className="select select-bordered ">
                                    <option disabled selected>Pick one</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </label>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-2">
                            {/* i 1 */}
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text  flex items-center"><MdOutlineCategory className="me-2 text-xl" /> Category </span>
                                </div>
                                <select className="select select-bordered ">
                                    <option disabled selected>Pick one</option>
                                    <option>Family</option>
                                    <option>Bachelor</option>
                                </select>
                            </label>
                            {/* i 1 */}
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text flex items-center"><BsHouse className="me-2 text-xl" />Property Type</span>
                                </div>
                                <select className="select select-bordered ">
                                    <option disabled selected>Pick one</option>
                                    <option>House</option>
                                    <option>Office</option>
                                    <option>Seat</option>
                                    <option>Flat</option>
                                    <option>Room</option>
                                </select>
                            </label>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-2">
                            {/* i 1 */}
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text  flex items-center"><SiPrivatedivision className="me-2 text-xl" /> Division </span>
                                </div>
                                <select className="select select-bordered ">
                                    <option disabled selected>Pick one</option>
                                    <option>Dhaka</option>
                                    <option>Chittagong</option>
                                </select>
                            </label>
                            {/* i 1 */}
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text flex items-center"><CiMap className="me-2 text-xl" />District</span>
                                </div>
                                <select className="select select-bordered ">
                                    <option disabled selected>Pick one</option>
                                    <option>Dhaka</option>
                                    <option>Chittagong</option>
                                </select>
                            </label>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-2">
                            {/* i 1 */}
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text  flex items-center"><GiPoliceOfficerHead className="me-2 text-xl" /> Area / Thana </span>
                                </div>
                                <select className="select select-bordered ">
                                    <option disabled selected>Pick one</option>
                                    <option>Uttara</option>
                                </select>
                            </label>
                            {/* i 1 */}
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text flex items-center"><PiMapPinAreaThin className="me-2 text-xl" />Sub Area</span>
                                </div>
                                <select className="select select-bordered ">
                                    <option disabled selected>Pick one</option>
                                    <option>Baunia</option>
                                </select>
                            </label>
                        </div>



                        <label className="input input-bordered flex items-center gap-2 mt-2">
                            Title :
                            <input name="name" type="text" className="grow" placeholder="Write you title" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mt-2">
                            Phone :
                            <input name="name" type="text" className="grow" placeholder="Write you title" />
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


        </>
    )
}

export default AddProperty
