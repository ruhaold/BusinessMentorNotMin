export function handleButtonClick(rateName) {
  console.log(rateName);
}

export function initializeButtonHandlers() {
  const buttons = document.querySelectorAll('.card__btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const rateTitle = card.querySelector('.card__title').textContent;
      handleButtonClick(rateTitle);
    });
  });
}
