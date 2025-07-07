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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Layout component
import CustomLayout from "layouts/relatorio/components/CustomLayout";
import CustomFooter from "layouts/relatorio/components/CustomFooter";

// Data
import data from "layouts/relatorio/components/Assuntos/data";
import postsData from "layouts/relatorio/components/PostsRecentes/data";

// Componentes para exibição dos assuntos
import { Categoria, Exemplos } from "layouts/relatorio/components/Assuntos/data/componentes";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

function Assuntos() {
  const { assuntosPositivos, assuntosNegativos } = data();
  const { posts: postsOriginais } = postsData();
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);
  const [sentimento, setSentimento] = useState("todos");
  const [sentimentosSelecionados, setSentimentosSelecionados] = useState([]);
  const [ordenacao, setOrdenacao] = useState("recentes");
  const [anchorEl, setAnchorEl] = useState(null);
  
  // Dados de exemplo adicionais para posts
  const postsMock = [
    ...postsOriginais,
    {
      id: 10,
      username: "@prefeitura_oficial",
      profileImage: team3,
      mediaType: "Post",
      timestamp: "25/06/2025 às 14:30",
      date: "25 de junho de 2025",
      mediaExpired: false,
      caption: "Hoje inauguramos mais uma unidade de saúde básica no bairro Jardim Esperança. A nova UBS contará com 10 médicos e atenderá até 500 pessoas por dia.",
      likes: 230,
      comments: 45,
      sentiment: "Positivo",
      sentimentColor: "success",
      permalink: "https://instagram.com/p/example",
      categoria: "Saúde Básica"
    },
    {
      id: 11,
      username: "@jornalcidade",
      profileImage: team4,
      mediaType: "Post",
      timestamp: "24/06/2025 às 09:15",
      date: "24 de junho de 2025",
      mediaExpired: false,
      caption: "Moradores do bairro Centro reclamam da falta de segurança nas praças públicas durante a noite. 'Não podemos mais sair de casa depois das 20h', afirma dona Maria.",
      likes: 189,
      comments: 67,
      sentiment: "Negativo",
      sentimentColor: "error",
      permalink: "https://instagram.com/p/example2",
      categoria: "Segurança"
    },
    {
      id: 12,
      username: "@transportenews",
      profileImage: team2,
      mediaType: "Post",
      timestamp: "23/06/2025 às 11:45",
      date: "23 de junho de 2025",
      mediaExpired: false,
      caption: "A linha de ônibus 123 está operando normalmente hoje após manutenção na frota. Horários seguem conforme tabela oficial.",
      likes: 45,
      comments: 12,
      sentiment: "Neutro",
      sentimentColor: "info",
      permalink: "https://instagram.com/p/example3",
      categoria: "Transporte Público"
    },
  ];
  
  const menuAberto = Boolean(anchorEl);
  
  const handleClickOrdenacao = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleCloseOrdenacao = () => {
    setAnchorEl(null);
  };
  
  const handleSetOrdenacao = (tipo) => {
    setOrdenacao(tipo);
    handleCloseOrdenacao();
  };

  // Lista de todas as categorias disponíveis com seus ícones e cores
  const categorias = [
    { nome: "Todos", icone: "category", cor: "default" },
    { nome: "Transporte Público", icone: "directions_bus", cor: "info" },
    { nome: "Segurança", icone: "security", cor: "error" },
    { nome: "Política", icone: "gavel", cor: "warning" },
    { nome: "Meio Ambiente", icone: "park", cor: "success" },
    { nome: "Educação Municipal", icone: "school", cor: "primary" },
    { nome: "Infraestrutura", icone: "construction", cor: "warning" },
    { nome: "Saúde Básica", icone: "local_hospital", cor: "error" },
    { nome: "Outro", icone: "label", cor: "default" },
  ];
  
  // Lista de opções de sentimento com ícones e cores
  const sentimentos = [
    { valor: "todos", nome: "Todos", icone: "sentiment_neutral", cor: "default" },
    { valor: "positivo", nome: "Positivo", icone: "sentiment_satisfied", cor: "success" },
    { valor: "negativo", nome: "Negativo", icone: "sentiment_dissatisfied", cor: "error" },
    { valor: "neutro", nome: "Neutro", icone: "sentiment_neutral", cor: "info" },
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Estado para armazenar múltiplos sentimentos selecionados

  // Atualiza o estado de sentimento com base nos sentimentos selecionados
  useEffect(() => {
    if (sentimentosSelecionados.length === 0 || 
        (sentimentosSelecionados.length === 1 && sentimentosSelecionados[0] === "todos") ||
        sentimentosSelecionados.length === sentimentos.filter(s => s.valor !== "todos").length) {
      setSentimento("todos");
    } else if (sentimentosSelecionados.length === 1) {
      setSentimento(sentimentosSelecionados[0]);
    } else {
      // Se houver múltiplos sentimentos selecionados, mantemos como "todos" para compatibilidade
      setSentimento("todos");
    }
  }, [sentimentosSelecionados]);

  const handleSentimentoClick = (valor) => {
    // Se a opção for "todos"
    if (valor === "todos") {
      setSentimentosSelecionados(prev => {
        // Se já tiver algum sentimento selecionado, limpa todos
        if (prev.length > 0) {
          return [];
        } else {
          // Seleciona todos os sentimentos exceto "todos"
          return sentimentos
            .filter(s => s.valor !== "todos")
            .map(s => s.valor);
        }
      });
    } else {
      // Comportamento normal para outros sentimentos
      setSentimentosSelecionados(prev => {
        if (prev.includes(valor)) {
          return prev.filter(s => s !== valor);
        } else {
          return [...prev, valor];
        }
      });
    }
  };

  const handleCategoriaClick = (categoria) => {
    // Se a categoria for "Todos", limpa todas as seleções ou seleciona todas
    if (categoria === "Todos") {
      setCategoriasSelecionadas(prev => {
        // Se já tiver alguma categoria selecionada, limpa todas
        if (prev.length > 0) {
          return [];
        } else {
          // Seleciona todas as categorias exceto "Todos"
          return categorias
            .filter(cat => cat.nome !== "Todos")
            .map(cat => cat.nome);
        }
      });
    } else {
      // Comportamento normal para outras categorias
      setCategoriasSelecionadas(prev => {
        if (prev.includes(categoria)) {
          return prev.filter(cat => cat !== categoria);
        } else {
          return [...prev, categoria];
        }
      });
    }
  };

  const handleFiltrar = () => {
    console.log("Filtrando por:", { 
      dataInicial, 
      dataFinal, 
      categorias: categoriasSelecionadas, 
      sentimento 
    });
    // Aqui implementaria a lógica para filtrar os assuntos
  };

  const handleLimparFiltros = () => {
    setDataInicial("");
    setDataFinal("");
    setCategoriasSelecionadas([]);
    setSentimentosSelecionados([]);
    setSentimento("todos");
  };

  // Função para filtrar os assuntos com base nos critérios
  const filtrarAssuntos = (assuntos) => {
    if (categoriasSelecionadas.length === 0) return assuntos;
    
    return assuntos.filter(item => {
      // Extrai o nome da categoria do componente
      const categoriaProps = item.categoria.props;
      const categoriaNome = categoriaProps.nome;
      return categoriasSelecionadas.includes(categoriaNome);
    });
  };
  
  // Função para filtrar e ordenar posts
  const filtrarEOrdenarPosts = () => {
    // Filtrar por categoria
    let postsFiltered = postsMock;
    
    if (categoriasSelecionadas.length > 0) {
      postsFiltered = postsFiltered.filter(post => 
        categoriasSelecionadas.includes(post.categoria)
      );
    }
    
    // Filtrar por sentimento
    if (sentimentosSelecionados.length > 0 && 
        sentimentosSelecionados.length < sentimentos.filter(s => s.valor !== "todos").length) {
      postsFiltered = postsFiltered.filter(post => 
        sentimentosSelecionados.includes(post.sentiment.toLowerCase())
      );
    }
    
    // Ordenar posts
    let postsOrdenados = [...postsFiltered];
    
    switch (ordenacao) {
      case "recentes":
        postsOrdenados.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        break;
      case "curtidas":
        postsOrdenados.sort((a, b) => b.likes - a.likes);
        break;
      case "comentarios":
        postsOrdenados.sort((a, b) => b.comments - a.comments);
        break;
      default:
        break;
    }
    
    return postsOrdenados;
  };
  
  // Componente para exibir um post
  const PostCard = ({ post }) => {
    // Verificar se o post existe
    if (!post) return null;
    
    return (
      <Card 
        sx={{ 
          height: 320,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column"
        }} 
        onClick={() => post.permalink && window.open(post.permalink, "_blank")}
      >
        <MDBox p={2} display="flex" flexDirection="column" height="100%">
          {/* Header com username e tipo de mídia */}
          <MDBox display="flex" justifyContent="space-between" mb={1}>
            <MDBox display="flex" alignItems="center" maxWidth="70%">
              <MDAvatar src={post.profileImage || ""} size="sm" />
              <MDTypography variant="button" fontWeight="medium" ml={1} noWrap>
                {post.username || "Usuário"}
              </MDTypography>
            </MDBox>
            <MDBox>
              {post.mediaType && (
                <MDBadge
                  variant="contained"
                  color={post.mediaType === "Reels" ? "error" : post.mediaType === "Stories" ? "warning" : "info"}
                  size="xs"
                  badgeContent={post.mediaType}
                  container
                />
              )}
            </MDBox>
          </MDBox>
          
          {/* Data e categoria */}
          <MDBox mb={1} display="flex" justifyContent="space-between">
            <MDTypography variant="caption" color="text">
              {post.date || "Sem data"}
            </MDTypography>
            <MDTypography variant="caption" fontWeight="medium" color="text">
              {post.categoria || "Sem categoria"}
            </MDTypography>
          </MDBox>

          {/* Caption */}
          <MDBox mb={2} flex={1}>
            <MDTypography 
              variant="body2" 
              color="text"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 6,
                WebkitBoxOrient: "vertical",
                fontSize: "0.875rem",
              }}
            >
              {post.caption || "Sem conteúdo"}
            </MDTypography>
          </MDBox>

          {/* Footer com interações e sentimento */}
          <MDBox display="flex" justifyContent="space-between" alignItems="center" mt="auto">
            <MDBox display="flex" alignItems="center">
              <MDBox display="flex" alignItems="center" mr={2}>
                <Icon fontSize="small" sx={{ color: "text.secondary" }}>
                  favorite
                </Icon>
                <MDTypography variant="button" color="text" fontWeight="light" ml={0.5}>
                  {post.likes || 0}
                </MDTypography>
              </MDBox>
              <MDBox display="flex" alignItems="center">
                <Icon fontSize="small" sx={{ color: "text.secondary" }}>
                  chat
                </Icon>
                <MDTypography variant="button" color="text" fontWeight="light" ml={0.5}>
                  {post.comments || 0}
                </MDTypography>
              </MDBox>
            </MDBox>
            <MDBox>
              <Chip
                icon={
                  <Icon>
                    {post.sentiment === "Positivo" ? "sentiment_satisfied" : 
                     post.sentiment === "Negativo" ? "sentiment_dissatisfied" : 
                     "sentiment_neutral"}
                  </Icon>
                }
                label={post.sentiment || "Neutro"}
                color={post.sentimentColor || "default"}
                size="small"
              />
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    );
  };

  // Aplicar filtros aos posts
  const postsFiltrados = filtrarEOrdenarPosts();

  return (
    <CustomLayout>
      <MDBox pt={6} pb={3}>
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
                  Assuntos
                </MDTypography>
              </MDBox>
              <MDBox p={3}>
                {/* Filtros */}
                <MDBox mb={3}>
                  <Grid container spacing={3}>
                    {/* Filtros de Data */}
                    <Grid item xs={12} md={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            label="Data inicial"
                            type="date"
                            value={dataInicial}
                            onChange={(e) => setDataInicial(e.target.value)}
                            size="small"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Icon fontSize="small">calendar_today</Icon>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            label="Data final"
                            type="date"
                            value={dataFinal}
                            onChange={(e) => setDataFinal(e.target.value)}
                            size="small"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Icon fontSize="small">calendar_today</Icon>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    
                    {/* Botões de Ação */}
                    <Grid item xs={12} md={6}>
                      <Box display="flex" justifyContent="flex-end">
                        <MDButton 
                          variant="text" 
                          color="secondary" 
                          onClick={handleLimparFiltros}
                          sx={{ mr: 1 }}
                        >
                          Limpar
                        </MDButton>
                        <MDButton 
                          variant="gradient" 
                          color="info" 
                          onClick={handleFiltrar}
                        >
                          Filtrar
                        </MDButton>
                      </Box>
                    </Grid>
                    

                    
                    {/* Sentimentos como Chips */}
                    <Grid item xs={12}>
                      <MDBox mt={2}>
                        <MDTypography variant="subtitle2" fontWeight="medium" mb={1}>
                          Sentimento:
                        </MDTypography>
                        <MDBox display="flex" flexWrap="wrap" gap={1}>
                          {sentimentos.map((item) => (
                            <Chip
                              key={item.valor}
                              icon={<Icon>{item.icone}</Icon>}
                              label={item.nome}
                              clickable
                              color={
                                item.valor === "todos" && sentimentosSelecionados.length === 0 ? item.cor :
                                item.valor === "todos" && sentimentosSelecionados.length === sentimentos.filter(s => s.valor !== "todos").length ? item.cor :
                                sentimentosSelecionados.includes(item.valor) ? item.cor : "default"
                              }
                              onClick={() => handleSentimentoClick(item.valor)}
                              variant={
                                item.valor === "todos" && sentimentosSelecionados.length === 0 ? "filled" :
                                item.valor === "todos" && sentimentosSelecionados.length === sentimentos.filter(s => s.valor !== "todos").length ? "filled" :
                                sentimentosSelecionados.includes(item.valor) ? "filled" : "outlined"
                              }
                              sx={{ mb: 1 }}
                            />
                          ))}
                        </MDBox>
                      </MDBox>
                    </Grid>
                    
                    {/* Categorias como Chips */}
                    <Grid item xs={12}>
                      <MDBox mt={2}>
                        <MDTypography variant="subtitle2" fontWeight="medium" mb={1}>
                          Categorias:
                        </MDTypography>
                        <MDBox display="flex" flexWrap="wrap" gap={1}>
                          {categorias.map((categoria) => (
                            <Chip
                              key={categoria.nome}
                              icon={<Icon>{categoria.icone}</Icon>}
                              label={categoria.nome}
                              clickable
                              color={categoriasSelecionadas.includes(categoria.nome) ? categoria.cor : "default"}
                              onClick={() => handleCategoriaClick(categoria.nome)}
                              variant={categoriasSelecionadas.includes(categoria.nome) ? "filled" : "outlined"}
                              sx={{ mb: 1 }}
                            />
                          ))}
                        </MDBox>
                      </MDBox>
                    </Grid>
                  </Grid>
                </MDBox>

                {/* Resultados dos assuntos filtrados */}
                <MDBox p={3}>
                  {/* Título da seção de Posts */}
                  <MDBox 
                    display="flex" 
                    alignItems="center" 
                    mb={3}
                    p={2}
                    borderRadius="lg"
                    sx={{ backgroundColor: "info.main", color: "white" }}
                  >
                    <Icon sx={{ mr: 1 }}>forum</Icon>
                    <MDTypography variant="h6" color="white" fontWeight="medium">
                      Posts ({postsFiltrados.length})
                    </MDTypography>
                    <MDBox ml="auto" display="flex" alignItems="center">
                      <MDTypography variant="body2" color="white" mr={1}>
                        Ordenar por:
                      </MDTypography>
                      <IconButton
                        aria-label="ordenar"
                        aria-controls={menuAberto ? "ordenacao-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={menuAberto ? "true" : undefined}
                        onClick={handleClickOrdenacao}
                        sx={{ color: "white" }}
                      >
                        <Icon>{ordenacao === "recentes" ? "access_time" : ordenacao === "curtidas" ? "favorite" : "chat"}</Icon>
                      </IconButton>
                      <Menu
                        id="ordenacao-menu"
                        anchorEl={anchorEl}
                        open={menuAberto}
                        onClose={handleCloseOrdenacao}
                        MenuListProps={{
                          "aria-labelledby": "ordenacao-button",
                        }}
                      >
                        <MenuItem onClick={() => handleSetOrdenacao("recentes")} selected={ordenacao === "recentes"}>
                          <ListItemIcon>
                            <Icon>access_time</Icon>
                          </ListItemIcon>
                          <ListItemText>Mais recentes</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => handleSetOrdenacao("curtidas")} selected={ordenacao === "curtidas"}>
                          <ListItemIcon>
                            <Icon>favorite</Icon>
                          </ListItemIcon>
                          <ListItemText>Mais curtidas</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => handleSetOrdenacao("comentarios")} selected={ordenacao === "comentarios"}>
                          <ListItemIcon>
                            <Icon>chat</Icon>
                          </ListItemIcon>
                          <ListItemText>Mais comentários</ListItemText>
                        </MenuItem>
                      </Menu>
                    </MDBox>
                  </MDBox>
                  
                  {/* Listagem de posts */}
                  <MDBox>
                    {postsFiltrados.length > 0 ? (
                      <Grid container spacing={3}>
                        {postsFiltrados.map((post) => (
                          <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <PostCard post={post} />
                          </Grid>
                        ))}
                      </Grid>
                    ) : (
                      <MDBox textAlign="center" py={6}>
                        <Icon color="text" sx={{ fontSize: 40, mb: 2, opacity: 0.5 }}>
                          search_off
                        </Icon>
                        <MDTypography variant="h5" color="text" opacity={0.7}>
                          Nenhum post encontrado com os filtros selecionados
                        </MDTypography>
                        <MDTypography variant="body2" color="text" opacity={0.7} mt={1}>
                          Tente selecionar outras categorias ou limpar os filtros
                        </MDTypography>
                      </MDBox>
                    )}
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <CustomFooter />
    </CustomLayout>
  );
}

export default Assuntos;
