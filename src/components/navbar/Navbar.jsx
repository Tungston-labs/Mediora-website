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

import { Link, animateScroll as scroll, scroller } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

const getNavOffset = () => {
  const w = window.innerWidth;
  if (w >= 1440) return -165; // TopBar 6.5rem + BottomBar 3.5rem = 10rem = 160px
  if (w >= 1024) return -157; // 6rem + 3.5rem = 9.5rem = 152px
  if (w >= 768)  return -149; // 5.5rem + 3.5rem = 9rem = 144px
  return -85;                  // mobile: TopBar only 5rem = 80px
};

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

<Button
  as={Link}
  to="services"
  smooth={true}
  duration={500}
  offset={-90}
>
  Explore Plans
</Button>

        </TopContent>
      </TopBar>

      <BottomBar>
        <BottomContent>

          <NavLinks>
            <NavLink
              as="button"
              onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
            >
              Home
            </NavLink>
            <NavLink
              as="button"
              onClick={() => scroller.scrollTo('about', { duration: 500, smooth: true, offset: getNavOffset() })}
            >
              About Us
            </NavLink>
            <NavLink
              as="button"
              onClick={() => scroller.scrollTo('services', { duration: 500, smooth: true, offset: getNavOffset() })}
            >
              Our Service
            </NavLink>
            <NavLink as="button" onClick={openContact}>
              Contact Us
            </NavLink>
          </NavLinks>

          {/* <SocialGroup>
            <SocialIcon src={facebookLogo} />
            <SocialIcon src={twitterLogo} />
            <SocialIcon src={linkedinLogo} />
          </SocialGroup> */}

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
