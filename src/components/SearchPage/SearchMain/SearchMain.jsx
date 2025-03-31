import { Link } from "react-router-dom"
import styles from "./SearchMain.module.scss";
import SearchFilter from "../../layout/SearchFilter/SearchFilter"

import {    
  singlePagePath
} from "../../../router/path";


const SearchMain = () => {
  return (
    <section className={styles.searchMain}>
    <SearchFilter />
      Рекомендации спорт Видеоигры Путешествия

      <Link 
        to={singlePagePath} 
        >
          <br /> <br />
          Single page
              
      </Link>

    </section>
  );
};

export default SearchMain;
