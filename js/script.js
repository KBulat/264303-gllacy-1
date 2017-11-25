var link = document.querySelector(".btn-contacts");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".btn-close");
var login = popup.querySelector("[name=feedback-name]");
var form = popup.querySelector("form");
var mail = popup.querySelector("[name=feedback-name]");
var message = popup.querySelector("[name=feedback-message]");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
    }
  }
});

//Интерактивная карта

ymaps.ready(function () {
  var map = new ymaps.Map("map", {
    center: [59.939390, 30.329545],
    zoom: 16,
    scrollZoom: false,
    controls: []
  }, {
    searchControlProvider: "yandex#search"
  }),
  Placemark = new ymaps.Placemark([59.938631, 30.323055], {
    balloonContent: document.querySelector(".contacts").innerHTML.split('<a class="btn')[0]
  }, {
    iconLayout: "default#image",
    iconImageHref: "img/pin.svg",
    iconImageSize: [80, 140],
    iconImageOffset: [-40, -140],
    iconShadow: true,
    iconShadowLayout: "default#image",
    iconShadowImageHref: "img/pin-shadow.png",
    iconShadowImageSize: [182, 110],
    iconShadowImageOffset: [0, -110]
  });

  map.geoObjects.add(Placemark);
  map.behaviors.disable("scrollZoom");
  map.controls.add("zoomControl");
  var roadcontrolState = map.controls.get("zoomControl").state.get("size");
  map.controls.get("zoomControl").options.set("size", "small");
});
