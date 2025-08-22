import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { Visibility, Edit, Delete, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const BookingList = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openRows, setOpenRows] = useState({});

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/reservations", {
          withCredentials: true,
        });
        setReservations(res.data);
      } catch (err) {
        setError("Failed to fetch reservations");
      } finally {
        setLoading(false);
      }
    };
    fetchReservations();
  }, []);

  const handleToggleRow = (id) => {
    setOpenRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Helper to format time as 12-hour with am/pm
  const formatTime = (timeStr) => {
    if (!timeStr) return '-';
    const [hour, minute] = timeStr.split(":");
    if (hour === undefined || minute === undefined) return timeStr;
    let h = parseInt(hour, 10);
    const m = minute;
    const ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    if (h === 0) h = 12;
    return `${h}:${m} ${ampm}`;
  };

  // Helper to format created date
  const formatCreatedDate = (dateStr) => {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    return d.toLocaleDateString();
  };
  // Helper to format created time (no seconds, am/pm)
  const formatCreatedTime = (dateStr) => {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    if (hours === 0) hours = 12;
    return `${hours}:${minutes} ${ampm}`;
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
                Reservations
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                Manage and track all customer reservations
              </Typography>
            </Box>

            {loading ? (
              <Box sx={{ p: 3 }}>
                <Typography>Loading...</Typography>
              </Box>
            ) : error ? (
              <Box sx={{ p: 3 }}>
                <Typography color="error">{error}</Typography>
              </Box>
            ) : reservations.length === 0 ? (
              <Box sx={{ p: 3 }}>
                <Typography>No reservations found.</Typography>
              </Box>
            ) : (
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#f8fafc' }}>
                      <TableCell sx={{ fontWeight: 600, color: '#374151' }}></TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Name</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Email</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Phone</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Date</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Time</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Persons</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Location</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {reservations.map((r) => (
                      <React.Fragment key={r._id}>
                        <TableRow
                          sx={{ '&:hover': { backgroundColor: '#f8fafc' } }}
                        >
                          <TableCell>
                            <IconButton size="small" onClick={() => handleToggleRow(r._id)}>
                              {openRows[r._id] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                            </IconButton>
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
                                {r.name ? r.name.charAt(0).toUpperCase() : '?'}
                              </Avatar>
                              <Typography variant="body2" sx={{ color: '#374151' }}>
                                {r.name}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" sx={{ color: '#374151' }}>{r.email}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" sx={{ color: '#374151' }}>{r.phone}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" sx={{ color: '#374151' }}>{r.date}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" sx={{ color: '#374151' }}>{formatTime(r.time)}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" sx={{ color: '#374151' }}>{r.persons}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" sx={{ color: '#374151' }}>{r.location || '-'}</Typography>
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
                        <TableRow>
                          <TableCell colSpan={8} sx={{ p: 0, border: 0 }}>
                            {openRows[r._id] && (
                              <Box sx={{ px: 5, py: 2, backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                                <Grid container spacing={2}>
                                  <Grid item xs={12} md={3}>
                                    <Typography variant="subtitle2" sx={{ color: '#64748b', fontWeight: 600 }}>Note</Typography>
                                    <Typography variant="body2" sx={{ color: '#374151' }}>{r.note || '-'}</Typography>
                                  </Grid>
                                  <Grid item xs={12} md={3}>
                                    <Typography variant="subtitle2" sx={{ color: '#64748b', fontWeight: 600 }}>Created Date</Typography>
                                    <Typography variant="body2" sx={{ color: '#374151' }}>{formatCreatedDate(r.createdAt)}</Typography>
                                  </Grid>
                                  <Grid item xs={12} md={3}>
                                    <Typography variant="subtitle2" sx={{ color: '#64748b', fontWeight: 600 }}>Created Time</Typography>
                                    <Typography variant="body2" sx={{ color: '#374151' }}>{formatCreatedTime(r.createdAt)}</Typography>
                                  </Grid>
                                  <Grid item xs={12} md={3}>
                                    <Typography variant="subtitle2" sx={{ color: '#64748b', fontWeight: 600 }}>Location</Typography>
                                    <Typography variant="body2" sx={{ color: '#374151' }}>{r.location || '-'}</Typography>
                                  </Grid>
                                </Grid>
                              </Box>
                            )}
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingList;
