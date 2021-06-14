import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "antd";
import { Popconfirm } from "antd";

function info(props) {
  return (
    <div>
      <p className='text-center'>
        <img className='m-2' src={props.addLogo} width={80} alt='insert' />
        <h4>Rezervasyon kaydınız alınmıştır. </h4>
        <h6>
          Rezervasyon özetiniz aşağıdaki gibidir. Rezervasyon kaydınızda
          değişiklik veya yeni rezervasyon yapmak için aşağıdaki linkleri
          kullanabilirsiniz.
        </h6>
      </p>
      <div className='d-sm-flex justify-content-around text-center'>
        <Button
          className='btn btn-primary btn-lg m-1'
          onClick={props.handleNew}
        >
          Yeni Reservasyon Yap
        </Button>
        <Button
          className='btn btn-primary btn-lg m-1'
          onClick={props.handleEdit}
        >
          Reservasyonu Güncelle
        </Button>

        <Popconfirm
          placement='top'
          title={"Rezervasyon kaydınızı iptal etmek istediğinize emin misiniz?"}
          onConfirm={props.handleDelete}
          okText='Evet'
          cancelText='Hayır'
        >
          <Button
            className='btn btn-primary btn-lg m-1'
            // onClick={props.handleDelete}
            type='dashed'
          >
            Reservasyonu İptal Et
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
}

export default info;
