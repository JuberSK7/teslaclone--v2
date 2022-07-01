import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

////////////////////////////////////    FOOTER SECTION  ///////////////////////////////////

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Customer Care</FooterLinkTitle>
              <FooterLink to="/signin">Contact Us </FooterLink>
              <FooterLink to="/signin">FAQs </FooterLink>
              <FooterLink to="/signin">Returns & Exchange </FooterLink>
              <FooterLink to="/signin">Terms of Services </FooterLink>
              <FooterLink to="/signin">Privacy Policy </FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Inside Grace Eleyae</FooterLinkTitle>
              <FooterLink to="/signin">Aboute Us</FooterLink>
              <FooterLink to="/signin">GE Magzines </FooterLink>
              <FooterLink to="/signin">Why satin </FooterLink>
              <FooterLink to="/signin">Contact UIs </FooterLink>
              <FooterLink to="/signin">ReportUs </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>My Account</FooterLinkTitle>
              <FooterLink to="/signin">Sign In </FooterLink>
              <FooterLink to="/signin">Registers </FooterLink>
              <FooterLink to="/signin">My Rewards </FooterLink>
              <FooterLink to="/signin">Credit </FooterLink>
              <FooterLink to="/signin">Withdraw</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Explore</FooterLinkTitle>
              <FooterLink to="/signin">Home </FooterLink>
              <FooterLink to="/signin">Aboute </FooterLink>
              <FooterLink to="/signin">Capabilitis</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Account</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Tesla</SocialLogo>
            <WebsiteRight>
              Tesla Inc @ {new Date().getFullYear()}All Right Reserves
            </WebsiteRight>
            <SocialIcon>
              <SocialIconLink href="/" target="_blank" area-lable="FaceBook">
                <FaFacebook />
              </SocialIconLink>
            </SocialIcon>
            <SocialIcon>
              <SocialIconLink href="/" target="_blank" area-lable="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcon>
            <SocialIcon>
              <SocialIconLink href="/" target="_blank" area-lable="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcon>
            <SocialIcon>
              <SocialIconLink href="/" target="_blank" area-lable="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;


///////////////////////////////////   STYLED COMPNENTS  ///////////////////////////////////

const FooterContainer = styled.div`
  background: #101522;
`;

const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinkTitle = styled.div`
  font-size: 18px;
  margin-bottom: 12px;
`;

const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  alingn-items: flex-start;
  text-alig: left;
  margin: 16px;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLink = styled(Link)`
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    transition: 0.3s ease-out;
    color: orange;
  }
`;

const SocialMedia = styled.div`
  width: 100%;
  max-width: 1000px;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-between;
  max-width: 1200px;
  margin: 40px auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursore: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;
const WebsiteRight = styled.small`
  color: #fff;
  margin-left: 12px;
  margin-bottom: 16px;
`;

const SocialIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  align-items: center;
`;

const SocialIconLink = styled.a`
font-size: 24px;
color: #fff;


}
`;
