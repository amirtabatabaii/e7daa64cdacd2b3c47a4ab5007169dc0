import { notification } from "antd";
import moment from "moment";
let startDate = "";
let endDate = "";

export function date_diff_indays(date1, date2) {
  let dt1 = new Date(date1);
  let dt2 = new Date(date2);

  return (
    Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    ) + 1
  );
}

export function calc_price(price, day, count) {
  return (price * day * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function find_hotel_name(array, id) {
  return array.find((htl) => htl.id == id).hotel_name;
}

export function find_room_type_scenic(array, id) {
  return array.find((htl) => htl.id == id).title;
}

export function find_room_price(array, id) {
  return array.find((htl) => htl.id == id).price;
}

export function find_room_percentage(array, id) {
  return array.find((htl) => htl.id == id).price_rate;
}

export function calc_end_price(price, day, count, percentage, discount) {
  const firstPrice = price * day * count;
  const percentagePrice = (firstPrice * percentage) / 100;
  const endTotal = (firstPrice + percentagePrice - discount)
    .toString()
    .split(".")[0];
  localStorage.setItem("price", endTotal);
  return endTotal;
}

export function notification_with_icon(type, message, description) {
  notification[type]({
    message: message,
    description: description,
  });
}

// steps
export function step1Validator() {
  if (
    !localStorage.getItem("hotel_id") ||
    !localStorage.getItem("start_date") ||
    !localStorage.getItem("end_date")
  )
    notification_with_icon(
      "error",
      "Bilgilerde Eksik var",
      "Lutfen Bilgileri tam giriniz!"
    );
  else return true;
}

export function step2Validator() {
  if (
    !localStorage.getItem("room_type") ||
    !localStorage.getItem("room_scenic")
  )
    notification_with_icon(
      "error",
      "Bilgilerde Eksik var",
      "Lutfen Bilgileri tam giriniz!"
    );
  else return true;
}

export function addDataToLocalStorage(itemName, itemValue) {
  localStorage.setItem(itemName, itemValue);
}

export function pickerStartOnChange(date, dateString) {
  startDate = dateString;

  let today = moment(new Date()).format("YYYY-MM-DD");
  let dt1 = new Date(startDate);
  let dt2 = new Date(endDate);

  console.log(date_diff_indays(today, dt1));

  if (date_diff_indays(today, dt1) <= 0) {
    notification_with_icon(
      "error",
      "Başlangıç Tarih",
      "Başlangıç Tarih Geçmiş!"
    );
  } else {
    let diff =
      Math.floor(
        (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
          Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
          (1000 * 60 * 60 * 24)
      ) + 1;
    if (diff <= 0) {
      notification_with_icon(
        "error",
        "Tarihde Problem",
        "Tarih ler Uyumlu Değil!"
      );
      localStorage.removeItem("start_date");
      localStorage.removeItem("end_date");
    } else {
      addDataToLocalStorage("start_date", startDate);
      addDataToLocalStorage("end_date", endDate);
    }
  }
}

export function pickerEndOnChange(date, dateString) {
  endDate = dateString;

  let dt1 = new Date(startDate);
  let dt2 = new Date(endDate);
  let diff =
    Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    ) + 1;

  if (diff <= 0) {
    notification_with_icon(
      "error",
      "Tarihde Problem",
      "Tarih ler Uyumlu Değil!"
    );
    localStorage.removeItem("start_date");
    localStorage.removeItem("end_date");
  } else {
    addDataToLocalStorage("start_date", startDate);
    addDataToLocalStorage("end_date", endDate);
  }
}

export function adultInputNumberOnChange(value) {
  addDataToLocalStorage("adult", value);
}

export function childInputNumberOnChange(value) {
  addDataToLocalStorage("child", value);
}

export function roomSelectedOnChange(e) {
  const { name, value } = e.target;
  if (name === "room_type") localStorage.setItem(name, value);
  if (name === "room_scenic") localStorage.setItem(name, value);
}
