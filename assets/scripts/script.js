function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  
  // Calcule o novo ângulo de rotação em Y
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  carousel.style.transform = `translateZ(-40vw) rotateY(${rotateYDeg}deg)`;

  // Remova a classe 's-card__title__rotate' de todos os títulos
  const allTitles = document.querySelectorAll('.s-card__title');
  allTitles.forEach(title => title.classList.remove('s-card__title__rotate'));

  // Identifique o card central com base no botão selecionado
  const centralCard = document.querySelector(`.s-card:nth-child(${selectedItem})`);
  const centralCardTitle = centralCard.querySelector('.s-card__title');

  // Adicione a classe ao título do card central
  if (centralCardTitle) {
    centralCardTitle.classList.add('s-card__title__rotate');
  }

  // Atualize a classe do botão ativo
  const activeButtonElement = document.querySelector('.s-controller__button--active');
  if (activeButtonElement) {
    activeButtonElement.classList.remove('s-controller__button--active');
  }
  selectedButtonElement.classList.add('s-controller__button--active');
}
