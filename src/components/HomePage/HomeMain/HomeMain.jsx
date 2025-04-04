import styles from "./HomeMain.module.scss";

import {    
  aboutPagePath
} from "../../../router/path";
 
const HomeMain = () => {
  return (    
    <section className={styles.homeMain}>     
      <h1 className={`${styles.homeMain__title} titleh1`}>Добро пожаловать&nbsp;
        <br />
        <span className="textBlueGreen">в AppName!</span>
      </h1> 

      <ul className="list circleBlueGreen">
        <li>Ищи события по интересам</li>
        <li>Встречай единомышленников</li>
        <li>Открывай новое в своей стране</li>
        </ul>      
    </section>   
  );
};

export default HomeMain;