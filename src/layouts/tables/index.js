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
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useEffect, useState } from "react";
import axios from "axios";

const temp = {
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
      action: (
        <MDTypography component="a" href="#" color="text">
          <Icon>more_vert</Icon>
        </MDTypography>
      ),
    },
  ],
}

function Tables() {
  const [datas, setDatas] = useState({})

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/Dashboard/users`)
      .then(result => {
        console.log(result)
        if (result.data?.length > 0) {
          setDatas(result.data?.map(data => {
            return (
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
                action: (
                  <MDTypography component="a" href="#" color="text">
                    <Icon>more_vert</Icon>
                  </MDTypography>
                ),
              }
            )
          }))
        }
      })
  }, [])
  return (
    <DashboardLayout>
      <DashboardNavbar />
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
                bgColor="success"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Users
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={temp}
                  isSorted={true}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
