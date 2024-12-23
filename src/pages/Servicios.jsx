import React from 'react';
import { Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Card from '../components/MyCard';
import Layout from '../components/Layout';
import serviciosData from '../data/servicios.json';

function Servicios() {
    return (
        <Layout>
            <Box sx={{ py: 2 }}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="center"
                    flexWrap="wrap"
                >
                    {serviciosData.rows.map((servicio, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: '100%', sm: '30%', md: '23%' },
                                pb: 4,
                            }}
                        >
                            <Link
                                to={servicio.link}
                                className="no-decoration"
                                state={{ dataPath: servicio.data }}
                            >
                                <Card
                                    title={servicio.title}
                                    description={servicio.description || ""}
                                    src={servicio.image}
                                />
                            </Link>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Layout>
    );
}

export default Servicios;
