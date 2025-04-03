import styles from "./SearchFilter.module.scss";
import Svg from "../../layout/Svg/Svg";

import {
  searchIcon,
  filterIcon, 
} from "../../../assets/svg";

function SearchFilter() {
  return (
    <div className={styles.searchFilter}>

      <input 
       type="text" 
       placeholder="Найти мероприятие..."
       className={styles.searchFilter__inputSearch}
       />

       <button className={styles.searchFilter__btnFilter}>
        <Svg 
          id={filterIcon}
          className={styles.searchFilter__filterIcon}
        />
       </button>       
    </div>
  )
}

export default SearchFilter
