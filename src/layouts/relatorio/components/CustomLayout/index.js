/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";

// Material Dashboard 2 React routes
import routes from "routes";

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

function CustomLayout({ children }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();
  const [navbarType, setNavbarType] = useState();

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);

  return (
    <>
      <Sidenav
        color="info"
        brand={(transparentNavbar && !darkMode) || !darkMode ? brandDark : brandWhite}
        brandName="MonitorPol"
        routes={routes}
        onMouseEnter={() => setOnMouseEnter(true)}
        onMouseLeave={() => {
          setOnMouseEnter(false);
          // Removido o recolhimento automático do menu
        }}
      />
      <MDBox
        sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
          p: 3,
          position: "relative",

          [breakpoints.up("xl")]: {
            marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
            transition: transitions.create(["margin-left", "margin-right"], {
              easing: transitions.easing.easeInOut,
              duration: transitions.duration.standard,
            }),
          },
        })}
      >
      {/* Barra de navegação vazia apenas para controle do menu lateral */}
      <AppBar
        position={navbarType}
        color="inherit"
        sx={{
          boxShadow: "none",
          backdropFilter: "none",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar sx={{ minHeight: "64px", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <IconButton
            size="small"
            color="inherit"
            sx={{
              p: 1.25,
              mr: 2,
            }}
            onClick={handleMiniSidenav}
          >
            <Icon>{miniSidenav ? "menu_open" : "menu"}</Icon>
          </IconButton>
          <MDBox>
            <MDBox component="h4" fontWeight="bold" color="dark" mb={0}>
              Relatório
            </MDBox>
            <MDBox component="p" variant="button" color="text" mb={0}>
              Visão geral de postagens e assuntos
            </MDBox>
          </MDBox>
        </Toolbar>
      </AppBar>
      
      {children}
    </MDBox>
    </>
  );
}

// Typechecking props for the CustomLayout
CustomLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomLayout;
