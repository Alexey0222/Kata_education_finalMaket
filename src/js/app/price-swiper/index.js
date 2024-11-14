import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


  export const initPriceSwiper = new Swiper('.price-swiper-h', {
    modules: [Pagination],
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 16,
    pagination: {
      el: '.price-swiper-pagination',
      clickable: true,
    },
  });
