import React, { useEffect } from "react";
import { Drawer, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "./Navbar.styles";
import { Link, animateScroll as scroll, scroller } from "react-scroll";

import { DrawerButton } from "./MobileDrawer.styles";
import useLockBodyScroll from "./useLockBodyScroll";

const getNavOffset = () => {
  const w = window.innerWidth;
  if (w >= 1440) return -165;
  if (w >= 1024) return -157;
  if (w >= 768)  return -149;
  return -85;
};

const MobileDrawer = ({ open, onClose, openContact }) => {

  useLockBodyScroll(open);


  useEffect(() => {

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (open) window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);

  }, [open, onClose]);


  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}

      BackdropProps={{
        sx: {
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.35)",
        },
      }}

      sx={{
        "& .MuiDrawer-paper": {
          top: "0",
          height: "100%",
          backgroundColor: "#01A35B",
          color: "#fff",
          padding: "2.5rem",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          color: "white",
          zIndex: 1400,
        }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 3,
          paddingTop: "1rem",
        }}
      >
        <NavLink
          as="button"
          onClick={() => {
            scroll.scrollToTop({ duration: 500, smooth: true });
            onClose();
          }}
        >
          Home
        </NavLink>

        <NavLink
          as="button"
          onClick={() => {
            scroller.scrollTo('about', { duration: 500, smooth: true, offset: getNavOffset() });
            onClose();
          }}
        >
          About Us
        </NavLink>

        <NavLink
          as="button"
          onClick={() => {
            scroller.scrollTo('services', { duration: 500, smooth: true, offset: getNavOffset() });
            onClose();
          }}
        >
          Our Service
        </NavLink>

        <NavLink
          as="button"
          onClick={() => {
            onClose();
            openContact?.();
          }}
        >
          Contact Us
        </NavLink>

        <DrawerButton onClick={() => {
          scroller.scrollTo('services', { duration: 500, smooth: true, offset: getNavOffset() });
          onClose();
        }}>
          Explore Plans
        </DrawerButton>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
