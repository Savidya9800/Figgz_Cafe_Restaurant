import React, { useState } from 'react';
import { 
  Box, 
  CssBaseline, 
  Drawer, 
  AppBar, 
  Toolbar, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Container, 
  Grid, 
  Paper,
  Avatar,
  IconButton,
  Badge,
  Divider,
  Breadcrumbs,
  Link
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { 
  Dashboard, 
  ListAlt, 
  Restaurant, 
  People, 
  Analytics, 
  Reviews, 
  CalendarToday, 
  Chat, 
  AccountBalanceWallet, 
  Category,
  Notifications,
  Search,
  Settings,
  Menu,
  FilterList,
  DateRange
} from '@mui/icons-material';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import StatsCards from '../../components/admin/StatsCards';
import ChartsSection from '../../components/admin/ChartsSection';
import CustomerReviews from '../../components/admin/CustomerReviews';
import OrderList from '../../components/admin/OrderList';
import adminTheme from '../../theme/adminTheme';

const drawerWidth = 260;

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('Dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarItems = [
    { text: 'Dashboard', icon: <Dashboard />, section: 'Dashboard' },
    { text: 'Order List', icon: <ListAlt />, section: 'OrderList' },
    { text: 'Order Detail', icon: <Restaurant />, section: 'OrderDetail' },
    { text: 'Customer', icon: <People />, section: 'Customer' },
    { text: 'Analytics', icon: <Analytics />, section: 'Analytics' },
    { text: 'Reviews', icon: <Reviews />, section: 'Reviews' },
    { text: 'Foods', icon: <Restaurant />, section: 'Foods' },
    { text: 'Food Detail', icon: <Category />, section: 'FoodDetail' },
    { text: 'Customer Detail', icon: <People />, section: 'CustomerDetail' },
    { text: 'Calendar', icon: <CalendarToday />, section: 'Calendar' },
    { text: 'Chat', icon: <Chat />, section: 'Chat' },
    { text: 'Wallet', icon: <AccountBalanceWallet />, section: 'Wallet' },
  ];

  return (
    <ThemeProvider theme={adminTheme}>
      <Box sx={{ display: 'flex', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <CssBaseline />
      
      {/* Enhanced App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white',
          color: 'black',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <Menu />
            </IconButton>
            
            <Box>
              <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 600, color: '#1e293b' }}>
                {selectedSection}
              </Typography>
              <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: '0.75rem' }}>
                <Link underline="hover" color="inherit" href="#">
                  Admin
                </Link>
                <Typography color="text.primary" sx={{ fontSize: '0.75rem' }}>
                  {selectedSection}
                </Typography>
              </Breadcrumbs>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Filter Periods */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 2 }}>
              <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.875rem' }}>
                Filter Periods
              </Typography>
              <IconButton size="small">
                <DateRange fontSize="small" />
              </IconButton>
            </Box>

            {/* Notification Bell */}
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <Notifications />
              </Badge>
            </IconButton>

            {/* Search Icon */}
            <IconButton color="inherit">
              <Search />
            </IconButton>

            {/* Settings */}
            <IconButton color="inherit">
              <Settings />
            </IconButton>

            {/* User Profile */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 2, pl: 2, borderLeft: '1px solid #e2e8f0' }}>
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b', fontSize: '0.875rem' }}>
                  Hello, Samantha
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b' }}>
                  Welcome back to Sedap Admin!
                </Typography>
              </Box>
              <Avatar
                sx={{ 
                  width: 40, 
                  height: 40,
                  bgcolor: '#3b82f6',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: '#2563eb'
                  }
                }}
              >
                S
              </Avatar>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Enhanced Sidebar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: 'white',
              borderRight: '1px solid #e2e8f0',
            },
          }}
        >
          {/* Logo Section */}
          <Box sx={{ p: 3, borderBottom: '1px solid #e2e8f0' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                  S
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1e293b', lineHeight: 1 }}>
                  Sedap.
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.75rem' }}>
                  Modern Admin Dashboard
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Navigation Menu */}
          <Box sx={{ flex: 1, overflow: 'auto', py: 2 }}>
            <List sx={{ px: 2 }}>
              {sidebarItems.map((item, index) => (
                <ListItem
                  key={item.text}
                  component="button"
                  onClick={() => {
                    setSelectedSection(item.section);
                    setMobileOpen(false);
                  }}
                  sx={{
                    mb: 0.5,
                    borderRadius: 2,
                    backgroundColor: selectedSection === item.section ? '#eff6ff' : 'transparent',
                    border: selectedSection === item.section ? '1px solid #bfdbfe' : '1px solid transparent',
                    transition: 'all 0.2s ease-in-out',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: selectedSection === item.section ? '#eff6ff' : '#f8fafc',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <ListItemIcon 
                    sx={{ 
                      color: selectedSection === item.section ? '#2563eb' : '#64748b',
                      minWidth: 40,
                      transition: 'color 0.2s ease-in-out',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text}
                    sx={{ 
                      '& .MuiListItemText-primary': {
                        fontSize: '0.875rem',
                        color: selectedSection === item.section ? '#2563eb' : '#374151',
                        fontWeight: selectedSection === item.section ? 600 : 500,
                        transition: 'all 0.2s ease-in-out',
                      }
                    }}
                  />
                  {selectedSection === item.section && (
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#2563eb',
                      }}
                    />
                  )}
                </ListItem>
              ))}
            </List>

            <Divider sx={{ mx: 2, my: 3 }} />

            {/* Promotion Card */}
            <Box sx={{ px: 2 }}>
              <Paper
                sx={{
                  p: 3,
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  borderRadius: 3,
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 100,
                    height: 100,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                  }
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 2, position: 'relative', zIndex: 1 }}>
                  Please consider our
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, position: 'relative', zIndex: 1 }}>
                  Pro Plan
                </Typography>
                <Box sx={{ 
                  width: 50, 
                  height: 50, 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  borderRadius: 2, 
                  mx: 'auto', 
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <Typography variant="h5">🎯</Typography>
                </Box>
                <Typography variant="caption" sx={{ position: 'relative', zIndex: 1 }}>
                  ~50% Discount
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Drawer>
        
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'white',
              borderRight: '1px solid #e2e8f0',
              boxShadow: '2px 0 8px rgba(0,0,0,0.04)',
            },
          }}
          open
        >
          {/* Logo Section */}
          <Box sx={{ p: 3, borderBottom: '1px solid #e2e8f0' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                  S
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1e293b', lineHeight: 1 }}>
                  Sedap.
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.75rem' }}>
                  Modern Admin Dashboard
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Navigation Menu */}
          <Box sx={{ flex: 1, overflow: 'auto', py: 2 }}>
            <List sx={{ px: 2 }}>
              {sidebarItems.map((item, index) => (
                <ListItem
                  key={item.text}
                  component="button"
                  onClick={() => setSelectedSection(item.section)}
                  sx={{
                    mb: 0.5,
                    borderRadius: 2,
                    backgroundColor: selectedSection === item.section ? '#eff6ff' : 'transparent',
                    border: selectedSection === item.section ? '1px solid #bfdbfe' : '1px solid transparent',
                    transition: 'all 0.2s ease-in-out',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: selectedSection === item.section ? '#eff6ff' : '#f8fafc',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <ListItemIcon 
                    sx={{ 
                      color: selectedSection === item.section ? '#2563eb' : '#64748b',
                      minWidth: 40,
                      transition: 'color 0.2s ease-in-out',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text}
                    sx={{ 
                      '& .MuiListItemText-primary': {
                        fontSize: '0.875rem',
                        color: selectedSection === item.section ? '#2563eb' : '#374151',
                        fontWeight: selectedSection === item.section ? 600 : 500,
                        transition: 'all 0.2s ease-in-out',
                      }
                    }}
                  />
                  {selectedSection === item.section && (
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#2563eb',
                      }}
                    />
                  )}
                </ListItem>
              ))}
            </List>

            <Divider sx={{ mx: 2, my: 3 }} />

            {/* Promotion Card */}
            <Box sx={{ px: 2 }}>
              <Paper
                sx={{
                  p: 3,
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  borderRadius: 3,
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 100,
                    height: 100,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                  }
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 2, position: 'relative', zIndex: 1 }}>
                  Please consider our
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, position: 'relative', zIndex: 1 }}>
                  Pro Plan
                </Typography>
                <Box sx={{ 
                  width: 50, 
                  height: 50, 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  borderRadius: 2, 
                  mx: 'auto', 
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <Typography variant="h5">🎯</Typography>
                </Box>
                <Typography variant="caption" sx={{ position: 'relative', zIndex: 1 }}>
                  ~50% Discount
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Drawer>
      </Box>

      {/* Enhanced Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: 8,
          backgroundColor: '#f8fafc',
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2 }, maxWidth: '100%' }}>
          {selectedSection === 'Dashboard' && (
            <Box sx={{ width: '100%', overflow: 'hidden' }}>
              {/* Welcome Section */}
              <Paper
                sx={{
                  p: 4,
                  mb: 4,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 200,
                    height: 200,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                  }
                }}
              >
                <Grid container alignItems="center" spacing={3}>
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, position: 'relative', zIndex: 1 }}>
                      Welcome back, Samantha! 👋
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9, mb: 3, position: 'relative', zIndex: 1 }}>
                      Here's what's happening with your restaurant today. Check your daily stats and manage your business efficiently.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, position: 'relative', zIndex: 1 }}>
                      <Paper
                        sx={{
                          px: 3,
                          py: 1,
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          color: 'white',
                          borderRadius: 2,
                          backdropFilter: 'blur(10px)',
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
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          color: 'white',
                          borderRadius: 2,
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <Typography variant="body2">
                          ⭐ 4.8 Rating Today
                        </Typography>
                      </Paper>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        fontSize: '3rem',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      🍽️
                    </Box>
                  </Grid>
                </Grid>
              </Paper>

              <Box sx={{ width: '100%', overflow: 'hidden' }}>
                <StatsCards />
              </Box>
              <ChartsSection />
              <CustomerReviews />
            </Box>
          )}
          {selectedSection !== 'Dashboard' && selectedSection === 'OrderList' && (
            <OrderList />
          )}
          {selectedSection !== 'Dashboard' && selectedSection !== 'OrderList' && (
            <Paper 
              sx={{ 
                p: 6, 
                textAlign: 'center', 
                minHeight: 400,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box sx={{ fontSize: '4rem', mb: 2 }}>🚧</Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                {selectedSection}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
                This section is under development
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8, maxWidth: 600 }}>
                We're working hard to bring you this feature. Stay tuned for updates!
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
