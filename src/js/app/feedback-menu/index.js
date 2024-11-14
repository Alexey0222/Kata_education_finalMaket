export const feedback = () => {
  const feedbackMenu = document.querySelector('.feedback-menu__container')
  const feedbackMenuOpenButton = document.querySelectorAll(
    '#feedback-menu__button-open-modal'
  )
  const feedbackMenuCloseButton = document.querySelector(
    '#feedback-menu__button-close-modal'
  )
  const feedbackBackgroundMenu = document.querySelector('.feedback-menu')

  const burgerMenu = document.querySelector('#burger-menu')
  const burgerBackgroundMenu = document.querySelector('.burger-menu')

  Array.from(feedbackMenuOpenButton).map((button) => {
    button.addEventListener('click', () => {
      console.log('click feedback')
      feedbackMenu.classList.remove('feedback-menu__container--close')
      feedbackMenu.classList.add('feedback-menu__container--open')

      feedbackBackgroundMenu.classList.add(
        'feedback-menu__background-menu--open'
      )

      burgerMenu.classList.remove('burger-menu__container--open')
      burgerBackgroundMenu.classList.remove('background-menu--open')

      document.body.style.overflow = 'hidden'
      document.body.style.position = 'static'
      document.body.style.top = ''
    })
  })

  feedbackMenuCloseButton.addEventListener('click', () => {
    feedbackMenu.classList.remove('feedback-menu__container--open')
    feedbackMenu.classList.add('feedback-menu__container--close')

    feedbackBackgroundMenu.classList.remove(
      'feedback-menu__background-menu--open'
    )
    feedbackBackgroundMenu.classList.add(
      'feedback-menu__background-menu--close'
    )

    document.body.style.overflow = 'auto'
  })
}
