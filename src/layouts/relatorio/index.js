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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Custom components
import CustomFooter from "layouts/relatorio/components/CustomFooter";

// Custom layout without navbar
import CustomLayout from "layouts/relatorio/components/CustomLayout";

// Relatório components
import PostsRecentes from "layouts/relatorio/components/PostsRecentes";
import Assuntos from "layouts/relatorio/components/Assuntos";

function Relatorio() {
  return (
    <CustomLayout>
      <MDBox pt={6} pb={3}>
        {/* Seção 1 - Visão Geral */}
        <Grid container spacing={6}>
          <Grid item xs={12}>
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
              >
                <MDTypography variant="h6" color="white">
                  Visão Geral
                </MDTypography>
              </MDBox>
              <MDBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="dark"
                        icon="article"
                        title="Total de Postagens"
                        count={1583}

                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="success"
                        icon="sentiment_satisfied"
                        title="Postagens Positivas"
                        count="742"

                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="error"
                        icon="sentiment_dissatisfied"
                        title="Postagens Negativas"
                        count="841"

                      />
                    </MDBox>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>

        {/* Seção 2 - Posts Recentes (Carrossel) */}
        <MDBox mt={6}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <PostsRecentes />
            </Grid>
          </Grid>
        </MDBox>

        {/* Seção 3 - Assuntos */}
        <MDBox mt={6}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Assuntos />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <CustomFooter />
    </CustomLayout>
  );
}

export default Relatorio;
