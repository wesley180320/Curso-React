import { FaFacebook, FaInstagram,FaLinkedin,FaTwitter } from "react-icons/fa";
import styles from './layout/Foooter.module.css'
import React from "react";

const Footer = () =>{

    return(

        <div className={styles.social_list}>

      <ul>

      <li> <a href="https://pt-br.facebook.com/"> <FaFacebook/> </a> </li>
      <li > <FaInstagram/></li>
      <li> <FaLinkedin/></li>
      <li> <FaTwitter/></li>

      </ul>

        </div>

    )

}
export default Footer