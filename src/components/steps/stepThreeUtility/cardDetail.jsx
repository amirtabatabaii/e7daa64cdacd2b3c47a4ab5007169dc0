import React, { Component } from "react";
import { Input, Select } from "antd";
import { year, month } from "../../../utility/apiUrl";
import { Row, Col } from "react-bootstrap";

const { Option } = Select;

class cardDetail extends Component {
  render() {
    const {
      crdt_number,
      crdt_name,
      handleDateChange,
      handelInputChange,
      crdt_cvv,
    } = this.props;

    return (
      <fieldset className='scheduler-border'>
        <legend className='scheduler-border'>Kart Bilgileri</legend>

        <Row className='w-100 p-2 m-auto'>
          <label>Kart Numarası</label>
          <Input
            placeholder='Kart Numarasını Giriniz'
            name='crdt_number'
            type='text'
            pattern='[0-9]*'
            onChange={handelInputChange}
            maxLength='16'
            value={crdt_number}
          />
        </Row>

        <Row className='w-100 p-2 m-auto'>
          <label>Kartın Üzerindeki İsim</label>
          <Input
            placeholder='Kartın Üzerindeki İsim Giriniz'
            name='crdt_name'
            type='text'
            onChange={handelInputChange}
            maxLength={30}
            value={crdt_name}
          />
        </Row>

        <Row className='w-100 p-2 m-auto'>
          <Col lg={8}>
            <label>Kartın Son Kullanma Tarihi</label>
            <Select
              labelInValue
              placeholder='Ay'
              name='crdt_month'
              style={{ width: 100 }}
              onChange={handleDateChange}
            >
              {month.map((month, index) => (
                <Option key={index} value={index + 1}>
                  {month}
                </Option>
              ))}
            </Select>

            <Select
              labelInValue
              placeholder='Yıl'
              name='crdt_year'
              style={{ width: 100 }}
              onChange={handleDateChange}
            >
              {year.map((year, index) => (
                <Option key={index} value={year}>
                  {year}
                </Option>
              ))}
            </Select>
          </Col>
          <Col lg={4}>
            <label>CVV</label>
            <Input
              placeholder='CVV Giriniz'
              name='crdt_cvv'
              type='text'
              pattern='[0-9]*'
              onChange={handelInputChange}
              maxLength={3}
              value={crdt_cvv}
            />
          </Col>
        </Row>
      </fieldset>
    );
  }
}

export default cardDetail;
