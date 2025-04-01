import { Link } from "react-router-dom"
import styles from "./SearchMain.module.scss";
import SearchFilter from "../../layout/SearchFilter/SearchFilter"
import CardMain from "../../global/CardMain/CardMain"

import {    
  singlePagePath
} from "../../../router/path";


const SearchMain = () => {
  return (
    <section className={styles.searchMain}>
    <SearchFilter />
      Рекомендации спорт Видеоигры Путешествия
  
      <CardMain /> 
    
    </section>
  );
};

export default SearchMain;
