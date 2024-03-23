import { useEffect, useState } from "react";
import product from "../image/product.jpg";

export default function Product() {
  return (
    <>
      <div className=''>
        <img src={product} alt='' />
        <div className='flex justify-content-between mt-[10px]'>
          <h6 style={{ fontWeight: "bold" }}>Round Dingning table</h6>
          <span style={{ fontWeight: "bold" }}>$55</span>
        </div>
        <span>Bed Table</span>
        <button
          className=' mt-[10px]'
          style={{
            width: "100%",
            height: "49px",
            color: "black",
            border: "1px solid black",
            borderRadius: "10px",
          }}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
