import React from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useTranslation } from "react-i18next";
import Logout from "../../components/logout/Logout";
import "./Home.css"; 

const Home = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="dashboard">
      
            <div className="dashboard-header">
                <h1>{t('welcome')} Sistema de Leilão</h1>
                <div className="language-switcher">
                    <Button
                        label="English"
                        className="p-button-text"
                        onClick={() => changeLanguage("en")}
                    />
                    <Button
                        label="Português"
                        className="p-button-text"
                        onClick={() => changeLanguage("pt")}
                    />
                </div>
                <Logout />
            </div>

          
            <div className="dashboard-content">
              
                <Card title="Leilões Ativos" className="dashboard-card">
                    <p className="card-text">Veja os leilões em andamento e participe agora mesmo!</p>
                    <Button label="Acessar" className="p-button-success" icon="pi pi-shopping-cart" />
                </Card>

              
                <Card title="Meus Leilões" className="dashboard-card">
                    <p className="card-text">Gerencie seus leilões criados e veja os lances recebidos.</p>
                    <Button label="Acessar" className="p-button-info" icon="pi pi-folder" />
                </Card>

              
                <Card title="Histórico" className="dashboard-card">
                    <p className="card-text">Consulte os leilões finalizados e os resultados obtidos.</p>
                    <Button label="Acessar" className="p-button-warning" icon="pi pi-clock" />
                </Card>
            </div>
        </div>
    );
};

export default Home;
