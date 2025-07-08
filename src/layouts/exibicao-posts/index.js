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
import { useParams, useLocation } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Chip from "@mui/material/Chip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Layout component
import CustomLayout from "layouts/relatorio/components/CustomLayout";
import CustomFooter from "layouts/relatorio/components/CustomFooter";

// Data
import postsData from "layouts/relatorio/components/PostsRecentes/data";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function ExibicaoPosts() {
  const { type, id } = useParams();
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Dados de exemplo para posts
  const { posts: postsOriginais } = postsData();
  
  // Posts adicionais para simulação
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
      caption: "Hoje inauguramos mais uma unidade de saúde básica no bairro Jardim Esperança. A nova UBS contará com 10 médicos e atenderá até 500 pessoas por dia. #saude #prefeitura #novaUBS",
      likes: 230,
      comments: 45,
      sentiment: "Positivo",
      sentimentColor: "success",
      permalink: "https://instagram.com/p/example",
      categoria: "Saúde Básica",
      candidato: "João Silva",
      hashtags: ["#saude", "#prefeitura", "#novaUBS"]
    },
    {
      id: 11,
      username: "@jornalcidade",
      profileImage: team4,
      mediaType: "Post",
      timestamp: "24/06/2025 às 09:15",
      date: "24 de junho de 2025",
      mediaExpired: false,
      caption: "Moradores do bairro Centro reclamam da falta de segurança nas praças públicas durante a noite. 'Não podemos mais sair de casa depois das 20h', afirma dona Maria. #seguranca #problemas #centro",
      likes: 189,
      comments: 67,
      sentiment: "Negativo",
      sentimentColor: "error",
      permalink: "https://instagram.com/p/example2",
      categoria: "Segurança Pública",
      candidato: "Maria Oliveira",
      hashtags: ["#seguranca", "#problemas", "#centro"]
    },
    {
      id: 12,
      username: "@politica_agora",
      profileImage: team2,
      mediaType: "Reels",
      timestamp: "23/06/2025 às 18:45",
      date: "23 de junho de 2025",
      mediaExpired: false,
      caption: "O candidato Carlos Santos apresentou hoje seu plano de governo para a cidade. Entre as propostas estão melhorias na saúde, educação e transporte público. #eleicoes2025 #politica #planoDeGoverno",
      likes: 320,
      comments: 89,
      sentiment: "Neutro",
      sentimentColor: "info",
      permalink: "https://instagram.com/p/example3",
      categoria: "Política",
      candidato: "Carlos Santos",
      hashtags: ["#eleicoes2025", "#politica", "#planoDeGoverno"]
    }
  ];
  
  useEffect(() => {
    // Simula carregamento de dados
    setLoading(true);
    
    // Recupera o item da navegação ou simula busca por ID
    let currentItem;
    if (location.state && location.state.item) {
      currentItem = location.state.item;
    } else {
      // Simulação de busca por ID
      if (type === "candidato") {
        const candidatos = [
          { id: 1, nome: "João Silva", partido: "PSD", cargo: "Prefeito" },
          { id: 2, nome: "Maria Oliveira", partido: "PT", cargo: "Vereadora" },
          { id: 3, nome: "Carlos Santos", partido: "PSDB", cargo: "Prefeito" }
        ];
        currentItem = candidatos.find(c => c.id === parseInt(id));
      } else if (type === "hashtag") {
        const hashtags = [
          { id: 1, texto: "#eleicoes2025" },
          { id: 2, texto: "#politica" },
          { id: 3, texto: "#cidademelhor" }
        ];
        currentItem = hashtags.find(h => h.id === parseInt(id));
      }
    }
    
    setItem(currentItem);
    
    // Filtra posts de acordo com o tipo e item
    let filteredPosts = [];
    if (type === "candidato" && currentItem) {
      filteredPosts = postsMock.filter(post => 
        post.candidato === currentItem.nome || 
        post.caption.toLowerCase().includes(currentItem.nome.toLowerCase())
      );
    } else if (type === "hashtag" && currentItem) {
      const hashtagSemJogo = currentItem.texto.replace("#", "").toLowerCase();
      filteredPosts = postsMock.filter(post => 
        (post.hashtags && post.hashtags.some(h => h.toLowerCase() === currentItem.texto.toLowerCase())) ||
        post.caption.toLowerCase().includes(hashtagSemJogo)
      );
    }
    
    setPosts(filteredPosts);
    setLoading(false);
  }, [type, id, location.state]);
  
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

  return (
    <CustomLayout>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor={type === "candidato" ? "success" : "primary"}
                borderRadius="lg"
                coloredShadow={type === "candidato" ? "success" : "primary"}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDBox display="flex" alignItems="center">
                  <Icon sx={{ mr: 1, color: "white" }}>
                    {type === "candidato" ? "person" : "tag"}
                  </Icon>
                  <MDTypography variant="h6" color="white">
                    {type === "candidato" 
                      ? `Posts de ${item?.nome || "Candidato"}`
                      : `Posts com ${item?.texto || "Hashtag"}`
                    }
                  </MDTypography>
                </MDBox>
                <MDButton
                  variant="text"
                  color="white"
                  onClick={() => window.history.back()}
                >
                  <Icon>arrow_back</Icon>&nbsp;
                  Voltar
                </MDButton>
              </MDBox>
              
              <MDBox p={3}>
                {item && (
                  <MDBox mb={3}>
                    <Card>
                      <MDBox p={2}>
                        <MDTypography variant="h6" gutterBottom>
                          {type === "candidato" ? "Detalhes do Candidato" : "Detalhes da Hashtag"}
                        </MDTypography>
                        {type === "candidato" ? (
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={3}>
                              <MDTypography variant="body2" fontWeight="bold">Nome:</MDTypography>
                              <MDTypography variant="body2">{item.nome}</MDTypography>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                              <MDTypography variant="body2" fontWeight="bold">Username:</MDTypography>
                              <MDTypography variant="body2">{item.username}</MDTypography>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                              <MDTypography variant="body2" fontWeight="bold">Partido:</MDTypography>
                              <MDTypography variant="body2">{item.partido}</MDTypography>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                              <MDTypography variant="body2" fontWeight="bold">Cargo:</MDTypography>
                              <MDTypography variant="body2">{item.cargo}</MDTypography>
                            </Grid>
                          </Grid>
                        ) : (
                          <MDTypography variant="body2">
                            Monitorando posts que contenham a hashtag <strong>{item.texto}</strong>
                          </MDTypography>
                        )}
                      </MDBox>
                    </Card>
                  </MDBox>
                )}
                
                <MDBox mb={2}>
                  <MDTypography variant="h6" gutterBottom>
                    Posts Encontrados ({posts.length})
                  </MDTypography>
                </MDBox>
                
                {loading ? (
                  <MDBox textAlign="center" py={5}>
                    <Icon color="info" sx={{ fontSize: 40, mb: 2 }}>
                      hourglass_empty
                    </Icon>
                    <MDTypography variant="h5" color="text">
                      Carregando posts...
                    </MDTypography>
                  </MDBox>
                ) : posts.length > 0 ? (
                  <Grid container spacing={3}>
                    {posts.map((post) => (
                      <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <PostCard post={post} />
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <MDBox textAlign="center" py={5}>
                    <Icon color="text" sx={{ fontSize: 40, mb: 2, opacity: 0.5 }}>
                      search_off
                    </Icon>
                    <MDTypography variant="h5" color="text" opacity={0.7}>
                      Nenhum post encontrado
                    </MDTypography>
                    <MDTypography variant="body2" color="text" opacity={0.7} mt={1}>
                      Não encontramos posts relacionados a este {type === "candidato" ? "candidato" : "hashtag"}
                    </MDTypography>
                  </MDBox>
                )}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <CustomFooter />
    </CustomLayout>
  );
}

export default ExibicaoPosts;
