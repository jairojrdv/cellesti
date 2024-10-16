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

var l = new LanguageSelector();
$(document).on("change", "#langSelector", function () {
  var s = $(this).children("option:selected").val();
  l.setLang(s);
  window.location = "/";
});
l.parse();

// Seleciona todos os botões com a classe "copiar-email"
const botoes = document.querySelectorAll(".copiar-email");

// Itera sobre cada botão e adiciona o evento de clique
botoes.forEach(function(botao) {
    botao.addEventListener("click", function(event) {
        event.preventDefault();

        
        // Texto a ser copiado
        const email = "info@cellesti.ai";
        
        // Cria um elemento temporário
        const inputTemporario = document.createElement("input");
        inputTemporario.value = email;
        document.body.appendChild(inputTemporario);
        
        // Seleciona o texto e copia para a área de transferência
        inputTemporario.select();
        document.execCommand("copy");
        
        // Remove o elemento temporário
        document.body.removeChild(inputTemporario);
        
        // Exibe o alerta de copiado
        const alerta = document.querySelector("#alerta");
        alerta.classList.add("mostrar");
        
        // Esconde o alerta após 2 segundos
        setTimeout(function() {
            alerta.classList.remove("mostrar");
        }, 2000);
    });
});

setTimeout(() => {
  document.querySelector('.giveaway-card').style.display = 'flex'
  document.querySelector('.giveaway-loading').style.display = 'none'
}, 10000)

// Select the buttons
const ethButton = document.getElementById("ETHbutton");
const usdtButton = document.getElementById("USDTbutton");

// Initially set ETHbutton as active
ethButton.classList.add("active");

// Function to toggle active class
function toggleActive(clickedButton, otherButton) {
  clickedButton.classList.add("active");
  otherButton.classList.remove("active");
}

// Add event listeners to the buttons
ethButton.addEventListener("click", () => {
  toggleActive(ethButton, usdtButton);
});

usdtButton.addEventListener("click", () => {
  toggleActive(usdtButton, ethButton);
});

// redirect buy buttons

function redirectFunctionBuy () {
  if (localStorage.getItem('wagmi.connected')) {
    $('#purchaseButton').click()
  } else {
    $('#open-connect-modal').click()
  }
}

$(document).on("click", "#buyButtonAiAction", function () {
  redirectFunctionBuy()
});

$(document).on("click", "#buyButtonAiStartups", function () {
  redirectFunctionBuy()
});

var estado = 0,
    vw = $(window).width();
$("#hamburger").click(function() {
  var delay_time = 0;
  $(this).toggleClass('open');
  console.log(estado);
  if (estado === 0) {
    TweenMax.to($("#bg-menu-mobile"), 1, {
      x:-vw,
      ease: Expo.easeInOut
    });
    
    $("li").each(function() {
      TweenMax.to($(this), 1.2, {
        x:-vw,
        scaleX: 1,
        delay: delay_time,
        ease: Expo.easeInOut
      });
      delay_time += .04;
    });
    estado = 1;
  } else {
    estado = 0;
    TweenMax.to($("#bg-menu-mobile"), 1.2, {
      x:0,
      ease: Expo.easeInOut
    });
    $("li").each(function() {
      TweenMax.to($(this), 1, {
        x:0,
        /*
        x:vw,
        scaleX: 2.3,
        */
        delay: delay_time,
        ease: Expo.easeInOut
      });
      delay_time += .02;
    });
  }
});