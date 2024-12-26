import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { PlantillaInfo } from '../components/PlantillaInfo';

function Servicio() {
    const location = useLocation();
    const { dataPath } = location.state || {};
    const [serviceData, setServiceData] = useState(null);

    useEffect(() => {
        if (dataPath) {
            fetch(dataPath)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error al cargar los datos");
                    }
                    return response.json();
                })
                .then((data) => setServiceData(data))
                .catch((error) => console.error(error));
        }
    }, [dataPath]);

    if (!serviceData) {
        return (
            <Layout>
                <Container maxWidth="lg" sx={{ py: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Cargando...
                    </Typography>
                </Container>
            </Layout>
        );
    }

    return (
        <Layout>
            <PlantillaInfo content={serviceData} />            
        </Layout>
    );
}

export default Servicio;
