/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// @mui material components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import { Tooltip, Chip } from "@mui/material";

// Componente para exibir categoria com porcentagem
export const Categoria = ({ nome, porcentagem, numero, onClick, icone, cor }) => {
  return (
    <MDBox onClick={onClick} sx={{ cursor: "pointer" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center">
        <MDBox display="flex" alignItems="center">
          <Icon sx={{ color: `${cor}.main`, mr: 1 }}>{icone}</Icon>
          <MDTypography variant="button" fontWeight="medium">
            {nome}
          </MDTypography>
        </MDBox>
        <MDBox>
          <MDTypography variant="button" fontWeight="medium">
            {numero}
          </MDTypography>
          <MDTypography variant="button" color="text" sx={{ ml: 0.5 }}>
            ({porcentagem}%)
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );
};

// Componente para exibir exemplos de assuntos
export const Exemplos = ({ legendas }) => {
  return (
    <MDBox mt={1}>
      {legendas.map((legenda, index) => (
        <MDBox key={index} mt={1}>
          <MDTypography variant="caption" color="text">
            "{legenda}"
          </MDTypography>
        </MDBox>
      ))}
    </MDBox>
  );
};
