p = document.getElementById("text");

p.innerHTML = "my new text";

p.style.color = "red";

p1 = document.createElement("p");
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
function addPaymentMethod(name, description, imageSrc) {
  // Створюємо <div class="payment-method">
  paymentMethodDiv = document.createElement("div");
  paymentMethodDiv.classList.add("payment-method");

  // Створюємо <div class="card-logo">
  cardLogoDiv = document.createElement("div");
  cardLogoDiv.classList.add("card-logo");

  // Створюємо <img ...
  logoImg = document.createElement("img");
  logoImg.setAttribute("src", imageSrc);
  logoImg.setAttribute("alt", "logo");

  // Добавляєм <img src="... > в <div class="card-logo">
  cardLogoDiv.appendChild(logoImg);

  // Добавляєм <div class="card-logo"> в <div class="payment-method">
  paymentMethodDiv.appendChild(cardLogoDiv);

  // Створюєм <div class="text">
  textDiv = document.createElement("div");
  textDiv.classList.add("text");

  // Створюєм <p class="payment-name-text">
  paymentName = document.createElement("p");
  paymentName.classList.add("payment-name-text");
  // Беремо назву платіжного методу з змінної name
  paymentName.innerText = name;

  // Добавляєм <p class="payment-name-text"> в <div class="text">
  textDiv.appendChild(paymentName);

  // Створюєм <p class="payment-description-text">
  paymentDescription = document.createElement("p");
  paymentDescription.classList.add("payment-description-text");
  // Беремо опис платіжного методу з змінної description
  paymentDescription.innerText = description;

  // Добавляєм <p class="payment-description-text"> в <div class="text">
  textDiv.appendChild(paymentDescription);

  // Добавляєм весь створений та наповнений блок <div class="text"> в <div class="payment-method">
  paymentMethodDiv.appendChild(textDiv);

  // Отримали <div id="container"> в змінну container – контейнер куди будеть добавлятить усі платіжні методи
  container = document.getElementById("container");

  // Добавляєм наш головий <div class="payment-method"> в контейнер <div id="container">
  // Оскільки <div id="container"> уже інсує на сторінці то в цей момент новой платіжний метод почне відображатись
  container.appendChild(paymentMethodDiv);
}

// Викликаєм addPaymentMethod декілька раз з значеннями змінних щоб добавити конкретні платіжні методи
addPaymentMethod("Mastercard", "Payment card", "mastercard.png");
//
addPaymentMethod("Bitcoin", "Crypto", "bitcoin.png");
//
addPaymentMethod("PayPal", "Digital money", "paypal.png");
//
addPaymentMethod("Visa", "Payment card", "visa.png");
