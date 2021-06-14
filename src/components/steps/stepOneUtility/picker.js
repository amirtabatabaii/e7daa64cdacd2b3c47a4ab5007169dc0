import React from "react";
import { DatePicker, Space } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

function picker(props) {
  return (
    <DatePicker
      onChange={props.pickerOnChange}
      defaultValue={
        props.name === "start_date" && props.start_date
          ? moment(props.start_date, "YYYY/MM/DD")
          : props.name === "end_date" && props.end_date
          ? moment(props.end_date, "YYYY/MM/DD")
          : ""
      }
    />
  );
}

export default picker;
