import React from "react";
import { Button, Form, Input } from "antd";
import { Row, Col, Container } from "react-bootstrap";

function codeSearch(props) {
  return (
    <Container>
      <Row className='w-100'>
        <Col className='rounded bg-white p-3 m-3'>
          <Form
            name='basic'
            onFinish={props.onCodeSearch}
            layout='inline'
            className='d-flex justify-content-around m-auto'
          >
            <Form.Item
              name='code'
              rules={[
                {
                  required: true,
                  message: "Kupon kodu Giriniz!",
                },
              ]}
            >
              <Input
                placeholder='Kupon kodu'
                defaultValue={localStorage.getItem("coupon_code")}
              />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Kodu Kullan
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default codeSearch;
