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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Name", accessor: "project", width: "35%", align: "left" },
      { Header: "Phone", accessor: "budget", align: "left" },
      { Header: "Score", accessor: "status", align: "center" },
      { Header: "date", accessor: "date", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        project: (
          <MDTypography component="a" href="/profile" variant="button" color="text" fontWeight="medium">
            Pawit Sangserm
          </MDTypography>
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0445484942
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            7
          </MDTypography>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/1/2022
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Mint
          </MDTypography>
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0642277436
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11
          </MDTypography>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2/1/2022
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Fah
          </MDTypography>
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0605054055
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24
          </MDTypography>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2/2/2022
          </MDTypography>
        ),
        completion: <Progress color="error" value={30} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
    ],
  };
}
