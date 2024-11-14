export const phone = () => {
  const phoneMenu = document.querySelector('.phone-menu__container')
  const phoneMenuOpenButton = document.querySelectorAll(
    '#phone-menu__button-open-modal'
  )
  const phoneMenuCloseButton = document.querySelector(
    '#phone-menu__button-close-modal'
  )
  const phoneBackgroundMenu = document.querySelector('.phone-menu')

  const burgerMenu = document.querySelector('#burger-menu')
  const burgerBackgroundMenu = document.querySelector('.burger-menu')

  Array.from(phoneMenuOpenButton).map((button) => {
    button.addEventListener('click', () => {
      phoneMenu.classList.remove('phone-menu__container--close')
      phoneMenu.classList.add('phone-menu__container--open')

      phoneBackgroundMenu.classList.add('phone-menu__background-menu--open')

      burgerMenu.classList.remove('burger-menu__container--open')
      burgerBackgroundMenu.classList.remove('background-menu--open')

      document.body.style.overflow = 'hidden'
      document.body.style.position = 'static'
      document.body.style.top = ''
    })
  })

  phoneMenuCloseButton.addEventListener('click', () => {
    phoneMenu.classList.remove('phone-menu__container--open')
    phoneMenu.classList.add('phone-menu__container--close')

    phoneBackgroundMenu.classList.remove('phone-menu__background-menu--open')
    phoneBackgroundMenu.classList.add('phone-menu__background-menu--close')

    document.body.style.overflow = 'auto'
  })
}
