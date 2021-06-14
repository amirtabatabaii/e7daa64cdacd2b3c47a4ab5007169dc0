import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class allDetail extends Component {
  render() {
    const {
      find_hotel_name,
      listOfHotels,
      find_room_type_scenic,
      selectedHotel,
    } = this.props;

    return (
      <Container>
        <Row className='m-auto justify-content-center text-center'>
          <Col className='rounded bg-white p-2 m-2'>
            <span className='h5'>
              {find_hotel_name(listOfHotels, localStorage.getItem("hotel_id"))}
            </span>
            <span className='h6 m-2'>({selectedHotel.city})</span>
          </Col>
        </Row>

        <Row className='m-auto justify-content-center text-center'>
          <Col className='rounded bg-white p-1 m-2'>
            <b>Giriş Tarihi:</b>
            <p>{localStorage.getItem("start_date")}</p>
          </Col>
          <Col className='rounded bg-white p-1 m-2'>
            <b>Çıkış Tarihi:</b>
            <p>{localStorage.getItem("end_date")}</p>
          </Col>
        </Row>
        <Row className='m-auto justify-content-center text-center'>
          <Col className='rounded bg-white p-1 m-2'>
            <b>Yetişkin:</b>
            <p>{localStorage.getItem("adult")}</p>
          </Col>
          <Col className='rounded bg-white p-1 m-2'>
            <b>Çocuk:</b>
            <p>{localStorage.getItem("child")}</p>
          </Col>
        </Row>
        <Row className='m-auto justify-content-center text-center'>
          <Col className='rounded bg-white p-1 m-2'>
            <b>Oda Tipi:</b>
            <p>
              {find_room_type_scenic(
                selectedHotel.room_type,
                localStorage.getItem("room_type")
              )}
            </p>
          </Col>
          <Col className='rounded bg-white p-1 m-2'>
            <b>Manzara:</b>
            <p>
              {find_room_type_scenic(
                selectedHotel.room_scenic,
                localStorage.getItem("room_scenic")
              )}
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default allDetail;
