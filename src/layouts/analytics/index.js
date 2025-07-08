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
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Custom layout without navbar
import CustomLayout from "layouts/relatorio/components/CustomLayout";

// React and chart.js
import { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registrando componentes do Chart.js
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Analytics() {
  // Estado para filtro do gráfico de barras
  const [timeFilter, setTimeFilter] = useState("mensal");

  // Dados mockados para os cards de estatísticas
  const statsData = {
    total: 2450,
    positivos: 1050,
    negativos: 950,
    neutros: 450
  };

  // Dados mockados para o gráfico de barras
  const barChartData = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [
      {
        label: 'Positivo',
        data: [250, 300, 200, 300],
        backgroundColor: 'rgba(76, 175, 80, 0.6)',
        borderColor: 'rgba(76, 175, 80, 1)',
        borderWidth: 1,
      },
      {
        label: 'Negativo',
        data: [200, 250, 300, 200],
        backgroundColor: 'rgba(244, 67, 54, 0.6)',
        borderColor: 'rgba(244, 67, 54, 1)',
        borderWidth: 1,
      },
      {
        label: 'Neutro',
        data: [100, 120, 80, 150],
        backgroundColor: 'rgba(158, 158, 158, 0.6)',
        borderColor: 'rgba(158, 158, 158, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opções para o gráfico de barras
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Distribuição de Sentimentos por Semana',
      },
    },
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
        beginAtZero: true,
      },
    },
  };

  // Dados mockados para o gráfico de pizza
  const pieChartData = {
    labels: ['Positivo', 'Negativo', 'Neutro'],
    datasets: [
      {
        data: [statsData.positivos, statsData.negativos, statsData.neutros],
        backgroundColor: [
          'rgba(76, 175, 80, 0.6)',
          'rgba(244, 67, 54, 0.6)',
          'rgba(158, 158, 158, 0.6)',
        ],
        borderColor: [
          'rgba(76, 175, 80, 1)',
          'rgba(244, 67, 54, 1)',
          'rgba(158, 158, 158, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Opções para o gráfico de pizza
  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Distribuição Total de Sentimentos',
      },
    },
  };

  // Handler para mudança do filtro de tempo
  const handleTimeFilterChange = (event) => {
    setTimeFilter(event.target.value);
    // Aqui você poderia atualizar os dados do gráfico com base no novo filtro
  };

  return (
    <CustomLayout>
      <MDBox pt={6} pb={3}>
        {/* Seção 1 - Resumo */}
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
                  Analytics
                </MDTypography>
              </MDBox>
              <MDBox p={3}>
                <MDBox mb={2} display="flex" alignItems="center">
                  <MDTypography variant="button" fontWeight="regular" color="text">
                    Resumo de análise de sentimentos
                  </MDTypography>
                </MDBox>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="dark"
                        icon="article"
                        title="Total de Posts"
                        count={statsData.total}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="success"
                        icon="sentiment_satisfied"
                        title="Posts Positivos"
                        count={statsData.positivos}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="error"
                        icon="sentiment_dissatisfied"
                        title="Posts Negativos"
                        count={statsData.negativos}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="sentiment_neutral"
                        title="Posts Neutros"
                        count={statsData.neutros}
                      />
                    </MDBox>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>

        {/* Seção 2 - Gráfico de Barras */}
        <MDBox mt={6}>
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
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <MDTypography variant="h6" color="white">
                    Análise Temporal
                  </MDTypography>
                  <FormControl sx={{ minWidth: 120, backgroundColor: 'white', borderRadius: '4px' }} size="small">
                    <InputLabel id="time-filter-label">Período</InputLabel>
                    <Select
                      labelId="time-filter-label"
                      id="time-filter"
                      value={timeFilter}
                      label="Período"
                      onChange={handleTimeFilterChange}
                    >
                      <MenuItem value="semanal">Semanal</MenuItem>
                      <MenuItem value="mensal">Mensal</MenuItem>
                      <MenuItem value="trimestral">Trimestral</MenuItem>
                    </Select>
                  </FormControl>
                </MDBox>
                <MDBox p={3}>
                  <MDBox height="400px">
                    <Bar data={barChartData} options={barChartOptions} />
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>

        {/* Seção 3 - Gráfico de Pizza */}
        <MDBox mt={6}>
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
                    Distribuição de Sentimentos
                  </MDTypography>
                </MDBox>
                <MDBox p={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <MDBox height="400px">
                        <Pie data={pieChartData} options={pieChartOptions} />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox p={2}>
                        <MDTypography variant="h6" gutterBottom>
                          Análise de Sentimentos
                        </MDTypography>
                        <MDBox mb={2}>
                          <MDTypography variant="button" fontWeight="bold" color="success">
                            Positivo: {Math.round((statsData.positivos / statsData.total) * 100)}%
                          </MDTypography>
                          <MDTypography variant="body2" color="text">
                            {statsData.positivos} posts com sentimento positivo
                          </MDTypography>
                        </MDBox>
                        <MDBox mb={2}>
                          <MDTypography variant="button" fontWeight="bold" color="error">
                            Negativo: {Math.round((statsData.negativos / statsData.total) * 100)}%
                          </MDTypography>
                          <MDTypography variant="body2" color="text">
                            {statsData.negativos} posts com sentimento negativo
                          </MDTypography>
                        </MDBox>
                        <MDBox mb={2}>
                          <MDTypography variant="button" fontWeight="bold" color="secondary">
                            Neutro: {Math.round((statsData.neutros / statsData.total) * 100)}%
                          </MDTypography>
                          <MDTypography variant="body2" color="text">
                            {statsData.neutros} posts com sentimento neutro
                          </MDTypography>
                        </MDBox>
                      </MDBox>
                    </Grid>
                  </Grid>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </CustomLayout>
  );
}

export default Analytics;
