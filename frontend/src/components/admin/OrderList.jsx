import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Chip,
  Avatar,
  IconButton,
  Grid
} from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';

const OrderList = () => {
  const orders = [
    {
      id: '#12345',
      customer: 'John Doe',
      avatar: 'J',
      items: 'Burger, Fries, Coke',
      total: '$25.50',
      status: 'Delivered',
      date: '2023-07-26',
      time: '14:30'
    },
    {
      id: '#12346',
      customer: 'Jane Smith',
      avatar: 'J',
      items: 'Pizza, Salad',
      total: '$32.00',
      status: 'Pending',
      date: '2023-07-26',
      time: '15:15'
    },
    {
      id: '#12347',
      customer: 'Mike Johnson',
      avatar: 'M',
      items: 'Steak, Wine',
      total: '$65.00',
      status: 'Preparing',
      date: '2023-07-26',
      time: '16:00'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return '#10b981';
      case 'Pending':
        return '#f59e0b';
      case 'Preparing':
        return '#3b82f6';
      default:
        return '#64748b';
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <Paper
            sx={{
              borderRadius: 3,
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ p: 3, borderBottom: '1px solid #e2e8f0' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b' }}>
                Recent Orders
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                Manage and track all customer orders
              </Typography>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f8fafc' }}>
                    <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Order ID</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Customer</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Items</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Total</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow 
                      key={order.id}
                      sx={{ 
                        '&:hover': { 
                          backgroundColor: '#f8fafc' 
                        } 
                      }}
                    >
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }}>
                          {order.id}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar
                            sx={{
                              width: 32,
                              height: 32,
                              bgcolor: '#3b82f6',
                              mr: 2,
                              fontSize: '0.875rem'
                            }}
                          >
                            {order.avatar}
                          </Avatar>
                          <Typography variant="body2" sx={{ color: '#374151' }}>
                            {order.customer}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ color: '#374151' }}>
                          {order.items}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }}>
                          {order.total}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={order.status}
                          size="small"
                          sx={{
                            backgroundColor: `${getStatusColor(order.status)}20`,
                            color: getStatusColor(order.status),
                            fontWeight: 600,
                            fontSize: '0.75rem'
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ color: '#374151' }}>
                          {order.date}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#64748b' }}>
                          {order.time}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <IconButton size="small" sx={{ color: '#3b82f6' }}>
                            <Visibility fontSize="small" />
                          </IconButton>
                          <IconButton size="small" sx={{ color: '#10b981' }}>
                            <Edit fontSize="small" />
                          </IconButton>
                          <IconButton size="small" sx={{ color: '#ef4444' }}>
                            <Delete fontSize="small" />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderList;
