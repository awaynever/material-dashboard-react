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
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Layout component
import CustomLayout from "layouts/relatorio/components/CustomLayout";

// Data
import postsData from "layouts/relatorio/components/PostsRecentes/data";
import expiredMediaImage from "layouts/relatorio/components/PostsRecentes/data/expiredMedia";

function PostsRecentes() {
  const { posts, handleClickPost } = postsData();

  const PostCard = ({ post }) => (
    <Card 
      sx={{ 
        height: "100%", 
        cursor: "pointer",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 3
        }
      }} 
      onClick={() => handleClickPost(post.permalink)}
    >
      <MDBox p={2} display="flex" flexDirection="column" height="100%">
        {/* Header com username e tipo de mídia */}
        <MDBox display="flex" justifyContent="space-between" mb={1}>
          <MDBox display="flex" alignItems="center" maxWidth="70%">
            <MDAvatar src={post.profileImage} size="sm" />
            <MDTypography variant="button" fontWeight="medium" ml={1} noWrap>
              {post.username}
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
        
        {/* Data em linha separada */}
        <MDBox mb={1}>
          <MDTypography variant="caption" color="text">
            {post.date}
          </MDTypography>
        </MDBox>

        {/* Conteúdo do post */}
        <MDBox flex={1} display="flex" flexDirection="column">
          {/* Mídia expirada - agora com imagem */}
          <MDBox 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center"
            borderRadius="lg"
            mb={2}
            sx={{
              backgroundImage: `url(${expiredMediaImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "140px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <MDBox
              position="absolute"
              bottom={0}
              width="100%"
              bgcolor="rgba(0,0,0,0.6)"
              py={0.5}
              px={1}
              textAlign="center"
            >
              <MDTypography variant="caption" color="white">
                Clique para ver no Instagram
              </MDTypography>
            </MDBox>
          </MDBox>

          {/* Caption */}
          <MDBox mb={1}>
            <MDTypography 
              variant="body2" 
              color="text"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                fontSize: "0.875rem",
              }}
            >
              {post.caption}
            </MDTypography>
          </MDBox>
        </MDBox>

        {/* Footer com interações e sentimento */}
        <MDBox display="flex" justifyContent="space-between" alignItems="center" mt="auto">
          <MDBox display="flex" alignItems="center">
            <MDBox display="flex" alignItems="center" mr={2}>
              <Icon fontSize="small" sx={{ color: "text.secondary" }}>favorite</Icon>
              <MDTypography variant="button" color="text" fontWeight="light" ml={0.5}>
                {post.likes}
              </MDTypography>
            </MDBox>
            <MDBox display="flex" alignItems="center">
              <Icon fontSize="small" sx={{ color: "text.secondary" }}>chat</Icon>
              <MDTypography variant="button" color="text" fontWeight="light" ml={0.5}>
                {post.comments}
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox>
            <MDTypography 
              variant="button" 
              fontWeight="bold" 
              color={post.sentimentColor}
            >
              {post.sentiment}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );

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
                  Postagens Recentes
                </MDTypography>
              </MDBox>
              <MDBox p={3}>
                <MDBox mb={2} display="flex" alignItems="center">
                  <Icon
                    sx={{
                      fontWeight: "bold",
                      color: ({ palette: { info } }) => info.main,
                      mr: 1,
                    }}
                  >
                    access_time
                  </Icon>
                  <MDTypography variant="button" fontWeight="regular" color="text">
                    Postagens das últimas 72 horas
                  </MDTypography>
                </MDBox>
                <Grid container spacing={3}>
                  {posts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
                      <PostCard post={post} />
                    </Grid>
                  ))}
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </CustomLayout>
  );
}

export default PostsRecentes;
