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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Data
import data from "layouts/relatorio/components/Assuntos/data";

function Assuntos() {
  const { assuntosPositivos, assuntosNegativos, verTodosAssuntos } = data();
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");

  const handleFiltrar = () => {
    console.log("Filtrando por data:", { dataInicial, dataFinal });
    // Aqui poderia implementar a lógica para filtrar os assuntos por data
  };

  return (
    <Card>
      <MDBox
        mx={2}
        mt={-3}
        py={3}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <MDTypography variant="h6" color="white">
          Assuntos
        </MDTypography>
        <MDButton
          variant="outlined"
          color="white"
          size="small"
          onClick={verTodosAssuntos}
        >
          Ver todos
        </MDButton>
      </MDBox>
      <MDBox p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MDBox display="flex" justifyContent="flex-end" alignItems="center" mb={2}>
              <MDBox display="flex" alignItems="center">
                <MDBox mr={2}>
                  <TextField
                    label="Data inicial"
                    type="date"
                    value={dataInicial}
                    onChange={(e) => setDataInicial(e.target.value)}
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Icon fontSize="small">calendar_today</Icon>
                        </InputAdornment>
                      ),
                    }}
                  />
                </MDBox>
                <MDBox mr={2}>
                  <TextField
                    label="Data final"
                    type="date"
                    value={dataFinal}
                    onChange={(e) => setDataFinal(e.target.value)}
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Icon fontSize="small">calendar_today</Icon>
                        </InputAdornment>
                      ),
                    }}
                  />
                </MDBox>
                <MDButton variant="gradient" color="info" size="small" onClick={handleFiltrar}>
                  Filtrar
                </MDButton>
              </MDBox>
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <MDBox>
              <MDBox display="flex" alignItems="center" mb={2}>
                <Icon sx={{ color: "success.main", mr: 1 }}>sentiment_satisfied</Icon>
                <MDTypography variant="h6" color="success">
                  Assuntos Positivos
                </MDTypography>
              </MDBox>
              
              {assuntosPositivos.map((item, index) => (
                <MDBox key={index} mb={3} p={2} sx={{ 
                  borderRadius: "10px", 
                  backgroundColor: "rgba(0,230,118,0.1)",
                  "&:hover": { backgroundColor: "rgba(0,230,118,0.2)" }
                }}>
                  {item.categoria}
                  {item.exemplos}
                </MDBox>
              ))}
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <MDBox>
              <MDBox display="flex" alignItems="center" mb={2}>
                <Icon sx={{ color: "error.main", mr: 1 }}>sentiment_dissatisfied</Icon>
                <MDTypography variant="h6" color="error">
                  Assuntos Negativos
                </MDTypography>
              </MDBox>
              
              {assuntosNegativos.map((item, index) => (
                <MDBox key={index} mb={3} p={2} sx={{ 
                  borderRadius: "10px", 
                  backgroundColor: "rgba(255,0,0,0.1)",
                  "&:hover": { backgroundColor: "rgba(255,0,0,0.2)" }
                }}>
                  {item.categoria}
                  {item.exemplos}
                </MDBox>
              ))}
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default Assuntos;
