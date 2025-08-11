import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Avatar,
  Breadcrumbs,
  Link
} from '@mui/material';
import {
  Notifications,
  Search,
  Settings,
  Menu,
  DateRange
} from '@mui/icons-material';

const drawerWidth = 260;

const AdminTopBar = ({ selectedSection, handleDrawerToggle }) => (
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
);

export default AdminTopBar;
