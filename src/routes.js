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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Login from "layouts/authentication/login";
import Relatorio from "layouts/relatorio";
import PostsRecentes from "layouts/posts-recentes";
import Assuntos from "layouts/assuntos";
import Monitoramento from "layouts/monitoramento";
import ExibicaoPosts from "layouts/exibicao-posts";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  // Login não aparece no menu, mas ainda é uma rota válida
  {
    type: "route",
    name: "Login",
    key: "login",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/login",
    component: <Login />,
  },
  {
    type: "collapse",
    name: "Relatório",
    key: "relatorio",
    icon: <Icon fontSize="small">assessment</Icon>,
    route: "/relatorio",
    component: <Relatorio />,
  },
  {
    type: "collapse",
    name: "Posts Recentes",
    key: "posts-recentes",
    icon: <Icon fontSize="small">photo_library</Icon>,
    route: "/posts-recentes",
    component: <PostsRecentes />,
  },
  {
    type: "collapse",
    name: "Assuntos",
    key: "assuntos",
    icon: <Icon fontSize="small">topic</Icon>,
    route: "/assuntos",
    component: <Assuntos />,
  },
  {
    type: "collapse",
    name: "Monitoramento",
    key: "monitoramento",
    icon: <Icon fontSize="small">monitoring</Icon>,
    route: "/monitoramento",
    component: <Monitoramento />,
  },
  {
    // Rota para exibição de posts de candidato ou hashtag (não aparece no menu)
    type: "route",
    name: "Exibição de Posts",
    key: "exibicao-posts",
    route: "/exibicao-posts/:type/:id",
    component: <ExibicaoPosts />,
  },
];

export default routes;
