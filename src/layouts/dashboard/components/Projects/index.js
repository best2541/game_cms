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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "layouts/dashboard/components/Projects/data";

//img
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";

function Projects({ datas }) {
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  )
  const a = {
    columns: [
      { Header: "Game", accessor: "companies", width: "35%", align: "left" },
      { Header: "Today Played", accessor: "members", align: "center" },
      { Header: "Average Score", accessor: "budget", align: "center" },
      { Header: "Average Time", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Company image={logoAtlassian} name="Goal keeper" />,
        members: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {datas?.total_view}
          </MDTypography>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {Math.round((datas?.total_score || 0) / (datas?.total_view || 0))}
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {`${Math.round(((datas?.total_time || 0) / (datas?.total_quatity || 0)) / 100)} m ${(Math.round((datas?.total_time || 0) / (datas?.total_quatity || 0)) % 100)} s`}
          </MDTypography>
        ),
      },
    ]
  }

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Games
          </MDTypography>
        </MDBox>
        {/* <MDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </MDBox>
        {renderMenu} */}
      </MDBox>
      <MDBox>
        <DataTable
          table={a}
          showTotalEntries={false}
          isSorted={true}
          noEndBorder
          entriesPerPage={false}
        />
      </MDBox>
    </Card>
  );
}

export default Projects;
