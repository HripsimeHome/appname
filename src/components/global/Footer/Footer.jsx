import styles from "./Footer.module.scss"
import { Link, NavLink } from "react-router-dom";

import {    
  homePagePath,
  registrationPagePath,
  notificationPagePath,
} from "../../../router/path";
 
const Footer = () => {
  return (
    <footer className={styles.footer}>         
      <div className={`${styles.footer__container} container`}>

        <NavLink className={styles.footer__menu}> 
          <Link 
            to={homePagePath}
            className={styles.footer__homeIcon}>
          </Link>   

          <Link 
            className={styles.footer__mapIcon}>
          </Link> 

          <Link 
            className={styles.footer__switcher}>
          </Link> 

          <Link 
           to={registrationPagePath}
            className={styles.footer__avatarIcon}>
          </Link>   

          <Link
            to={notificationPagePath}
            className={styles.footer__notificationIcon}>
          </Link>  

        </NavLink>

       


        <div className={styles.footer__linePosition}> 
          <span className={styles.footer__line}></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;