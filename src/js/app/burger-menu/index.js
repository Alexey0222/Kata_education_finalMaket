export const burger = () => {
  const burgerMenu = document.querySelector('#burger-menu')
  const burgerMenuOpenButton = document.querySelector('#burger-open-button')
  const burgerMenuCloseButton = document.querySelector('#burger-close-button')
  const backgroundMenu = document.querySelector('.burger-menu')

  burgerMenuOpenButton.addEventListener('click', () => {
    console.log('click burger')
    burgerMenu.classList.remove('burger-menu__container--close')
    burgerMenu.classList.add('burger-menu__container--open')

    backgroundMenu.classList.add('background-menu--open')

    // position: fixed для body через 300мс, предотвращает прокрутку страницы, когда меню открыто.
    // top равен текущей позиции прокрутки (сохраненной через window.scrollY), помогает вернуть пользователя к тому же месту на экране при закрытии меню.
    setTimeout(() => {
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
    }, 300)

    // прокрутка страницы принудительно сбрасывается в верхнее положение при открытии меню.
    window.scrollTo(0, 0)
  })

  burgerMenuCloseButton.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu__container--open')
    burgerMenu.classList.add('burger-menu__container--close')

    backgroundMenu.classList.remove('background-menu--open')
    backgroundMenu.classList.add('background-menu--close')

    // Возвращаются начальные стили position и top у body, чтобы страница могла снова прокручиваться.
    document.body.style.position = 'static'
    document.body.style.top = ''
  })
}
