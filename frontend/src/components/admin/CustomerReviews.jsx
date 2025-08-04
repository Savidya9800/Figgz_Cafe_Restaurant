import React from 'react';
import { Box, Typography, Paper, Avatar, Rating, Grid } from '@mui/material';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'J',
      rating: 5,
      comment: 'Excellent food and service!',
      time: '2 hours ago'
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'J',
      rating: 4,
      comment: 'Great experience, will come again.',
      time: '4 hours ago'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      avatar: 'M',
      rating: 5,
      comment: 'Amazing flavors and presentation.',
      time: '6 hours ago'
    }
  ];

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#1e293b' }}>
        Recent Customer Reviews
      </Typography>
      <Grid container spacing={3}>
        {reviews.map((review) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={review.id}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                height: '100%',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: '#3b82f6',
                    mr: 2,
                  }}
                >
                  {review.avatar}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1e293b' }}>
                    {review.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748b' }}>
                    {review.time}
                  </Typography>
                </Box>
              </Box>
              <Rating value={review.rating} readOnly size="small" sx={{ mb: 2 }} />
              <Typography variant="body2" sx={{ color: '#374151' }}>
                {review.comment}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomerReviews;
