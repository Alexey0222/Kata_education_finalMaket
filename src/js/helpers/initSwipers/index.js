import { initBrandsSwiper } from "../../app/brands-swiper";
import { initPriceSwiper } from "../../app/price-swiper";
import { initTypesSwiper } from "../../app/types-swiper";
import { enableOnlyMobileSwiper } from "../helpers";

export const initSwipers = () => {


  initBrandsSwiper;
  initTypesSwiper;
  initPriceSwiper;

  enableOnlyMobileSwiper('#brands-menu-button', initBrandsSwiper);
  enableOnlyMobileSwiper('#types-menu-button', initTypesSwiper);
  enableOnlyMobileSwiper(false, initPriceSwiper);
}