import React, { useState } from 'react';
import { Select as ShadcnSelect } from '../ui/shadcn/Select';
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Badge,
  Avatar
} from '@mui/material';
import {
  Dashboard,
  ListAlt,
  Restaurant,
  People,
  Analytics,
  Reviews,
  CalendarToday,
  Chat,
  HelpOutline,
  Notifications as NotificationsIcon,
  LiveHelpOutlined,
  NotificationsNoneOutlined
} from '@mui/icons-material';


const drawerWidth = 260;
const shopOptions = [
  { label: 'Bowen Hills', value: 'Bowen Hills' },
  { label: 'Taringa', value: 'Taringa' },
];

const sidebarItems = [
  { text: 'Dashboard', icon: <Dashboard />, section: 'Dashboard' },
  { text: 'Order List', icon: <ListAlt />, section: 'OrderList' },
  { text: 'Foods Menu', icon: <Restaurant />, section: 'FoodsMenu' },
  { text: 'Booking List', icon: <CalendarToday />, section: 'BookingList' },
  { text: 'Reviews', icon: <Reviews />, section: 'Reviews' },
  { text: 'Customers', icon: <People />, section: 'Customers' },
  { text: 'Analytics', icon: <Analytics />, section: 'Analytics' },
  { text: 'Chat', icon: <Chat />, section: 'Chat' },
];

const bottomSidebarItems = [
  { text: 'Help Center', icon: <LiveHelpOutlined />, section: 'HelpCenter' },
  { 
    text: 'Notifications', 
    icon: (
      <Badge badgeContent={3} color="error" sx={{ '& .MuiBadge-badge': { right: -3, top: 3 } }}>
        <NotificationsNoneOutlined />
      </Badge>
    ), 
    section: 'Notifications' 
  },
];

const AdminSidebar = ({ selectedSection, setSelectedSection, mobileOpen, handleDrawerToggle }) => {
  const [selectedShop, setSelectedShop] = useState(shopOptions[0].value);


  // Creative location display with custom dropdown
  const locationDisplay = (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      mb: 1,
      gap: 1.5,
      px: 1,
    }}>
      <Box sx={{
        width: 10,
        height: 40,
        borderRadius: 2,
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        mr: 1,
        boxShadow: '0 2px 8px rgba(59,130,246,0.15)',
      }} />
      <Box sx={{ flex: 1 }}>
        <ShadcnSelect
          value={selectedShop}
          onChange={e => setSelectedShop(e.target.value)}
          options={shopOptions}
          placeholder="Select Shop..."
          name="shop"
        />
      </Box>
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
    {/* Mobile Drawer */}
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
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
      <Box sx={{ p: 3, borderBottom: '1px solid #e2e8f0' }}>
        {locationDisplay}
      </Box>
      {/* Navigation Menu */}
      <Box sx={{ flex: 1, overflow: 'auto', py: 2 }}>
        <List sx={{ px: 2 }}>
          {sidebarItems.map((item) => (
            <ListItem
              key={item.text}
              component="button"
              onClick={() => {
                setSelectedSection(item.section);
                handleDrawerToggle();
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
                  },
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
        {/* Bottom Sidebar Items */}
        <List sx={{ px: 2 }}>
          {bottomSidebarItems.map((item) => (
            <ListItem
              key={item.text}
              component="button"
              onClick={() => {
                setSelectedSection(item.section);
                handleDrawerToggle();
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
                  },
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
      </Box>
    </Drawer>
    {/* Desktop Drawer */}
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
      <Box sx={{ p: 3, borderBottom: '1px solid #e2e8f0' }}>
        {locationDisplay}
      </Box>
      {/* Navigation Menu */}
      <Box sx={{ flex: 1, overflow: 'auto', py: 2 }}>
        <List sx={{ px: 2 }}>
          {sidebarItems.map((item) => (
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
                  },
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
        {/* Bottom Sidebar Items */}
        <List sx={{ px: 2 }}>
          {bottomSidebarItems.map((item) => (
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
                  },
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
      </Box>
    </Drawer>
  </Box>
  );
};

export default AdminSidebar;