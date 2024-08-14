import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Login = () => {
    return (
        <div className="flex justify-content-center align-items-center min-h-screen">
            <Card title="Login" className="p-4" style={{ width: '400px' }}>
                <div className="grid">
                    <div className="field col-12">
                        <label htmlFor="nome">Nome</label><br />
                        <InputText id="nome" className="w-full" />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="senha">Senha</label><br />
                        <Password id="senha" feedback={false} className="w-full" inputClassName="w-full" />
                    </div>
                </div>
                <Button label="Login" className="w-full mt-3" />
            </Card>
        </div>
    );
}

export default Login;
