const p = document.getElementById("text");

p.innerHTML = "my new text";

p.style.color = "red";

const p1 = document.createElement("p");
p1.innerHTML = "my JS element";

document.getElementById("block").appendChild(p1);
// block = document.getElementById("block")
// block.appendChild(p1)

// Код для створення методів оплати на сторінці

// Визначемо функцію яка буде створювати html теги для методу оплати
// Далі будем викликати її для додавання кожного методу
// Приклад HTML коду методу оплати який буде створюватись
//        <div class="payment-method">
//          <div class="card-logo">
//            <img src="mastercard.png" alt="logo" />
//          </div>
//          <div class="text">
//            <p class="payment-name-text">Mastercard</p>
//            <p class="payment-description-text">Payment card</p>
//          </div>
//        </div>;
function addPaymentMethod(name, description, imageSrc, onClick) {
  // Створюємо <div class="payment-method">
  const paymentMethodDiv = document.createElement("div");
  paymentMethodDiv.classList.add("payment-method");

  // Створюємо <div class="card-logo">
  const cardLogoDiv = document.createElement("div");
  cardLogoDiv.classList.add("card-logo");

  // Створюємо <img ...
  const logoImg = document.createElement("img");
  logoImg.setAttribute("src", imageSrc);
  logoImg.setAttribute("alt", "logo");

  // Добавляєм <img src="... > в <div class="card-logo">
  cardLogoDiv.appendChild(logoImg);

  // Добавляєм <div class="card-logo"> в <div class="payment-method">
  paymentMethodDiv.appendChild(cardLogoDiv);

  // Створюєм <div class="text">
  const textDiv = document.createElement("div");
  textDiv.classList.add("text");

  // Створюєм <p class="payment-name-text">
  const paymentName = document.createElement("p");
  paymentName.classList.add("payment-name-text");
  // Беремо назву платіжного методу з змінної name
  paymentName.innerText = name;

  // Добавляєм <p class="payment-name-text"> в <div class="text">
  textDiv.appendChild(paymentName);

  // Створюєм <p class="payment-description-text">
  const paymentDescription = document.createElement("p");
  paymentDescription.classList.add("payment-description-text");
  // Беремо опис платіжного методу з змінної description
  paymentDescription.innerText = description;

  // Добавляєм <p class="payment-description-text"> в <div class="text">
  textDiv.appendChild(paymentDescription);

  // Добавляєм весь створений та наповнений блок <div class="text"> в <div class="payment-method">
  paymentMethodDiv.appendChild(textDiv);

  paymentMethodDiv.addEventListener("click", onClick);

  return paymentMethodDiv;
}

// Отримали <div id="container"> в змінну container – контейнер куди будеть добавлятить усі платіжні методи
const container = document.getElementById("container");

const google = document.getElementById("google");

google.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Go to Google event");
});

const array = [12, 23, 4123, "232"];

const paymentMethods = [
  {
    name: "Mastercard",
    desc: "Payment card",
    img: "mastercard.png",
    onclick: function (event) {
      console.log("Mastercard clicked");
    },
  },
  {
    name: "Bitcoin",
    desc: "Crypto",
    img: "bitcoin.png",
    onclick: function (event) {
      console.log("Bitcoin clicked");
    },
  },
  {
    name: "PayPal",
    desc: "Digital money",
    img: "paypal.png",
    onclick: function (event) {
      console.log("PayPal clicked");
    },
  },
  {
    name: "Visa",
    desc: "Payment card",
    img: "visa.png",
    onclick: function (event) {
      console.log("Visa clicked");
    },
  },
  {
    name: "WebMoney",
    desc: "Digitan money",
    img: "visa.png",
    onclick: function (event) {
      console.log("WebMoney clicked");
    },
  },
];

for (let i = 0; i < paymentMethods.length; i++) {
  container.appendChild(
    addPaymentMethod(
      paymentMethods[i].name,
      paymentMethods[i].desc,
      paymentMethods[i].img,
      paymentMethods[i].onclick
    )
  );
}
