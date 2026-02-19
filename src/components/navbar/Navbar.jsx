import React, { useState } from "react";
import {
  NavWrapper,
  TopBar,
  TopContent,
  Logo,
  InfoGroup,
  Button,
  BottomBar,
  BottomContent,
  NavLinks,
  NavLink,
  SocialGroup,
  SocialIcon,
  MenuWrapper
} from "./Navbar.styles";

import NavbarInfoBlock from "./NavbarInfoBlock";
import MobileDrawer from "./MobileDrawer";

import medioraLogo from "../../assets/navbar/mediora_logo.svg";
import callIcon from "../../assets/navbar/cal_icon.svg";
import atIcon from "../../assets/navbar/at_icon.svg";

import facebookLogo from "../../assets/navbar/facebook_logo.svg";
import twitterLogo from "../../assets/navbar/Twitter_logo.svg";
import linkedinLogo from "../../assets/navbar/linkedin_logo.svg";

import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ openContact }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <NavWrapper>

      <TopBar>
        <TopContent>

          <Logo src={medioraLogo} />

          <MenuWrapper onClick={() => setDrawerOpen(true)}>
            <MenuIcon sx={{ fontSize: "2rem" }} />
          </MenuWrapper>

          <InfoGroup>
            <NavbarInfoBlock
              icon={callIcon}
              title="Call to our experts"
              subtitle="0485 2000361"
            />
            <NavbarInfoBlock
              icon={callIcon}
              title="Our mobile number"
              subtitle="(+91) 9567923861"
            />
            <NavbarInfoBlock
              icon={atIcon}
              title="Email us"
              subtitle="mediorainfo@gmail.com"
            />
          </InfoGroup>

          <Button>Explore Plans</Button>

        </TopContent>
      </TopBar>

      <BottomBar>
        <BottomContent>

          <NavLinks>
            <NavLink href="#">Home</NavLink>
            <NavLink
              as={Link}
              to="about"
              smooth={true}
              duration={500}
              offset={-90}
              spy={true}
              activeClass="active"
            >
              About Us
            </NavLink>
            <NavLink
              as={Link}
              to="services"
              smooth={true}
              duration={500}
              offset={-90}
              spy={true}
              activeClass="active"
            >
              Our Service
            </NavLink>
            <NavLink as="button" onClick={openContact}>
              Contact Us
            </NavLink>
          </NavLinks>

          <SocialGroup>
            <SocialIcon src={facebookLogo} />
            <SocialIcon src={twitterLogo} />
            <SocialIcon src={linkedinLogo} />
          </SocialGroup>

        </BottomContent>
      </BottomBar>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        openContact={openContact}
      />

    </NavWrapper>
  );
};

export default Navbar;
