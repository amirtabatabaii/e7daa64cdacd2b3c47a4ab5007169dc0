import React, { Component } from "react";
import "./steps.css";
import { setSelectedHotel } from "../../redux/action";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { EditHotelBookingApi } from "../../utility/apiUrl";
import StepsBar from "./stepThreeUtility/StepsBar";
import CalcPrice from "./stepThreeUtility/calcPriceDetail";
import {
  step1Validator,
  step2Validator,
  notification_with_icon,
  pickerEndOnChange,
  pickerStartOnChange,
  adultInputNumberOnChange,
  childInputNumberOnChange,
  roomSelectedOnChange,
  addDataToLocalStorage,
  find_hotel_name,
  find_room_type_scenic,
  find_room_price,
  find_room_percentage,
  date_diff_indays,
  calc_price,
  calc_end_price,
} from "../../utility/utility";
import { Row, Col, Container } from "react-bootstrap";
import AllSelectedHotelDetail from "./stepThreeUtility/allDetail";
import Info from "./stepUtility/Info";
import addLogo from "../../assets/add_logo.png";

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = { startingStep: 0, is_posted: false, posted_id: "" };
  }

  componentWillMount() {
    this.props.setSelectedHotel(
      this.props.detailsOfHotels.find(
        (htl) => htl.hotel_id == localStorage.getItem("hotel_id")
      )
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.newReserve !== prevProps.newReserve) {
      localStorage.clear();
      this.setState(
        {
          startingStep: 0,
          is_posted: false,
          posted_id: "",
        },
        () => window.location.reload()
      );
    }
  }

  hotelOnChange = (value) => {
    this.props.setSelectedHotel(
      this.findHotelFilteredById(this.props.detailsOfHotels, value)
    );
    addDataToLocalStorage("hotel_id", value);
    addDataToLocalStorage("adult", 1);
    addDataToLocalStorage("child", 0);
  };

  hotelOnSearch = (val) => {
    this.props.setSelectedHotel(
      this.findHotelFilteredById(this.props.detailsOfHotels, val)
    );
    addDataToLocalStorage("hotel_id", val);
  };

  findHotelFilteredById = (array, id) => {
    return (
      array &&
      array.find((htl) => {
        return htl.hotel_id == id;
      })
    );
  };

  onFormSubmit = () => {
    if (
      !localStorage.getItem("crdt_number") ||
      !localStorage.getItem("crdt_name") ||
      !localStorage.getItem("crdt_month") ||
      !localStorage.getItem("crdt_year") ||
      !localStorage.getItem("crdt_cvv")
    )
      notification_with_icon(
        "error",
        "Bilgilerde Eksik var",
        "Lutfen Bilgileri tam giriniz!"
      );
    else {
      if (!this.state.posted_id) {
        axios
          .post(EditHotelBookingApi, {
            hotel_id: Number(localStorage.getItem("hotel_id")),
            start_date: localStorage.getItem("start_date"),
            end_date: localStorage.getItem("end_date"),
            adult: Number(localStorage.getItem("adult")),
            child: Number(localStorage.getItem("child")),
            room_type: Number(localStorage.getItem("room_type")),
            room_scenic: Number(localStorage.getItem("room_scenic")),
            price: Number(localStorage.getItem("price")),
            coupon_code: localStorage.getItem("coupon_code")
              ? localStorage.getItem("coupon_code")
              : "",
            card_name: localStorage.getItem("crdt_name"),
            card_number: localStorage.getItem("crdt_number"),
            card_date_month: localStorage.getItem("crdt_month"),
            card_date_year: localStorage.getItem("crdt_year"),
            card_cvv: localStorage.getItem("crdt_cvv"),
          })
          .then((res) => {
            if (res.status === 201) {
              // console.log(res);
              this.setState({
                is_posted: true,
                posted_id: res.data.id,
              });
            }
          });
      }
      if (this.state.posted_id) {
        axios
          .put(EditHotelBookingApi + `/${this.state.posted_id}`, {
            hotel_id: Number(localStorage.getItem("hotel_id")),
            start_date: localStorage.getItem("start_date"),
            end_date: localStorage.getItem("end_date"),
            adult: Number(localStorage.getItem("adult")),
            child: Number(localStorage.getItem("child")),
            room_type: Number(localStorage.getItem("room_type")),
            room_scenic: Number(localStorage.getItem("room_scenic")),
            price: Number(localStorage.getItem("price")),
            coupon_code: localStorage.getItem("coupon_code"),
            card_name: localStorage.getItem("crdt_name"),
            card_number: localStorage.getItem("crdt_number"),
            card_date_month: localStorage.getItem("crdt_month"),
            card_date_year: localStorage.getItem("crdt_year"),
            card_cvv: localStorage.getItem("crdt_cvv"),
          })
          .then((res) => {
            if (res.status === 200) {
              // console.log(res);
              this.setState({
                is_posted: true,
                posted_id: res.data.id,
              });
            }
          });
      }
    }
  };

  handleNew = () => {
    localStorage.clear();
    this.setState({
      startingStep: 0,
      is_posted: false,
      posted_id: "",
    });
  };

  handleDelete = () => {
    axios
      .delete(EditHotelBookingApi + `/${this.state.posted_id}`)
      .then((res) => {
        if (res.status === 200) {
          this.handleNew();
          notification_with_icon(
            "success",
            "Reservasyon İptal",
            "Reservasyonu Başarıyla İptal Edildi!"
          );
        }
      });
  };

  handleEdit = () => {
    this.setState({
      startingStep: 0,
      is_posted: false,
    });
  };

  render() {
    const { is_posted, startingStep, posted_id } = this.state;
    const { listOfHotels, selectedHotel } = this.props;

    return (
      <div className='p-2'>
        {!is_posted && (
          <StepsBar
            onFormSubmit={this.onFormSubmit}
            adultInputNumberOnChange={adultInputNumberOnChange}
            childInputNumberOnChange={childInputNumberOnChange}
            pickerEndOnChange={pickerEndOnChange}
            pickerStartOnChange={pickerStartOnChange}
            hotelOnSearch={this.hotelOnSearch}
            hotelOnChange={this.hotelOnChange}
            step1Validator={step1Validator}
            roomSelectedOnChange={roomSelectedOnChange}
            step2Validator={step2Validator}
            startingStep={startingStep}
          />
        )}

        {is_posted && (
          <Container>
            <Row className='border rounded mb-3 p-3'>
              <Info
                addLogo={addLogo}
                handleNew={this.handleNew}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
                posted_id={posted_id}
              />
            </Row>
            <Row className='bg-light'>
              {listOfHotels.length > 0 && selectedHotel && (
                <AllSelectedHotelDetail
                  find_hotel_name={find_hotel_name}
                  listOfHotels={listOfHotels}
                  selectedHotel={selectedHotel}
                  find_room_type_scenic={find_room_type_scenic}
                />
              )}
            </Row>
            <Row className='bg-light'>
              <Col className='rounded bg-white p-2 m-3'>
                {listOfHotels.length > 0 && selectedHotel && (
                  <CalcPrice
                    selectedHotel={selectedHotel}
                    find_room_price={find_room_price}
                    find_room_percentage={find_room_percentage}
                    date_diff_indays={date_diff_indays}
                    calc_price={calc_price}
                    calc_end_price={calc_end_price}
                    coupon_code={localStorage.getItem("coupon_code")}
                    coupon_code_discount={localStorage.getItem("code_discount")}
                  />
                )}
              </Col>
            </Row>
          </Container>
        )}
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
  withRouter(Steps)
);
