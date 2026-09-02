// Покраска всех карточек

const productCards = document.querySelectorAll('.products__item');
const changecolorAllcardButton = document.querySelector('#change-color-all');

    const colorHash = '#D5D5D5';

changecolorAllcardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = colorHash)
})

// Покраска одной карточки

const productCard = document.querySelector('.products__item');
const changecolorcardButton = document.querySelector('#change-color');

    const platincolorHash = '#faebcd'

changecolorcardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = platincolorHash;
})

// Открыть Гугл

const openGoogleButton = document.querySelector('#open-google')
openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer   = confirm('Вы действительно хотите открыть');

  if (answer === true) {
  window.open('https://google.com')
} else {
  return;
  }
}

// вывод консоль лог

  const outputLogButton = document.querySelector('#message-consoleLog');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

  function outputConsoleLog(message) {
  alert(message)
  console.log(message)
  }


