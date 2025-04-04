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
      <div className="container">
        <div className={styles.footer__menu}>      
          <NavLink 
            to={homePagePath}         
            className={({ isActive }) =>
              isActive
                ? `${styles.footer__homeIcon} ${styles.footer__homeIcon_active}`
                : styles.footer__homeIcon
            }        
            >
          </NavLink>  

          <NavLink 
           // to={homePagePath}         
            className={({ isActive }) =>
              isActive
                ? `${styles.footer__mapIcon} ${styles.footer__mapIcon_active}`
                : styles.footer__mapIcon
            }        
            >
          </NavLink> 

          <Link 
            className={styles.footer__switcher}>
          </Link> 

          <NavLink 
            to={registrationPagePath}         
            className={({ isActive }) =>
              isActive
                ? `${styles.footer__avatarIcon} ${styles.footer__avatarIcon_active}`
                : styles.footer__avatarIcon
            }        
            >
          </NavLink> 

          <NavLink 
            to={notificationPagePath}         
            className={({ isActive }) =>
              isActive
                ? `${styles.footer__notificationIcon} ${styles.footer__notificationIcon_active}`
                : styles.footer__notificationIcon
            }        
            >
            <span className={styles.footer__notificationCounter}>
            5
            </span>
          </NavLink> 
        </div> 
      </div>
    </footer>
  );
};

export default Footer;