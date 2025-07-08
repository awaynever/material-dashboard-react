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
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// Layout component
import CustomLayout from "layouts/relatorio/components/CustomLayout";
import CustomFooter from "layouts/relatorio/components/CustomFooter";

// React Router
import { useNavigate } from "react-router-dom";

function Monitoramento() {
  const navigate = useNavigate();
  const [candidatos, setCandidatos] = useState([
    { id: 1, nome: "João Silva", partido: "PSD", cargo: "Prefeito" },
    { id: 2, nome: "Maria Oliveira", partido: "PT", cargo: "Vereadora" },
    { id: 3, nome: "Carlos Santos", partido: "PSDB", cargo: "Prefeito" }
  ]);
  
  const [hashtags, setHashtags] = useState([
    { id: 1, texto: "#eleicoes2025" },
    { id: 2, texto: "#politica" },
    { id: 3, texto: "#cidademelhor" }
  ]);
  
  const [novoCandidato, setNovoCandidato] = useState({ nome: "", partido: "", cargo: "" });
  const [novaHashtag, setNovaHashtag] = useState("");
  const [openCandidatoDialog, setOpenCandidatoDialog] = useState(false);
  const [openHashtagDialog, setOpenHashtagDialog] = useState(false);
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState({ open: false, type: "", id: null });
  
  // Handlers para candidatos
  const handleOpenCandidatoDialog = () => {
    setNovoCandidato({ nome: "", partido: "", cargo: "" });
    setOpenCandidatoDialog(true);
  };
  
  const handleCloseCandidatoDialog = () => {
    setOpenCandidatoDialog(false);
  };
  
  const handleCandidatoChange = (e) => {
    const { name, value } = e.target;
    setNovoCandidato({
      ...novoCandidato,
      [name]: value
    });
  };
  
  const handleAddCandidato = () => {
    if (novoCandidato.nome && novoCandidato.partido && novoCandidato.cargo) {
      const newId = candidatos.length > 0 ? Math.max(...candidatos.map(c => c.id)) + 1 : 1;
      setCandidatos([...candidatos, { id: newId, ...novoCandidato }]);
      setOpenCandidatoDialog(false);
    }
  };
  
  const handleDeleteCandidato = (id) => {
    setConfirmDeleteDialog({ open: true, type: "candidato", id });
  };
  
  // Handlers para hashtags
  const handleOpenHashtagDialog = () => {
    setNovaHashtag("");
    setOpenHashtagDialog(true);
  };
  
  const handleCloseHashtagDialog = () => {
    setOpenHashtagDialog(false);
  };
  
  const handleHashtagChange = (e) => {
    setNovaHashtag(e.target.value);
  };
  
  const handleAddHashtag = () => {
    if (novaHashtag) {
      // Adiciona # se não estiver presente
      const formattedHashtag = novaHashtag.startsWith("#") ? novaHashtag : `#${novaHashtag}`;
      const newId = hashtags.length > 0 ? Math.max(...hashtags.map(h => h.id)) + 1 : 1;
      setHashtags([...hashtags, { id: newId, texto: formattedHashtag }]);
      setOpenHashtagDialog(false);
    }
  };
  
  const handleDeleteHashtag = (id) => {
    setConfirmDeleteDialog({ open: true, type: "hashtag", id });
  };
  
  // Handler para confirmação de exclusão
  const handleConfirmDelete = () => {
    if (confirmDeleteDialog.type === "candidato") {
      setCandidatos(candidatos.filter(c => c.id !== confirmDeleteDialog.id));
    } else if (confirmDeleteDialog.type === "hashtag") {
      setHashtags(hashtags.filter(h => h.id !== confirmDeleteDialog.id));
    }
    setConfirmDeleteDialog({ open: false, type: "", id: null });
  };
  
  const handleCancelDelete = () => {
    setConfirmDeleteDialog({ open: false, type: "", id: null });
  };
  
  // Navegação para a página de exibição
  const handleNavigateToExibicao = (type, item) => {
    if (type === "candidato") {
      navigate(`/exibicao-posts/candidato/${item.id}`, { state: { item, type } });
    } else if (type === "hashtag") {
      navigate(`/exibicao-posts/hashtag/${item.id}`, { state: { item, type } });
    }
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
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Monitoramento
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
                    monitoring
                  </Icon>
                  <MDTypography variant="button" fontWeight="regular" color="text">
                    Gerencie candidatos e hashtags para monitoramento
                  </MDTypography>
                </MDBox>
                <Grid container spacing={3}>
                  {/* Seção de Candidatos */}
                  <Grid item xs={12} md={6}>
                    <Card>
                      <MDBox
                        mx={2}
                        mt={-3}
                        py={2}
                        px={2}
                        variant="gradient"
                        bgColor="success"
                        borderRadius="lg"
                        coloredShadow="success"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <MDTypography variant="h6" color="white">
                          Candidatos
                        </MDTypography>
                        <MDButton
                          variant="gradient"
                          color="dark"
                          size="small"
                          onClick={handleOpenCandidatoDialog}
                        >
                          <Icon>add</Icon>&nbsp;
                          Adicionar
                        </MDButton>
                      </MDBox>
                      <MDBox p={2}>
                        <List>
                          {candidatos.length > 0 ? (
                            candidatos.map((candidato) => (
                              <ListItem 
                                key={candidato.id} 
                                button
                                onClick={() => handleNavigateToExibicao("candidato", candidato)}
                              >
                                <ListItemIcon>
                                  <Icon>person</Icon>
                                </ListItemIcon>
                                <ListItemText
                                  primary={candidato.nome}
                                  secondary={`${candidato.partido} | ${candidato.cargo}`}
                                />
                                <ListItemSecondaryAction>
                                  <IconButton 
                                    edge="end" 
                                    aria-label="delete"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDeleteCandidato(candidato.id);
                                    }}
                                  >
                                    <Icon>delete</Icon>
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItem>
                            ))
                          ) : (
                            <MDBox textAlign="center" py={2}>
                              <MDTypography variant="body2" color="text">
                                Nenhum candidato cadastrado
                              </MDTypography>
                            </MDBox>
                          )}
                        </List>
                      </MDBox>
                    </Card>
                  </Grid>
                  
                  {/* Seção de Hashtags */}
                  <Grid item xs={12} md={6}>
                    <Card>
                      <MDBox
                        mx={2}
                        mt={-3}
                        py={2}
                        px={2}
                        variant="gradient"
                        bgColor="primary"
                        borderRadius="lg"
                        coloredShadow="primary"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <MDTypography variant="h6" color="white">
                          Hashtags
                        </MDTypography>
                        <MDButton
                          variant="gradient"
                          color="dark"
                          size="small"
                          onClick={handleOpenHashtagDialog}
                        >
                          <Icon>add</Icon>&nbsp;
                          Adicionar
                        </MDButton>
                      </MDBox>
                      <MDBox p={2}>
                        <List>
                          {hashtags.length > 0 ? (
                            hashtags.map((hashtag) => (
                              <ListItem 
                                key={hashtag.id} 
                                button
                                onClick={() => handleNavigateToExibicao("hashtag", hashtag)}
                              >
                                <ListItemIcon>
                                  <Icon>tag</Icon>
                                </ListItemIcon>
                                <ListItemText
                                  primary={hashtag.texto}
                                />
                                <ListItemSecondaryAction>
                                  <IconButton 
                                    edge="end" 
                                    aria-label="delete"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDeleteHashtag(hashtag.id);
                                    }}
                                  >
                                    <Icon>delete</Icon>
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItem>
                            ))
                          ) : (
                            <MDBox textAlign="center" py={2}>
                              <MDTypography variant="body2" color="text">
                                Nenhuma hashtag cadastrada
                              </MDTypography>
                            </MDBox>
                          )}
                        </List>
                      </MDBox>
                    </Card>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      
      {/* Dialog para adicionar candidato */}
      <Dialog open={openCandidatoDialog} onClose={handleCloseCandidatoDialog}>
        <DialogTitle>Adicionar Candidato</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha os dados do candidato que deseja monitorar.
          </DialogContentText>
          <MDBox component="form" sx={{ mt: 2 }}>
            <MDInput
              autoFocus
              margin="dense"
              label="Nome do Candidato"
              type="text"
              fullWidth
              name="nome"
              value={novoCandidato.nome}
              onChange={handleCandidatoChange}
            />
            <MDInput
              margin="dense"
              label="Partido"
              type="text"
              fullWidth
              name="partido"
              value={novoCandidato.partido}
              onChange={handleCandidatoChange}
            />
            <MDInput
              margin="dense"
              label="Cargo"
              type="text"
              fullWidth
              name="cargo"
              value={novoCandidato.cargo}
              onChange={handleCandidatoChange}
            />
          </MDBox>
        </DialogContent>
        <DialogActions>
          <MDButton onClick={handleCloseCandidatoDialog} color="secondary">
            Cancelar
          </MDButton>
          <MDButton onClick={handleAddCandidato} color="info">
            Adicionar
          </MDButton>
        </DialogActions>
      </Dialog>
      
      {/* Dialog para adicionar hashtag */}
      <Dialog open={openHashtagDialog} onClose={handleCloseHashtagDialog}>
        <DialogTitle>Adicionar Hashtag</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Digite a hashtag que deseja monitorar.
          </DialogContentText>
          <MDBox component="form" sx={{ mt: 2 }}>
            <MDInput
              autoFocus
              margin="dense"
              label="Hashtag"
              type="text"
              fullWidth
              value={novaHashtag}
              onChange={handleHashtagChange}
              placeholder="Ex: #eleicoes2025"
            />
          </MDBox>
        </DialogContent>
        <DialogActions>
          <MDButton onClick={handleCloseHashtagDialog} color="secondary">
            Cancelar
          </MDButton>
          <MDButton onClick={handleAddHashtag} color="info">
            Adicionar
          </MDButton>
        </DialogActions>
      </Dialog>
      
      {/* Dialog para confirmar exclusão */}
      <Dialog
        open={confirmDeleteDialog.open}
        onClose={handleCancelDelete}
      >
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que deseja excluir este {confirmDeleteDialog.type === "candidato" ? "candidato" : "hashtag"}?
            Esta ação não pode ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MDButton onClick={handleCancelDelete} color="secondary">
            Cancelar
          </MDButton>
          <MDButton onClick={handleConfirmDelete} color="error">
            Excluir
          </MDButton>
        </DialogActions>
      </Dialog>
      
      <CustomFooter />
    </CustomLayout>
  );
}

export default Monitoramento;
