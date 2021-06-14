import React from "react";
import { InputNumber } from "antd";
import { Alert } from "antd";

function InputNumberBox(props) {
  return (
    <>
      <InputNumber
        name={props.name}
        size='large'
        disabled={props.disabled && localStorage.getItem("child")}
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
        onChange={props.inputNumberOnChange}
        // value={props.value}
      />
      {props.disabled && localStorage.getItem("child") && (
        <div className='m-2 rounded'>
          <Alert
            message='Çocuk ziyaretçi kabul edilmiyor!'
            type='error'
            showIcon
          />
        </div>
      )}
    </>
  );
}

export default InputNumberBox;
