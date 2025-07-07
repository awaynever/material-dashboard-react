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

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// React router
import { useNavigate } from "react-router-dom";

export default function data() {
  const navigate = useNavigate();
  
  const handleClickPost = (permalink) => {
    window.open(permalink, "_blank");
  };

  const handleViewAllPosts = () => {
    navigate("/posts-recentes");
  };

  const posts = [
    {
      id: 1,
      username: "@nossametropole",
      profileImage: team2,
      mediaType: "Reels",
      timestamp: "26/06/2025 às 10:50",
      date: "26 de junho de 2025",
      mediaExpired: true,
      caption: "Após a jovem Ana Luiza Lima Brito, de 22 anos, ser brutalmente assassinada em Eunápolis (BA), sua mãe usou as redes sociais nesta quarta-feira (25) para...",
      likes: 10,
      comments: 0,
      sentiment: "Negativo",
      sentimentColor: "error",
      permalink: "https://instagram.com/p/123456",
    },
    {
      id: 2,
      username: "@echahla",
      profileImage: team3,
      mediaType: "Feed",
      timestamp: "26/06/2025 às 10:49",
      date: "26 de junho de 2025",
      mediaExpired: true,
      caption: "Líder do Brasileirão sub-17 com o Fortaleza, radiologista. Ao novo técnico da categoria no Esquadrão. Ele substitui Leo Mendes, que voltará a dirigir...",
      likes: 548,
      comments: 11,
      sentiment: "Positivo",
      sentimentColor: "success",
      permalink: "https://instagram.com/p/789012",
    },
    {
      id: 3,
      username: "@nossametropole",
      profileImage: team2,
      mediaType: "Stories",
      timestamp: "26/06/2025 às 10:44",
      date: "26 de junho de 2025",
      mediaExpired: true,
      caption: "Menos de 24 horas depois da execução de Matheus Rodrigues de Souza, 24 anos, que foi morto em uma loja de conveniência, uma jovem que estava...",
      likes: 15,
      comments: 1,
      sentiment: "Neutro",
      sentimentColor: "warning",
      permalink: "https://instagram.com/p/345678",
    },
    {
      id: 4,
      username: "@girassolcentrodasnovidades",
      profileImage: team4,
      mediaType: "Feed",
      timestamp: "26/06/2025 às 10:40",
      date: "26 de junho de 2025",
      mediaExpired: true,
      caption: "Ansiosas para ver as cores novas? Vejam de pertinho a aplicação da nova coleção, pra vocês verem todos os detalhes das lindas cores...",
      likes: 0,
      comments: 2,
      sentiment: "Negativo",
      sentimentColor: "error",
      permalink: "https://instagram.com/p/901234",
    },
    {
      id: 5,
      username: "@prefeitura_oficial",
      profileImage: team3,
      mediaType: "Reels",
      timestamp: "26/06/2025 às 09:30",
      date: "26 de junho de 2025",
      mediaExpired: true,
      caption: "Inauguração da nova praça central! Venham todos conferir as novas instalações que vão trazer mais lazer e qualidade de vida para nossa cidade.",
      likes: 320,
      comments: 45,
      sentiment: "Positivo",
      sentimentColor: "success",
      permalink: "https://instagram.com/p/567890",
    },
  ];

  return {
    posts,
    handleViewAllPosts,
    handleClickPost,
  };
}
