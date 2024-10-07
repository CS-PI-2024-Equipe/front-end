import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './CadastroUsuario.css';

const CadastroUsuario = () => {
    return (
        <div className="flex justify-content-center align-items-center min-h-screen">
            <Card title="Cadastro de Usuário" className="p-4" style={{ width: '400px' }}>
                <div className="grid">
                    <div className="field col-12">
                        <label htmlFor="nome">Nome</label><br />
                        <InputText id="nome" className="w-full" placeholder="Digite seu nome" />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="email">E-mail</label><br />
                        <InputText id="email" className="w-full" placeholder="Digite seu e-mail" />
                    </div>
                </div>
                <Button label="Cadastrar" className="w-full mt-3" />
            </Card>
        </div>
    );
}

export default CadastroUsuario;
