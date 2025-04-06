import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./SearchMain.module.scss";
import SearchFilter from "../../layout/SearchFilter/SearchFilter";
import CardMain from "../../global/CardMain/CardMain";
import { categoriesImages } from "../../../constants/categoriesImages";
import { profileImage } from "../../../assets/images";

const cardData = categoriesImages.map((category) => ({
  ...category,
  items: [
    {
      profilePhoto: profileImage,
      username: "User 1",
      title: "Lorem ipsum dolor sit amet consectetur adip",
      date: "21.02.25",
      time: "12:30",
      location: "Санкт-Питербург",
      keywords: ["18+", "Для девушек", "Для детей", "С животными"],
    },
    {
      profilePhoto: profileImage,
      username: "User 2",
      title: "Lorem ipsum dolor sit amet consectetur adip",
      date: "21.02.25",
      time: "12:30",
      location: "Санкт-Питербург",
      keywords: ["18+", "Для девушек", "Для детей", "С животными"],
    },
    {
      profilePhoto: profileImage,
      username: "User 3",
      title: "Lorem ipsum dolor sit amet consectetur adip",
      date: "21.02.25",
      time: "12:30",
      location: "Санкт-Питербург",
      keywords: ["18+", "Для девушек", "Для детей", "С животными"],
    },
    {
      profilePhoto: profileImage,
      username: "User 4",
      title: "Lorem ipsum dolor sit amet consectetur adip",
      date: "21.02.25",
      time: "12:30",
      location: "Санкт-Питербург",
      keywords: ["18+", "Для девушек", "Для детей", "С животными"],
    },
  ],
}));

const btnCategories = ["Спорт", "Видеоигры", "Путешествия"];

const SearchMain = () => {
  return (
    <section className={styles.searchMain}>
      <SearchFilter />

      <div className={styles.searchMain__categoryContainer}>
        <Swiper
          // slidesPerView={2.5}
          slidesPerView={"auto"}
          freeMode={true}
          spaceBetween={10}
          slidesOffsetBefore={12}
          slidesOffsetAfter={12}
          className={styles.searchMain__btnCategoriesSwiper}
        >
          <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.searchMain__btnGgradient}>Рекомендации</div>
          </SwiperSlide>
          {btnCategories.map((category, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <div className={styles.searchMain__btnCategory}>
                {category}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {cardData.map((item) => (
        <CardMain {...item} key={item.key} />
      ))}
    </section>
  );
};

export default SearchMain;
