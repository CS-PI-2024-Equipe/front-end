import React from "react";
import "./Home.css";
import Logout from "../../components/logout/Logout";
import { useTranslation } from "react-i18next";

const Home = () =>{
    const {t, i18n} = useTranslation();

    const changeLanguage = (language) =>{
        i18n.changeLanguage(language);
    }

return(
    <div>
        <h1>{t('welcome')} Página Inicial</h1>
        <button onClick={()=>changeLanguage('en')}>
            English
        </button>
        <button onClick={() => changeLanguage('pt')}>
            Português
        </button>
        <Logout/>
    </div>
);
}
export default Home;