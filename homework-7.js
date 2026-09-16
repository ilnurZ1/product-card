function sayWeather(city, temperature) {
  console.log(
    `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`,
  );
}
sayWeather("Чаллы", 20);



const SPEED_OF_LIGHT = 299792458

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  }
  else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  }
  else {
    console.log("Скорость света");
  }
}

checkSpeed(3000000000)
checkSpeed(1500000000)
checkSpeed(299792458)


const productName = 'Ноутбук';
const productPrice = 50000;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  }
  else {
    const shortfall = productPrice - budget;
    console.log(`Вам не хватает ${shortfall}руб, пополните баланс`);
  }
}

buyProduct(60000);
buyProduct(30000);