import { useRef, useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";

const SocialModal = () => {


  const copyFun = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  }

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Social Link</h3>
          <ul className="flex gap-5">
            <li>
              <FacebookShareButton
                url="https://yourwebsite.com"
                quote="Check out this amazing content!"
                hashtag="#react"
              >
                <button className="bg-black hover:bg-black text-white font-bold p-2 rounded">
                  <FaFacebookF className="text-xl"></FaFacebookF>
                </button>
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton
                url="https://yourwebsite.com"
                title="My awesome article"
              >
                <button className="bg-black hover:bg-black text-white font-bold p-2 rounded">
                  <FaTwitter className="text-xl"></FaTwitter>
                </button>
              </TwitterShareButton>
            </li>
            <li>
              <EmailShareButton
                url="https://yourwebsite.com"
                subject="Don't miss this!"
                body="This is a must-read!"
              >
                <button className="bg-black hover:bg-black text-white font-bold p-2 rounded">
                  <MdEmail className="text-xl"></MdEmail>
                </button>
              </EmailShareButton>
            </li>
          </ul>
          <ul className="mt-5 w-2/3 relative">
            <li className="flex gap-1 items-center">
              <input type="text" disabled readOnly className="w-full py-1 text-black" placeholder={`${window.location.href.slice(0,50)}`}></input>
              <button className="absolute right-0 bg-black white text-white p-1 rounded-md" onClick={copyFun}>Copy</button>
            </li>
          </ul>
        </div>
      </dialog>
    </>
  );
};

export default SocialModal;
