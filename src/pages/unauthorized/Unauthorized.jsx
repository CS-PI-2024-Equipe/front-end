import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
            <Card
                title="403 - Acesso Negado"
                style={{ maxWidth: '400px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            >
                <div>
                    <i
                        className="pi pi-lock"
                        style={{ fontSize: '3rem', color: '#f44336', marginBottom: '1rem' }}
                    ></i>
                    <p style={{ fontSize: '1.2rem', color: '#757575' }}>
                        Você não tem permissão para acessar esta página.
                    </p>
                    <Button
                        label="Voltar para a Página Inicial"
                        icon="pi pi-home"
                        className="p-button-raised p-button-primary"
                        onClick={() => navigate('/')}
                    />
                </div>
            </Card>
        </div>
    );
};

export default Unauthorized;
