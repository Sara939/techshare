import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">TechShare</h5>
          <p class="grey-text text-lighten-4"> We are creating a collaborative system in order to share knowledge about training techniques, videos, guides and encouragement.</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Information</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="/AboutUs">About Us</a></li>
            <li><a class="grey-text text-lighten-3" href="/Contact">Contact</a></li>
            <li><a class="grey-text text-lighten-3" href="/Topchart">Info Table</a></li>
            <li><a class="grey-text text-lighten-3" href="/">Support</a></li>
          </ul>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="/Add channel">Add Channel</a></li>
            <li><a class="grey-text text-lighten-3" href="/Channels">Watch Channels</a></li>
            <li><a class="grey-text text-lighten-3" href="/Channels">Delete Channel</a></li>
            <i class="fa fa-github" aria-hidden="true">jj</i>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © SaraLikaout, 2022. All rights reserved.
      </div>
    </div>
  </footer>
    // <CDBModalFooter className="shadow">
    //   <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
    //     <CDBBox display="flex" justifyContent="between" className="flex-wrap">
    //       <CDBBox>
    //         <a href="/" className="d-flex align-items-center p-0 text-light">
    //           {/* <Logo size="100px"/> */}
    //           <span className="ml-3 h5 font-weight-bold"> TechShare</span>
    //         </a>
    //         <p className="my-3" style={{ width: '250px' }}>
    //         We are creating a collaborative system in order to share knowledge about training techniques, videos, guides and encouragement
    //         </p>
    //         <CDBBox display="flex" className="mt-4">
    //           <CDBBtn flat color="dark" className="mx-3" href="https://www.linkedin.com/in/sara-likaount/">
    //             <CDBCloseIcon fab icon="linkedin-in" />
    //           </CDBBtn>
    //           <CDBBtn flat color="dark" className="p-2" href="https://github.com/sara-likaount">
    //             <CDBCloseIcon fab icon="github" />
    //           </CDBBtn>
    //         </CDBBox>
    //       </CDBBox>
    //       <CDBBox>
    //         <p className="h5 mb-4" style={{ fontWeight: '600' }}>
    //           Information
    //         </p>
    //         <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
    //           <CDBPageLink href="/AboutUs">About Us</CDBPageLink>
    //           <CDBPageLink href="/AboutUs">Contact</CDBPageLink>
    //           <CDBPageLink href="/Topchart">Info Table</CDBPageLink>
    //           <CDBPageLink href="/">Support</CDBPageLink>
    //         </CDBBox>
    //       </CDBBox>
    //       <CDBBox>
    //         <p className="h5 mb-4" style={{ fontWeight: '600' }}>
    //         Join Us
    //         </p>
    //         <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
    //           <CDBPageLink >Sign Up</CDBPageLink>
    //           <CDBPageLink >Sign In</CDBPageLink>
    //         </CDBBox>
    //       </CDBBox>
    //       <CDBBox>
    //         <p className="h5 mb-4" style={{ fontWeight: '600' }}>
    //           Products
    //         </p>
    //         <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
    //           <CDBPageLink href="/Add channel">Add Channel</CDBPageLink>
    //           <CDBPageLink href="/Channels">Watch Channel</CDBPageLink>
    //           <CDBPageLink href="/Channels">Delete Channel</CDBPageLink>
    //         </CDBBox>
    //       </CDBBox>
    //     </CDBBox>
    //     <small className="text-center mt-5">&copy; SaraLikaout, 2022. All rights reserved.</small>
    //   </CDBBox>
    // </CDBModalFooter>
  );
};
export default Footer;