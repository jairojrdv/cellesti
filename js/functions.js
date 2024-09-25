"use strict";

// var onTop = false;

// var nav = document.querySelector(".bottom-header");
// window.onscroll = function (evt) {
//   if (window.scrollY < 10 && !onTop) {
//     nav.classList.add("onTop");
//     onTop = true;
//   }

//   if (window.scrollY > 89 && onTop) {
//     nav.classList.remove("onTop");
//     onTop = false;
//   }
// };

// function formatCurrency(value) {
//   return parseFloat(value).toFixed(2);
// }

// function updateReceiveValue() {
//   const payInput = document.getElementById("pay");
//   const receiveInput = document.getElementById("recive");

//   const payValue = parseFloat(payInput.value) || 0;
//   const receiveValue = payValue / 0.007;

//   receiveInput.value = formatCurrency(receiveValue);
// }

// document.getElementById("pay").addEventListener("change", function () {
//   updateReceiveValue();
//   this.value = formatCurrency(this.value.replace(/[^\d.-]/g, ""));
// });

// function selectPaymentMethod(method) {
//   const paymentIcon = document.getElementById("payment-icon");
//   const selectedPaymentMethod = document.getElementById(
//     "selected-payment-method"
//   );

//   let iconSrc = "";
//   switch (method) {
//     case "bnbpay":
//       iconSrc = "images/eth.svg";
//       break;
//     case "usdtpay":
//       iconSrc = "images/usdt.svg";
//       break;
//     case "cardpay":
//       iconSrc = "images/card.svg";
//       break;
//   }

//   if (iconSrc) {
//     paymentIcon.style.display = "block";
//     paymentIcon.style.backgroundImage = `url(${iconSrc})`;
//     paymentIcon.style.backgroundSize = "cover";
//   } else {
//     paymentIcon.style.display = "none";
//   }

//   selectedPaymentMethod.value = method;
// }

// selectPaymentMethod("bnbpay");

// const items = document.querySelectorAll(".accordion-button");

// function toggleAccordion() {
//   const itemToggle = this.getAttribute("aria-expanded");

//   for (var i = 0; i < items.length; i++) {
//     items[i].setAttribute("aria-expanded", "false");
//   }

//   if (itemToggle == "false") {
//     this.setAttribute("aria-expanded", "true");
//   }
// }

// items.forEach((item) => item.addEventListener("click", toggleAccordion));

function bloquearScroll(event) {
  event.preventDefault();
}
function desabilitarScroll() {
  document.body.style.overflow = "hidden";
  window.addEventListener("wheel", bloquearScroll, { passive: false });
  document.addEventListener("touchmove", bloquearScroll, { passive: false });
}
function habilitarScroll() {
  document.body.style.overflow = "";
  window.removeEventListener("wheel", bloquearScroll);
  document.removeEventListener("touchmove", bloquearScroll);
}

// document.getElementById("hamburger-btn").addEventListener("click", function () {
//   window.scrollTo(0, 0);
//   document.getElementById("modal-menu").classList.add("active");
//   document.getElementById("hamburger-btn").style.display = "none";
//   desabilitarScroll();
// });

// document.getElementById("close-btn").addEventListener("click", function () {
//   document.getElementById("modal-menu").classList.remove("active");
//   document.getElementById("hamburger-btn").style.display = "block";
//   habilitarScroll();
// });

// document.querySelectorAll(".options-list-mobile li").forEach((item) => {
//   item.addEventListener("click", function () {
//     document.getElementById("modal-menu").classList.remove("active");
//     document.getElementById("hamburger-btn").style.display = "block";
//     habilitarScroll();
//   });
// });

document.getElementById("giveaway-button").addEventListener("click", function () {
  document.querySelector('#form-giveaway').style.display = 'flex'
  desabilitarScroll()
})

document.getElementById("closeFormGiveaway").addEventListener("click", function () {
  document.querySelector('#form-giveaway').style.display = 'none'
  habilitarScroll()
})