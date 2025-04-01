import styles from "./SingleMain.module.scss";
import SearchFilter from "../../layout/SearchFilter/SearchFilter"
 

const SingleMain = () => {
  return (    
      <section className={styles.singleMain}>
        <SearchFilter />
         
      </section>   
  );
};

export default SingleMain;