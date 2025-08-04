import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

const StatsCards = () => {
  const statsData = [
    {
      title: 'Total Order',
      value: '75',
      subtitle: 'Last month',
      color: '#10b981',
      bgColor: '#ecfdf5',
      icon: '📊',
      trend: 'up',
      trendValue: '3%'
    },
    {
      title: 'Total Delivered',
      value: '357',
      subtitle: 'Last month',
      color: '#3b82f6',
      bgColor: '#eff6ff',
      icon: '🚚',
      trend: 'up',
      trendValue: '8%'
    },
    {
      title: 'Total Canceled',
      value: '65',
      subtitle: 'Last month',
      color: '#f59e0b',
      bgColor: '#fffbeb',
      icon: '❌',
      trend: 'down',
      trendValue: '2%'
    },
    {
      title: 'Total Revenue',
      value: '$128',
      subtitle: 'Last month',
      color: '#8b5cf6',
      bgColor: '#f3e8ff',
      icon: '💰',
      trend: 'up',
      trendValue: '12%'
    },
  ];

  return (
    <Box sx={{ mb: 4, width: '100%' }}>
      <Grid container spacing={3}>
        {statsData.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease-in-out',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  borderColor: stat.color,
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  backgroundColor: stat.color,
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
                <Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#64748b',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      mb: 1
                    }}
                  >
                    {stat.title}
                  </Typography>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#1e293b',
                      fontSize: { xs: '1.5rem', sm: '2rem' },
                      lineHeight: 1.2
                    }}
                  >
                    {stat.value}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { xs: 40, sm: 48 },
                    height: { xs: 40, sm: 48 },
                    borderRadius: 2,
                    backgroundColor: stat.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '1.2rem', sm: '1.5rem' },
                    flexShrink: 0
                  }}
                >
                  {stat.icon}
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: '#64748b',
                    fontSize: '0.75rem'
                  }}
                >
                  {stat.subtitle}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {stat.trend === 'up' ? (
                    <TrendingUp sx={{ fontSize: 16, color: '#10b981' }} />
                  ) : (
                    <TrendingDown sx={{ fontSize: 16, color: '#ef4444' }} />
                  )}
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: stat.trend === 'up' ? '#10b981' : '#ef4444',
                      fontWeight: 600,
                      fontSize: '0.75rem'
                    }}
                  >
                    {stat.trendValue}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsCards;