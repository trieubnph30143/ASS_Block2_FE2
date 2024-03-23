import React from "react";
import logo from "../image/z5268627828943_96922bac34d1406d53e2d91d78f56a59.jpg";

type Props = {};

const Footer = () => {
  return (
    <div className='container mx-auto  mt-[100px]'>
      <div className=' flex justify-content-between align-items-start'>
        <div className='flex  gap-2 h-[32px]'>
          <img src={logo} alt='' />
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>Design</span>
        </div>
        <div className='w-[400px] flex justify-content-between align-items-end'>
          <div className=''>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "16px",
              }}>
              Categories
            </span>
            <ul className=' p-0 flex flex-column gap-2 mt-[20px]'>
              <li>Wall Art</li>
              <li>Vase</li>
              <li>Chart</li>
              <li>Teat Ketle</li>
              <li>Barkets</li>
            </ul>
          </div>
          <div className=''>
            <ul className='mt-[20px]  p-0 flex flex-column gap-2 '>
              <li>Wall Art</li>
              <li>Vase</li>
              <li>Chart</li>
              <li>Teat Ketle</li>
              <li>Barkets</li>
            </ul>
          </div>
          <div className=''>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "16px",
              }}>
              About
            </span>
            <ul className='mt-[20px] p-0 flex flex-column gap-2 '>
              <li>Wall Art</li>
              <li>Vase</li>
              <li>Chart</li>
              <li>Teat Ketle</li>
              <li>Barkets</li>
            </ul>
          </div>
        </div>
        <div className='w-[500px]'>
          <span style={{ fontWeight: "bold", fontSize: "16px" }}>Subcribe</span>
          <p style={{ margin: "20px 0" }}>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className='flex justify-content-between'>
            <input
              style={{
                width: "345px",
                height: "48px",
                border: "1px solid black",
                outline: "none",
                borderRadius: "5px",
                padding: "0 10px",
              }}
              placeholder='Enter Your Email'
              type='text'
            />
            <button
              style={{
                width: "119px",
                height: "48px",
                border: "1px solid black",
                outline: "none",
                borderRadius: "5px",
                padding: "0 10px",
              }}>
              Subcribe
            </button>
          </div>
          <p style={{ margin: "20px 0", fontSize: "14px" }}>
            Join our newsletter to stay up to date on features and releases.
          </p>
        </div>
      </div>
      <div
        className='mt-[50px] flex justify-content-between'
        style={{ borderTop: "2px solid grey", padding: "20px 0" }}>
        <div className=' flex gap-3'>
          <span>2023 Relume. All right reserved.</span>
          <span style={{ textDecoration: "underline" }}>Privacy Policy</span>
          <span style={{ textDecoration: "underline" }}>Terms of Service</span>
          <span style={{ textDecoration: "underline" }}>Cookies Settings</span>
        </div>
        <div className='flex gap-3'>
          <i className='fa-brands fa-facebook-f'></i>
          <i className='fa-brands fa-instagram'></i>
          <i className='fa-brands fa-twitter'></i>
          <i className='fa-brands fa-linkedin'></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
