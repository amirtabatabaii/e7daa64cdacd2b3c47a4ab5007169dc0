import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Divider } from "antd";

function calcPrice(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col className='p-2 d-flex justify-content-between'>
            <div>Oda Fiyatı</div>
            <div>
              {props
                .find_room_price(
                  props.selectedHotel.room_type,
                  localStorage.getItem("room_type")
                )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " TL"}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='p-2 d-flex justify-content-between'>
            <div>Fiyat Etki Oranı</div>
            <div>
              {"%" +
                props.find_room_percentage(
                  props.selectedHotel.room_scenic,
                  localStorage.getItem("room_scenic")
                )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='p-2 d-flex justify-content-between'>
            <div>
              Konaklama (
              {props.date_diff_indays(
                localStorage.getItem("start_date"),
                localStorage.getItem("end_date")
              ) + " GÜN"}
              )
            </div>

            <div>
              {props.calc_price(
                props.find_room_price(
                  props.selectedHotel.room_type,
                  localStorage.getItem("room_type")
                ),
                props.date_diff_indays(
                  localStorage.getItem("start_date"),
                  localStorage.getItem("end_date")
                ),
                localStorage.getItem("adult")
              )}
            </div>
          </Col>
        </Row>
        <Row>
          {props.coupon_code && (
            <Col className='p-2 d-flex justify-content-between'>
              <div>
                İndirim
                {`(${props.coupon_code})`}
              </div>
              <div>{`-${props.coupon_code_discount}`}</div>
            </Col>
          )}
        </Row>
      </Container>
      <Divider />
      <h5 className='text-center'>TOPLAM TUTAR</h5>
      <h2 className='text-center'>
        {props
          .calc_end_price(
            props.find_room_price(
              props.selectedHotel.room_type,
              localStorage.getItem("room_type")
            ),
            props.date_diff_indays(
              localStorage.getItem("start_date"),
              localStorage.getItem("end_date")
            ),
            localStorage.getItem("adult"),
            props.find_room_percentage(
              props.selectedHotel.room_scenic,
              localStorage.getItem("room_scenic")
            ),
            props.coupon_code_discount
          )
          .toString()
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + " TL"}
      </h2>
    </div>
  );
}

export default calcPrice;
