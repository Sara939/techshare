import "./footer.css";
import React from "react";
import { FaGithub, FaLinkedinIn, FaPhoneAlt} from 'react-icons/fa';
import { useContext } from 'react';
import { UserContext } from '../../../context/usercontext';


const Footer = () => {
  const {user} =useContext(UserContext);

  return (
    <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">TechShare</h5>
          <p class="grey-text text-lighten-4"> We are creating a collaborative system in order to share knowledge about training techniques, videos, guides and encouragement.</p>
          <span><a className="icons" href="https://www.linkedin.com/in/sara-likaount/"><FaLinkedinIn/></a></span>
          <span><a className="icons" href="https://github.com/sara-likaount"><FaGithub/></a></span>
          <span><a className="icons"><FaPhoneAlt/></a></span>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Information</h5>
          {user? (
          <ul>
            <li><a class="grey-text text-lighten-3" href="/AboutUs">About Us</a></li>
            <li><a class="grey-text text-lighten-3" href="/AboutUs">Contact</a></li>
            <li><a class="grey-text text-lighten-3" href="/Topchart">Info Table</a></li>
            <li><a class="grey-text text-lighten-3" href="/">Support</a></li>
          </ul>
          ): (
            <ul>
            <li><a class="grey-text text-lighten-3" >About Us</a></li>
            <li><a class="grey-text text-lighten-3">Contact</a></li>
            <li><a class="grey-text text-lighten-3">Info Table</a></li>
            <li><a class="grey-text text-lighten-3">Support</a></li>
          </ul>
          )}
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links</h5>
          {user ? (
          <ul>
            <li><a class="grey-text text-lighten-3" href="/Addchannel">Add Channel</a></li>
            <li><a class="grey-text text-lighten-3" href="/Channels">Watch Channels</a></li>
            <li><a class="grey-text text-lighten-3" href="/Channels">Delete Channel</a></li>
          </ul>
          ):
          (          <ul>
            <li><a class="grey-text text-lighten-3" >Add Channel</a></li>
            <li><a class="grey-text text-lighten-3">Watch Channels</a></li>
            <li><a class="grey-text text-lighten-3" >Delete Channel</a></li>
          </ul>)}
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © SaraLikaout, 2022. All rights reserved.
      </div>
    </div>
  </footer>
  );
};
export default Footer;