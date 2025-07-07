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

export default function data() {
  // Componente para exibir categoria com porcentagem
  const Categoria = ({ nome, porcentagem, numero, onClick, icone, cor }) => {
    return (
      <MDBox onClick={onClick} sx={{ cursor: "pointer" }}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          <MDBox display="flex" alignItems="center">
            {icone && (
              <Icon 
                fontSize="small" 
                color={cor || "inherit"} 
                sx={{ mr: 1 }}
              >
                {icone}
              </Icon>
            )}
            <MDTypography variant="button" fontWeight="medium">
              {nome}
            </MDTypography>
          </MDBox>
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="button" fontWeight="bold" color="text">
              {porcentagem}%
            </MDTypography>
            <MDBox ml={1}>
              <MDTypography variant="button" color="text">
                ({numero})
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
    );
  };

  // Componente para exibir exemplos de legendas
  const Exemplos = ({ legendas }) => (
    <MDBox display="flex" flexDirection="column" mt={1}>
      {legendas.map((legenda, index) => (
        <Tooltip key={index} title={legenda}>
          <MDTypography
            variant="caption"
            color="text"
            mb={0.5}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
            }}
          >
            • {legenda}
          </MDTypography>
        </Tooltip>
      ))}
    </MDBox>
  );

  // Função para redirecionar para a página de assuntos com filtros
  const redirecionarParaAssuntos = (categoria) => {
    console.log(`Redirecionando para página de Assuntos com filtro: ${categoria}`);
    window.location.href = `/assuntos`;
  };
  
  // Função para redirecionar para a página completa de assuntos
  const verTodosAssuntos = () => {
    console.log('Redirecionando para página completa de Assuntos');
    window.location.href = '/assuntos';
  };

  return {
    verTodosAssuntos,
    assuntosPositivos: [
      {
        categoria: <Categoria 
                    nome="Transporte Público" 
                    porcentagem={32} 
                    numero={112} 
                    icone="directions_bus"
                    cor="info"
                    onClick={() => redirecionarParaAssuntos("Transporte Público (Positivo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "Parabéns pela nova frota de ônibus com ar-condicionado!",
          "O novo sistema de bilhetagem eletrônica está funcionando muito bem.",
          "Gostei muito da nova linha expressa que liga o centro aos bairros."
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Segurança" 
                    porcentagem={22} 
                    numero={63} 
                    icone="security"
                    cor="error"
                    onClick={() => redirecionarParaAssuntos("Segurança (Positivo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "As novas câmeras de segurança reduziram a criminalidade no bairro.",
          "O policiamento comunitário está fazendo diferença na nossa região.",
          "Me sinto mais seguro com as rondas noturnas da Guarda Municipal."
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Política" 
                    porcentagem={41} 
                    numero={98} 
                    icone="gavel"
                    cor="warning"
                    onClick={() => redirecionarParaAssuntos("Política (Positivo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "Parabéns ao prefeito pela iniciativa de revitalização do centro histórico.",
          "A nova lei municipal de incentivo cultural está trazendo mais eventos para a cidade.",
          "O projeto de transparência da prefeitura está funcionando muito bem."
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Meio Ambiente" 
                    porcentagem={46} 
                    numero={87} 
                    icone="park"
                    cor="success"
                    onClick={() => redirecionarParaAssuntos("Meio Ambiente (Positivo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "Adorei o novo parque ecológico inaugurado no bairro Primavera!",
          "A coleta seletiva está funcionando muito bem na minha região.",
          "O programa de arborização urbana está transformando a cidade."
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Educação Municipal" 
                    porcentagem={46} 
                    numero={72} 
                    icone="school"
                    cor="primary"
                    onClick={() => redirecionarParaAssuntos("Educação Municipal (Positivo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "Parabéns pela implementação do programa de reforço escolar nas escolas municipais!",
          "A merenda escolar melhorou muito de qualidade este ano.",
          "Os novos laboratórios de informática são excelentes para nossos filhos."
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Infraestrutura" 
                    porcentagem={32} 
                    numero={45} 
                    icone="construction"
                    cor="warning"
                    onClick={() => redirecionarParaAssuntos("Infraestrutura (Positivo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "A nova pavimentação da Avenida Central ficou excelente!",
          "A reforma da praça principal trouxe mais vida ao centro da cidade.",
          "As novas ciclovias estão incentivando o uso de bicicletas."
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Saúde Básica" 
                    porcentagem={30} 
                    numero={38} 
                    icone="local_hospital"
                    cor="error"
                    onClick={() => redirecionarParaAssuntos("Saúde Básica (Positivo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "O atendimento na UPA Central melhorou muito nos últimos meses!",
          "O programa de vacinação está funcionando muito bem no município.",
          "Consegui agendar minha consulta pelo aplicativo da prefeitura, muito prático!"
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Outro" 
                    porcentagem={44} 
                    numero={42} 
                    icone="more_horiz"
                    cor="default"
                    onClick={() => redirecionarParaAssuntos("Outro (Positivo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "Os eventos culturais gratuitos na praça central estão ótimos!",
          "O novo aplicativo da prefeitura facilita muito o acesso aos serviços.",
          "O turismo na cidade melhorou bastante com as novas atrações."
        ]} />,
      },
    ],
    
    assuntosNegativos: [
      {
        categoria: <Categoria 
                    nome="Transporte Público" 
                    porcentagem={35} 
                    numero={236} 
                    icone="directions_bus"
                    cor="info"
                    onClick={() => redirecionarParaAssuntos("Transporte Público (Negativo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "Os ônibus da linha 302 estão sempre atrasados e superlotados.",
          "Precisamos de mais linhas de ônibus para o bairro Jardim Esperança.",
          "A tarifa aumentou, mas o serviço continua péssimo!"
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Segurança" 
                    porcentagem={33} 
                    numero={222} 
                    icone="security"
                    cor="error"
                    onClick={() => redirecionarParaAssuntos("Segurança (Negativo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "Aumento de assaltos no centro da cidade, precisamos de mais policiamento.",
          "Moradores estão com medo de sair à noite devido à falta de segurança.",
          "Já é o terceiro arrombamento na minha rua só este mês!"
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Política" 
                    porcentagem={20} 
                    numero={139} 
                    icone="gavel"
                    cor="warning"
                    onClick={() => redirecionarParaAssuntos("Política (Negativo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "O vereador João Silva não cumpriu nenhuma de suas promessas de campanha!",
          "A câmara municipal precisa ser mais transparente com os gastos públicos.",
          "Os impostos municipais aumentaram e não vemos melhorias na cidade."
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Meio Ambiente" 
                    porcentagem={15} 
                    numero={103} 
                    icone="park"
                    cor="success"
                    onClick={() => redirecionarParaAssuntos("Meio Ambiente (Negativo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "O rio que corta a cidade está completamente poluído, precisa de limpeza urgente.",
          "Precisamos de mais árvores nas avenidas principais da cidade.",
          "O lixo está se acumulando em vários pontos da cidade."
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Educação Municipal" 
                    porcentagem={13} 
                    numero={86} 
                    icone="school"
                    cor="primary"
                    onClick={() => redirecionarParaAssuntos("Educação Municipal (Negativo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "A escola municipal do bairro Esperança está com infraestrutura precária.",
          "Faltam professores em várias escolas da rede municipal.",
          "As escolas municipais precisam de mais investimento em material didático."
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Infraestrutura" 
                    porcentagem={14} 
                    numero={97} 
                    icone="construction"
                    cor="warning"
                    onClick={() => redirecionarParaAssuntos("Infraestrutura (Negativo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "As ruas do bairro Jardim das Flores estão cheias de buracos há meses.",
          "Precisamos de melhorias na iluminação pública do bairro São José.",
          "A drenagem das ruas é péssima, alaga tudo quando chove!"
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Saúde Básica" 
                    porcentagem={13} 
                    numero={88} 
                    icone="local_hospital"
                    cor="error"
                    onClick={() => redirecionarParaAssuntos("Saúde Básica (Negativo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "Falta de médicos no posto de saúde do bairro Nova Esperança.",
          "Estou há 3 meses esperando por uma consulta com especialista.",
          "O pronto-socorro está sempre lotado e demora horas para ser atendido."
        ]} />,
      },
      {
        categoria: <Categoria 
                    nome="Outro" 
                    porcentagem={8} 
                    numero={53} 
                    icone="more_horiz"
                    cor="default"
                    onClick={() => redirecionarParaAssuntos("Outro (Negativo)")} 
                  />,
        exemplos: <Exemplos legendas={[
          "Faltam opções de lazer para jovens nos finais de semana.",
          "O atendimento ao cidadão na prefeitura é muito demorado.",
          "Os eventos culturais da cidade são sempre nos mesmos lugares."
        ]} />,
      },
    ],
  };
}
