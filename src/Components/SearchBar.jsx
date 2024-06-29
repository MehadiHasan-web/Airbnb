import { useState } from "react";
import "../assets/search.css";
import { FaSearch } from "react-icons/fa";
import Example from "./Example.jsx";


const SearchBar = () => {
  // const [activeDiv, setActiveDiv] = useState(null);
  // const handleDivClick = (e) => {
  //     let className = e.target.classList.add('shadow-md', 'bg-gray-100');
  // };
  // const handleDivClick = (divId) => {
  //     setActiveDiv(divId);
  // };


  const [searchOpen, setSearchOpen] = useState(false);

  return (
    // <div>
    //     <div className="grid grid-cols-3 content-center xl:w-[850px] xl:h-[60px]   rounded-full bg-slate-200 shadow border-[1px] border-slate-300 ">
    //         {/* search input  */}
    //         <div id='div1' onClick={() => handleDivClick('div1')} className={`h-[60px] hover:bg-slate-300 rounded-full hover:cursor-pointer nav-box  ${activeDiv === 'div1' ? 'shadow-md bg-gray-100 hover:bg-gray-100' : ''}`}  >

    //             <div className="relative group w-full h-full">
    //                 <div className='px-4'>
    //                     <span>Where</span> <br />
    //                     <input type="text" name="" id="" placeholder='hi' className='input input-ghost input-sm border-0 ' />

    //                 </div>
    //                 <div className="absolute bottom-0 group-hover:-bottom-[40px] transition-all ease-in-out group-hover:duration-500 hidden group-hover:flex w-[30rem] ">
    //                     <div
    //                         className="z-0 whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white   text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none w-full h-full">
    //                         <h3 className="font-sans font-normal text-sm py-2 px-5">
    //                             Awesome ❤</h3>
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>

    //         <div className='h-[60px]  grid grid-cols-2 gap-1 '>
    //             {/* select city  */}
    //             <div id='div2' onClick={() => handleDivClick('div2')} className={`h-[60px] hover:bg-slate-300 rounded-full hover:cursor-pointer nav-box group ${activeDiv === 'div2' ? 'shadow-md bg-gray-100 hover:bg-gray-100' : ''}`}  >

    //                 <div className='px-2'>
    //                     <span className='ps-1 text-black'>City</span>

    //                     <select className={`w-full rounded-full focus:outline-none group-hover:gb-slate-300   ${activeDiv === 'div2' ? ' bg-gray-100 ' : 'bg-slate-200 hover:bg-slate-300'} `} >
    //                         <option selected>Dhaka</option>
    //                         <option>Chittagong</option>
    //                         <option>Cumilla</option>
    //                         <option>Bandorbon</option>
    //                         <option>Planet of the Apes</option>
    //                         <option>Star Trek</option>
    //                     </select>
    //                 </div>

    //             </div>
    //             {/* area  */}
    //             <div id='div3' onClick={() => handleDivClick('div3')} className={`h-[60px] hover:bg-slate-300 rounded-full hover:cursor-pointer nav-box group ${activeDiv === 'div3' ? 'shadow-md bg-gray-100 hover:bg-gray-100' : ''}`}  >

    //                 <div className='px-2'>
    //                     <span className='ps-1 text-black'>Area</span>

    //                     <select className={`w-full rounded-full focus:outline-none group-hover:gb-slate-300   ${activeDiv === 'div3' ? ' bg-gray-100 ' : 'bg-slate-200 hover:bg-slate-300'} `} >
    //                         <option selected>Mirpur</option>
    //                         <option>Karon Bazar</option>
    //                         <option>Karon Bazar</option>
    //                         <option>Karon Bazar</option>
    //                     </select>
    //                 </div>

    //             </div>

    //         </div>
    //         <div id='div4' onClick={() => handleDivClick('div4')} className={`h-[60px] hover:bg-slate-300 rounded-full hover:cursor-pointer nav-box ${activeDiv === 'div4' ? 'shadow-md bg-gray-100 hover:bg-gray-100' : ''}`} >
    //             <div className='flex justify-between px-1 h-full w-full items-center'>
    //                 <div>hi</div>
    //                 <div>
    //                     <button className="bookmarkBtn">
    //                         <span className="IconContainer">
    //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 icon">
    //                                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    //                             </svg>

    //                         </span>
    //                         <p className="text">Search</p>
    //                     </button>

    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    // </div >
    <div className="overflow-hidden">
    <div className="w-full overflow-hidden">
      <div className="bg-slate-200 w-full rounded-full ">
        <ul className="flex items-center">
          <li>
          <Example></Example>
          </li>
          <li>
            <select className="select select-bordered w-40 h-[60px] rounded-full px-3 focus:outline-none font-bold text-base">
            <option disabled selected>Country</option>
            <option>Chittagong</option>
            <option>Dhaka</option>
            <option>Cumilla</option>
            <option>Chandpur</option>
            <option>Feni</option>
            </select>
          </li>
          <li className="relative" onClick={() => {setSearchOpen(!searchOpen)}}>
            <input
              type="text"
              placeholder="search destination"
              className="input input-bordered focus:outline-none  input-lg w-full rounded-full text-sm"
            />
            <h3 className="text-black absolute top-1 left-7 text-[13px]">
              Where
            </h3>
            <span className="absolute top-2 right-1 bg-pink-600 p-1 rounded-full flex justify-center items-center w-12 h-3/4">
                <FaSearch className="text-xl text-white"></FaSearch>
                {/* <span>Search</span> */}
            </span>
          </li>
        </ul>
      </div>
    </div>
    {/* searchOpen section start */}
    <span className={` ${searchOpen ? 'fixed' : 'hidden'} bg-white rounded-lg overflow-hidden z-50 xl:w-1/2 mt-2 shadow-lg xl:p-5 duration-500`}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe recusandae ipsum adipisci voluptates consequatur ipsa assumenda iste ratione impedit culpa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe recusandae ipsum adipisci voluptates consequatur ipsa assumenda iste ratione impedit culpa!</p>
    </span>
    {/* searchOpen section end */}
    </div>
    
  );
};

export default SearchBar;
