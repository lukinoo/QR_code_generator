const qr_image_wrapper = document.getElementById("qr__image__wrapper");
const qr_image = document.getElementById("qr__image");
const error = document.getElementById("__error");
const form = document.getElementById("qr__form");
const qr_input = document.getElementById("qr__input");

const handlerSrc = (src) => (qr_image.src = src);
const handleWarn = (err) => (error.innerHTML = err);

const API_URI = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=`;

const checkQRValue = (val) => {
  if (!val.trim()) {
    handleWarn("Please enter text");
    qr_image.style.display = "none";
    return;
  } else {
    handleWarn("");
    let QR_res = API_URI + val;

    qr_image.style.display = "block";

    handlerSrc(QR_res);
  }
};

const generateQR = (e) => {
  e.preventDefault();

  let val = qr_input.value;

  checkQRValue(val);
};

form.addEventListener("submit", generateQR);
