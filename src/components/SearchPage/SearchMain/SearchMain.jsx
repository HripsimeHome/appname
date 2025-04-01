import { Link } from "react-router-dom"
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

        {btnCategories.map (
        ( category, index ) => (
        <button 
          key={index}
          className={styles.searchMain__btnCategory}
        >
          {category}       
        </button>
      ))}
      </div>

      <CardMain />     
    </section>
  );
};

export default SearchMain;