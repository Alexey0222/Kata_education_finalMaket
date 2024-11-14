import {  openSwiperMenu, initSwipers, modals } from '../helpers/helpers.js';
import { description } from './description-menu/index.js'

const app = () => {
  modals();
  initSwipers();

  openSwiperMenu('.brands__button-text', '.brands__button-icon', '.brands-repairs__castom-swiper-wrapper', '.brands__button');
  openSwiperMenu('.types__button-text', '.types__button-icon', '.types-repairs__castom-swiper-wrapper', '.types__button');
  description();

}

export default app;