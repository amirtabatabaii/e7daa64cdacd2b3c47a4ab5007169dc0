import React from "react";
import { Select } from "antd";
const { Option } = Select;

function SelectHotel(props) {
  return (
    <Select
      showSearch
      style={{ width: "100%" }}
      size='large'
      className='justify-content-center'
      placeholder='Rezervasyon yapmak istediğiniz oteli seçiniz.'
      optionFilterProp='children'
      onChange={props.hotelOnChange}
      onSearch={props.hotelOnSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      defaultValue={props.defaultValue}
    >
      {props.listOfHotels.map((htl, index) => (
        <Option key={index} value={htl.id}>
          {htl.hotel_name}
        </Option>
      ))}
    </Select>
  );
}

export default SelectHotel;
