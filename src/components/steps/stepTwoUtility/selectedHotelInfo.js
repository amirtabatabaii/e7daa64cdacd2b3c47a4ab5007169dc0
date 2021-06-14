import React from "react";
import { Tag } from "antd";

function selectedHotelInfo(props) {
  return (
    // <div className='border rounded m-auto p-3 w-75 justify-content-center bg-light'>
    <div className='border rounded m-auto justify-content-center bg-light'>
      <div className='m-2'>
        <span className='h3'>{props.hotel_name}</span>
        <span className='h5 m-2'>({props.hotel_city})</span>
      </div>
      <div className='m-2'>
        {props.hotel_possibilities.map((tags, index) => (
          <Tag key={index} color='purple'>
            {tags}
          </Tag>
        ))}
      </div>
      <div className='m-2'>
        <span className='h6'>Giriş Tarihi</span>
        <span className='h7 m-2'>{localStorage.getItem("start_date")}</span>
        <span className='h6'>- Çıkış Tarihi</span>
        <span className='h7 m-2'>{localStorage.getItem("end_date")}</span>
        <span className='h6'>- Yetişkin:</span>
        <span className='h7 m-2'>{localStorage.getItem("adult")}</span>
        <span className='h6'>- Çocuk:</span>
        <span className='h7 m-2'>
          {localStorage.getItem("child") ? localStorage.getItem("child") : 0}
        </span>
      </div>
    </div>
  );
}

export default selectedHotelInfo;
