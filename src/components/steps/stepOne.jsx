import React, { Component } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Picker from "./stepOneUtility/picker";
import SelectHotel from "./stepOneUtility/SelectHotel";
import InputNumberBox from "./stepOneUtility/InputNumberBox";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class StepOne extends Component {
  render() {
    const {
      listOfHotels,
      selectedHotel,
      hotelOnChange,
      hotelOnSearch,
      pickerEndOnChange,
      pickerStartOnChange,
      adultInputNumberOnChange,
      childInputNumberOnChange,
      adult,
      child,
    } = this.props;

    return (
      <div className='border rounded mt-5  '>
        <Container>
          <Row className='w-100 justify-content-center text-center m-auto pb-4'>
            <Col xs='12' md='12' lg='12' className='p-4'>
              <SelectHotel
                listOfHotels={listOfHotels}
                hotelOnChange={hotelOnChange}
                hotelOnSearch={hotelOnSearch}
                defaultValue={localStorage.getItem("hotel_id")}
              />
            </Col>

            <Col xs='12' md='12' lg='3' className=' border rounded p-4 m-1'>
              <p className='font-weight-bold'>Giriş ve Çıkış Tarihi</p>
              <Picker
                name='start_date'
                pickerOnChange={pickerStartOnChange}
                start_date={localStorage.getItem("start_date")}
                end_date={localStorage.getItem("end_date")}
              />
            </Col>
            <Col xs='12' md='12' lg='3' className=' border rounded p-4 m-1'>
              <p className='font-weight-bold'>Giriş ve Çıkış Tarihi</p>
              <Picker
                name='end_date'
                pickerOnChange={pickerEndOnChange}
                start_date={localStorage.getItem("start_date")}
                end_date={localStorage.getItem("end_date")}
              />
            </Col>
            <Col xs='12' md='6' lg='2' className=' border rounded p-4 m-1'>
              <p className='font-weight-bold'>Yetişkin Sayısı</p>
              <InputNumberBox
                min={1}
                max={selectedHotel && selectedHotel.max_adult_size}
                defaultValue={
                  localStorage.getItem("adult")
                    ? localStorage.getItem("adult")
                    : 1
                }
                // value={localStorage.getItem("adult") === 1 ? 1 : null}
                disabled={false}
                inputNumberOnChange={adultInputNumberOnChange}
                adult={adult}
              />
            </Col>

            <Col xs='12' md='6' lg='2' className=' border rounded p-4 m-1'>
              <p className='font-weight-bold'>Çocuk Sayısı</p>
              <InputNumberBox
                min={0}
                max={5}
                defaultValue={
                  localStorage.getItem("child")
                    ? localStorage.getItem("child")
                    : 0
                }
                disabled={selectedHotel && !selectedHotel.child_status}
                inputNumberOnChange={childInputNumberOnChange}
                child={child}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listOfHotels: state.listOfHotels,
  detailsOfHotels: state.detailsOfHotels,
  selectedHotel: state.selectedHotel,
});

export default connect(mapStateToProps, {})(withRouter(StepOne));
