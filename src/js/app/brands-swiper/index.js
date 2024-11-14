import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


  export const initBrandsSwiper = new Swiper('.brands-swiper', {
    modules: [Pagination],
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 16,
    pagination: {
      el: '.brands-swiper-pagination',
      clickable: true,
    },
  });
