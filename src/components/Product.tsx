import { useEffect, useState } from "react";
import product from "../image/product.jpg";
import { useNavigate } from "react-router-dom";

export default function Product({ item }: any) {
  const navigate = useNavigate();
  return (
    <>
      <div className='' onClick={() => navigate(`/detail/${item._id}`)}>
        <img src={item.image[0]} alt='' />
        <div className='flex justify-content-between mt-[10px]'>
          <h6 style={{ fontWeight: "bold" }}>{item.title}</h6>
          <span style={{ fontWeight: "bold" }}>${item.price}</span>
        </div>
        <span>{item.categoryId.name}</span>
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
