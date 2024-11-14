import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export const initTypesSwiper = new Swiper('.types-swiper', {
  modules: [Pagination],
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: '.types-swiper-pagination',
    clickable: true,
  },
});


