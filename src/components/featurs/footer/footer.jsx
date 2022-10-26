import "./footer.css";
import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import Logo from "../Logo/Logo";

export  const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <Logo size="100px"/>
              {/* <span className="ml-3 h5 font-weight-bold"> TechShare</span> */}
            </a>
            <p className="my-3" style={{ width: '250px' }}>
            We are creating a collaborative system in order to share knowledge about training techniques, videos, guides and encouragement
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" href="https://he-il.facebook.com/"/>
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3" href="https://www.linkedin.com/in/sara-likaount/">
                <CDBIcon fab icon="linkedin-in" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2" href="https://github.com/sara-likaount">
                <CDBIcon fab icon="github" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Information
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/AboutUs">About Us</CDBFooterLink>
              <CDBFooterLink href="/AboutUs">Contact</CDBFooterLink>
              <CDBFooterLink href="/Topchart">Info Table</CDBFooterLink>
              <CDBFooterLink href="/">Support</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
            Join Us
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/Profile">Profile</CDBFooterLink>
              <CDBFooterLink >Sign Up</CDBFooterLink>
              <CDBFooterLink >Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/Add channel">Add Channel</CDBFooterLink>
              <CDBFooterLink href="/Channels">Watch Channel</CDBFooterLink>
              <CDBFooterLink href="/Channels">Delet Channel</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; SaraLikaout, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};
