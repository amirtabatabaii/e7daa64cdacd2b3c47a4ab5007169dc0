import React from "react";
import { Row, Col } from "react-bootstrap";

function roomScenic(props) {
  return (
    <label>
      <input
        type='radio'
        name='room_scenic'
        className='card-input-element'
        value={props.room.id}
        onChange={props.roomSelectedOnChange}
        defaultChecked={localStorage.getItem("room_scenic") == props.room.id}
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
        <Row className='w-100 m-auto'>
          <Col className='m-2' lg={7}>
            <div className='panel-body'>
              <h6>Fiyata Etki Oranı</h6>
            </div>
          </Col>
          <Col>
            <div className='panel-body h5 m-1 text-danger'>
              {`+${props.room.price_rate}%`}
            </div>
          </Col>
        </Row>
      </div>
    </label>
  );
}

export default roomScenic;
