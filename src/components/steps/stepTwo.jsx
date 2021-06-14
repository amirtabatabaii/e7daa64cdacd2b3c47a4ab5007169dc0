import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SelectedHotelInfo from "./stepTwoUtility/selectedHotelInfo";
import RoomType from "./stepTwoUtility/roomType";
import RoomScenic from "./stepTwoUtility/roomScenic";
import { Divider } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import { setSelectedHotel } from "../../redux/action";
import {
  date_diff_indays,
  calc_price,
  find_hotel_name,
} from "../../utility/utility";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel_name: "",
      date_diff_days: 0,
      total_price: 0,
    };
  }

  componentWillMount() {
    this.setState({
      hotel_name: find_hotel_name(
        this.props.listOfHotels,
        localStorage.getItem("hotel_id")
      ),
      date_diff_days: date_diff_indays(
        localStorage.getItem("start_date"),
        localStorage.getItem("end_date")
      ),
    });

    this.props.setSelectedHotel(
      this.props.detailsOfHotels.find(
        (htl) => htl.hotel_id == localStorage.getItem("hotel_id")
      )
    );
  }

  render() {
    const { hotel_name, date_diff_days } = this.state;
    const { selectedHotel, roomSelectedOnChange } = this.props;

    return (
      <div className='mt-5'>
        <SelectedHotelInfo
          hotel_name={hotel_name}
          hotel_city={selectedHotel && selectedHotel.city}
          hotel_possibilities={selectedHotel && selectedHotel.possibilities}
        />

        {/* <div className='border rounded mx-auto my-3 p-3 w-75 justify-content-center bg-light'> */}
        <div className='border rounded mx-auto my-3 justify-content-center bg-light'>
          <Divider orientation='left'>
            <h5>Oda Tipi Seçimi</h5>
          </Divider>

          <Container className='container-card'>
            <Row>
              {selectedHotel &&
                selectedHotel.room_type.map((room, index) => (
                  <Col className='col-md-4 col-lg-4 col-sm-12' key={index}>
                    <RoomType
                      room={room}
                      date_diff_days={date_diff_days}
                      calc_price={calc_price}
                      roomSelectedOnChange={roomSelectedOnChange}
                    />
                  </Col>
                ))}
            </Row>
          </Container>
        </div>

        {/* <div className='border rounded mx-auto my-3 p-3 w-75 justify-content-center bg-light'> */}
        <div className='border rounded mx-auto my-3 justify-content-center bg-light'>
          <Divider orientation='left'>
            <h5>Manzara Seçimi</h5>
          </Divider>

          <Container className='container-card'>
            <Row>
              {selectedHotel &&
                selectedHotel.room_scenic.map((room, index) => (
                  <Col className='col-md-4 col-lg-4 col-sm-12' key={index}>
                    <RoomScenic
                      room={room}
                      roomSelectedOnChange={roomSelectedOnChange}
                    />
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listOfHotels: state.listOfHotels,
  detailsOfHotels: state.detailsOfHotels,
  selectedHotel: state.selectedHotel,
});

export default connect(mapStateToProps, { setSelectedHotel })(
  withRouter(StepTwo)
);
