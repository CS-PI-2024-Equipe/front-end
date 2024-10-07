import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const RecuperarSenha = () => {
    return (
        <div className="flex justify-content-center align-items-center min-h-screen">
            <Card title="Recuperar Senha" className="p-4" style={{ width: '400px' }}>
                <div className="grid">
                    <div className="field col-12">
                        <label htmlFor="email">E-mail</label><br />
                        <InputText id="email" className="w-full" placeholder="Digite seu e-mail" />
                    </div>
                </div>
                <Button label="Recuperar Senha" className="w-full mt-3" />
            </Card>
        </div>
    );
}

export default RecuperarSenha;
