import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//import "swiper/css/pagination";
import styles from "./SearchMain.module.scss";
import SearchFilter from "../../layout/SearchFilter/SearchFilter"
import CardMain from "../../global/CardMain/CardMain"

import {    
  singlePagePath
} from "../../../router/path";

const btnCategories = [
  "Спорт",
  "Видеоигры",
  "Путешествия",  
] 

const SearchMain = () => {
  return (
    <section className={styles.searchMain}>
      <SearchFilter />

      <div className={styles.searchMain__categoryContainer}>
        <label className={styles.searchMain__gradientPanel}>
        Рекомендации
        </label>    
        <Swiper          
          slidesPerView={2.5}
          spaceBetween={1}         
          className={styles.searchMain__btnCategoriesSwiper}       
        > 

        {btnCategories.map (
          ( category, index ) => (
          <SwiperSlide key={index}>
            <button              
              className={styles.searchMain__btnCategory}
            >
            {category}       
          </button>
        </SwiperSlide>
      ))}

      </Swiper>
      </div>

      <CardMain />     
    </section>
  );
};

export default SearchMain;