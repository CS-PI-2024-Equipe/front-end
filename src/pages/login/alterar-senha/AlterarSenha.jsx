import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const AlterarSenha = () => {
    return (
        <div className="flex justify-content-center align-items-center min-h-screen">
            <Card title="Alterar Senha" className="p-4" style={{ width: '400px' }}>
                <div className="grid">
                    <div className="field col-12">
                        <label htmlFor="codigo">Código</label><br />
                        <InputText id="codigo" className="w-full" placeholder="Digite o código recebido" />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="email">E-mail</label><br />
                        <InputText id="email" className="w-full" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="novaSenha">Nova Senha</label><br />
                        <Password id="novaSenha" feedback={false} className="w-full" inputClassName="w-full" placeholder="Digite a nova senha" />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="repetirSenha">Repetir Senha</label><br />
                        <Password id="repetirSenha" feedback={false} className="w-full" inputClassName="w-full" placeholder="Repita a nova senha" />
                    </div>
                </div>
                <Button label="Alterar Senha" className="w-full mt-3" />
            </Card>
        </div>
    );
}

export default AlterarSenha;
