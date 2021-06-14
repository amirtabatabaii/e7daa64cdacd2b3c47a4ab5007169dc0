import React from "react";

import StepOne from "../stepOne";
import StepTwo from "../stepTwo";
import StepThree from "../stepThree";
import StepProgressBar from "react-step-progress";

function StepsBar(props) {
  return (
    <StepProgressBar
      startingStep={props.startingStep}
      onSubmit={props.onFormSubmit}
      previousBtnName='<< Geri'
      nextBtnName='Kaydet ve Devam Et'
      steps={[
        {
          label: "Otel Tarih Seçimi",
          name: "step 1",
          content: (
            <StepOne
              adultInputNumberOnChange={props.adultInputNumberOnChange}
              childInputNumberOnChange={props.childInputNumberOnChange}
              pickerEndOnChange={props.pickerEndOnChange}
              pickerStartOnChange={props.pickerStartOnChange}
              hotelOnSearch={props.hotelOnSearch}
              hotelOnChange={props.hotelOnChange}
            />
          ),
          validator: props.step1Validator,
        },
        {
          label: "Oda Tipi Manzara Seçimi",
          name: "step 2",
          content: (
            <StepTwo roomSelectedOnChange={props.roomSelectedOnChange} />
          ),
          validator: props.step2Validator,
        },
        {
          label: "Önizleme Ödeme İşlemleri",
          name: "step 3",
          content: <StepThree />,
          validator: props.step3Validator,
        },
      ]}
    />
  );
}

export default StepsBar;
