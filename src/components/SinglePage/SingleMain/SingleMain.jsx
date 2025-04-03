import styles from "./SingleMain.module.scss";
import SearchFilter from "../../layout/SearchFilter/SearchFilter"
import Card from "../../global/Card/Card"
 

const SingleMain = () => {
  return (    
      <section className={styles.singleMain}>
        <SearchFilter />
        <Card />         
      </section>   
  );
};

export default SingleMain;