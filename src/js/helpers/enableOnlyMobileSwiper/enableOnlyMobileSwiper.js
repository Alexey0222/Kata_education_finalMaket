export const enableOnlyMobileSwiper = (selectorName, swiper) => {
  const resize = () => {
    const button = document.querySelector(selectorName)
    const body = document.body
    const burgerMenu = document.querySelector('#burger-menu')

    selectorName && button.classList.add('hidden')

    swiper.enable()
    swiper.update()

    if (window.innerWidth > 768) {
      console.log('тут')
      selectorName && button.classList.remove('hidden')

      swiper.disable()

      body.classList.remove('bodyContainer')

      burgerMenu.classList.remove('burger-menu__container--open')
      burgerMenu.classList.remove('burger-menu__container--close')
    }

    console.log('window.innerWidth', window.innerWidth)
    if (window.innerWidth > 1366) {
      body.classList.add('bodyContainer')
    }
  }

  resize()

  window.addEventListener('resize', resize)
}
