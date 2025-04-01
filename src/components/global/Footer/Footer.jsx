import styles from "./Footer.module.scss"
import Svg from "../../layout/Svg/Svg";
//import { NavLink } from "react-router-dom";

import {    
  //homePagePath
} from "../../../router/path";

import {
  homeIcon,
  mapIcon,
  avatarIcon,
  notificationIcon
 
} from "../../../assets/svg";
 
const Footer = () => {
  return (
    <footer className={styles.footer}>         
      <div className={`${styles.footer__container} container`}>

      <div className={styles.footer__menu}> 
        <Svg 
          id={homeIcon}
         />
          <Svg 
          id={mapIcon}
         />

         <span className={styles.footer__switcher}>+</span>
        
          <Svg 
          id={avatarIcon}
         />
          <Svg 
          id={notificationIcon}
         />

      </div>




      <div className={styles.footer__linePosition}> 
      <spab className={styles.footer__line}></spab>
      </div>
      </div>
    </footer>
  );
};

export default Footer;