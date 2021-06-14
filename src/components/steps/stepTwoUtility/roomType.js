import React from "react";
import { Row, Col } from "react-bootstrap";

function roomType(props) {
  return (
    <label>
      <input
        type='radio'
        name='room_type'
        className='card-input-element'
        value={props.room.id}
        onChange={props.roomSelectedOnChange}
        defaultChecked={localStorage.getItem("room_type") == props.room.id}
      />

      <div className='panel panel-default card-input p-2 border rounded'>
        <span className='panel-heading h5'>{props.room.title}</span>
        <picture>
          <source srcSet={props.room.photo} type='image/svg+xml' />
          <img
            src={props.room.photo}
            className='img-fluid img-thumbnail'
            alt={props.room.description}
          />
        </picture>
        <Row className='w-100'>
          <Col>
            <div className='panel-body'>
              <span className='h6'>{props.date_diff_days + " Gün"}</span>
              <br />
              <span className='h6'>
                {localStorage.getItem("adult") + " Yetişkin"}
              </span>
            </div>
          </Col>
          <Col>
            <div className='panel-body h4 m-1 text-success text-center'>
              {props.calc_price(
                props.room.price,
                props.date_diff_days,
                localStorage.getItem("adult")
              ) + "TL"}
            </div>
          </Col>
        </Row>
      </div>
    </label>
  );
}

export default roomType;
