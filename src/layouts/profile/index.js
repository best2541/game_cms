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
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card"
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDProgress from "components/MDProgress";


// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import DataTable from "examples/Tables/DataTable";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Images
import { useState } from "react";

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

const datas = {
  columns: [
    { Header: "No.", accessor: "no", width: "10%", align: "left" },
    { Header: "Score", accessor: "status", align: "center" },
    { Header: "Device", accessor: "budget", align: "center" },
    { Header: "date", accessor: "date", width: "20%", align: "center" },
  ],

  rows: [
    {
      no: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          1
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
    },
    {
      no: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          2
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
    },
    {
      no: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          3
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
    },
  ],
};

function Overview() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const { sales, tasks } = reportsLineChartData;

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Card
        sx={{
          position: "relative",
          my: 3,
          mx: 0,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                Richard Davis
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                0888884444
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                <Tab
                  label="GoalKeeper"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      sports_soccer
                    </Icon>
                  }
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
      <MDBox mt={4.5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={3}>
              <ReportsBarChart
                color="info"
                title="website views"
                description="Last Campaign Performance"
                date="campaign sent 2 days ago"
                chart={reportsBarChartData}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={3}>
              <ReportsLineChart
                color="success"
                title="daily sales"
                description={
                  <>
                    (<strong>+15%</strong>) increase in today sales.
                  </>
                }
                date="updated 4 min ago"
                chart={sales}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <DataTable
        table={datas}
        isSorted={true}
        entriesPerPage={false}
        showTotalEntries={false}
        noEndBorder
      />
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
