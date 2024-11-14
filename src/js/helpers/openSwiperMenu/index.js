export const openSwiperMenu = (classTextButton, classIconButton, classMenu, classButton ) => {
  const button = document.querySelector(classButton);
  const menu = document.querySelector(classMenu);
  const buttonText = document.querySelector(classTextButton);
  const buttonIcon = document.querySelector(classIconButton);


  button.addEventListener('click', () => {
    const isClose = !!button.classList.contains('close');



    if (isClose) {
      menu.classList.remove('menu_close');
      menu.classList.add('menu_open');
   

      button.classList.remove('close');
      button.classList.add('open');
      buttonIcon.classList.remove('button__icon_rotate-close');
      buttonIcon.classList.add('button__icon_rotate-open');
      buttonText.textContent = 'Скрыть';
    }
    if (!isClose) {
      buttonIcon.classList.remove('button__icon_rotate-open');
      buttonIcon.classList.add('button__icon_rotate-close');
      menu.classList.remove('menu_open');
      menu.classList.add('menu_close');
      button.classList.remove('open');
      button.classList.add('close');
      buttonText.textContent = 'Показать все';
    }
  });
};