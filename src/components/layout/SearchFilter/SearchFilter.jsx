import styles from "./SearchFilter.module.scss";

function SearchFilter() {
  return (
    <div className={styles.searchFilter}>
       <input type="text" placeholder="Найти мероприятие..."/>
       <button className={styles.searchFilter__filterIcon}>
       </button>
       
    </div>
  )
}

export default SearchFilter
