import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
  IconButton,
  Badge,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  Notifications,
  Search,
  Settings,
  Menu,
  DateRange,
} from "@mui/icons-material";
import AdminSidebar from "../../components/admin/Sidebar";
import AdminTopBar from "../../components/admin/TopBar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import StatsCards from "../../components/admin/StatsCards";
import ChartsSection from "../../components/admin/ChartsSection";
import CustomerReviews from "../../components/admin/CustomerReviews";
import OrderList from "../../components/admin/OrderList";
import adminTheme from "../../theme/adminTheme";
import BookingList from "./BookingList";

const drawerWidth = 260;

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={adminTheme}>
      <Box
        sx={{ display: "flex", backgroundColor: "#f8fafc", minHeight: "100vh" }}
      >
        <CssBaseline />
        {/* Enhanced Sidebar */}
        <AdminSidebar
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        {/* Enhanced App Bar */}
        <AdminTopBar
          selectedSection={selectedSection}
          handleDrawerToggle={handleDrawerToggle}
        />

        {/* Enhanced Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 3 },
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            mt: 8,
            backgroundColor: "#f8fafc",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{ px: { xs: 1, sm: 2 }, maxWidth: "100%" }}
          >
            {selectedSection === "Dashboard" && (
              <Box sx={{ width: "100%", overflow: "hidden" }}>
                {/* Welcome Section */}
                <Paper
                  sx={{
                    p: 4,
                    mb: 4,
                    borderRadius: 3,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: -100,
                      right: -100,
                      width: 200,
                      height: 200,
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "50%",
                    },
                  }}
                >
                  <Grid container alignItems="center" spacing={3}>
                    <Grid size={{ xs: 12, md: 8 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: "bold",
                          mb: 1,
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        Welcome back, Samantha! 👋
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          opacity: 0.9,
                          mb: 3,
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        Here's what's happening with your restaurant today.
                        Check your daily stats and manage your business
                        efficiently.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        <Paper
                          sx={{
                            px: 3,
                            py: 1,
                            backgroundColor: "rgba(255,255,255,0.2)",
                            color: "white",
                            borderRadius: 2,
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          <Typography variant="body2">
                            📊 45 Active Orders
                          </Typography>
                        </Paper>
                        <Paper
                          sx={{
                            px: 3,
                            py: 1,
                            backgroundColor: "rgba(255,255,255,0.2)",
                            color: "white",
                            borderRadius: 2,
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          <Typography variant="body2">
                            ⭐ 4.8 Rating Today
                          </Typography>
                        </Paper>
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
                      <Box
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: "50%",
                          backgroundColor: "rgba(255,255,255,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          fontSize: "3rem",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        🍽️
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>

                <Box sx={{ width: "100%", overflow: "hidden" }}>
                  <StatsCards />
                </Box>
                <ChartsSection />
                <CustomerReviews />
              </Box>
            )}
            {selectedSection === "OrderList" && <OrderList />}
            {selectedSection === "BookingList" && <BookingList />}
            {selectedSection !== "Dashboard" &&
              selectedSection !== "OrderList" &&
              selectedSection !== "BookingList" && (
                <Paper
                  sx={{
                    p: 6,
                    textAlign: "center",
                    minHeight: 400,
                    borderRadius: 3,
                    background:
                      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "4rem", mb: 2 }}>🚧</Box>
                  <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                    {selectedSection}
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
                    This section is under development
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ opacity: 0.8, maxWidth: 600 }}
                  >
                    We're working hard to bring you this feature. Stay tuned for
                    updates!
                  </Typography>
                </Paper>
              )}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AdminDashboard;
