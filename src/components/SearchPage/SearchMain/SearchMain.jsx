import { Link } from "react-router-dom"
import styles from "./SearchMain.module.scss";

import {    
  singlePagePath
} from "../../../router/path";


const SearchMain = () => {
  return (
    <section className={styles.searchMain}>
      <h1>Search</h1>
      Рекомендации спорт Видеоигры Путешествия

      <Link 
        to={singlePagePath} 
        >
          <br />
          Single page
              
      </Link>

    </section>
  );
};

export default SearchMain;
