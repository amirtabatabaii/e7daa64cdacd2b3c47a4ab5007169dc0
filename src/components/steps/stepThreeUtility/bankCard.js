import React from "react";

function bankCard(props) {
  return (
    <div className='container3 p-3'>
      <img
        fluid
        src='https://images.contentstack.io/v3/assets/bltcf46bbde1704bd18/blt45ea081fb3b6dd38/5f9933271a81c1644e9965a0/CC-Image-CIMB-eCC-01.png?quality=70'
        // src='https://assets.unionbank.com/assets/styles/medium/public/creditcard/personal/credit-cards/union-bank-signature-visa-preferred-rewards-card-drk.png?itok=ECR49PES'
        alt='card'
        style={{ "max-width": "90%" }}
      />
      <div className='crdt-number'>
        {props.crdt_number
          .replace(/(\d{4})/g, "$1 ")
          .replace(/(^\s+|\s+$)/, "")}
      </div>
      <div className='crdt-name'>{props.crdt_name}</div>
      <div className='crdt-date'>
        {props.crdt_month}/{props.crdt_year}
      </div>
      <div className='crdt-cvv'>{props.crdt_cvv}</div>
    </div>
  );
}

export default bankCard;
