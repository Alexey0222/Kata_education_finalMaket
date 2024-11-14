export const description = () => {
  const descriptionMenu = document.querySelector('.service__feedback-description-text');
  const descriptionMenuButton = document.querySelector('#service-feedback-button');
  const descriptionMenuButtonIcon = document.querySelector('.service__feedback-description-button-icon');
  const descriptionMenuButtonText = document.querySelector('.service__feedback-description-button-text')


  descriptionMenuButton.addEventListener('click', () => {
    const isClose = !!descriptionMenuButton.classList.contains('close');

    if (isClose) {

      descriptionMenuButton.classList.remove('close');
      descriptionMenuButton.classList.add('open');
      descriptionMenuButtonIcon.classList.add('service__icon_rotate-open');
      descriptionMenu.classList.add('service__feedback-description-text-open');
      descriptionMenuButtonText.textContent = 'Скрыть';
    }
    if (!isClose) {
      descriptionMenuButtonIcon.classList.remove('service__icon_rotate-open');
      descriptionMenuButton.classList.remove('open');
      descriptionMenuButton.classList.add('close');
      descriptionMenu.classList.remove('service__feedback-description-text-open');
      descriptionMenuButtonText.textContent = 'Читать дальше';
    }
  });

};
