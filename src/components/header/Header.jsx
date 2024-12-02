import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();

    const items = [
        {
            label: "Home",
            icon: "pi pi-home",
            command: () => navigate("/"),
        },
        {
            label: "Categoria",
            icon: "pi pi-tags",
            command: () => navigate("/category"),
        },
        {
            label: "Leilão",
            icon: "pi pi-gavel",
            command: () => navigate("/auction"),
        },
    ];

    const endTemplate = (
        <Button
            label="Sair"
            icon="pi pi-sign-out"
            className="p-button-text"
            onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
            }}
        />
    );

    return (
        <div className="header">
            <Menubar model={items} end={endTemplate} />
        </div>
    );
};

export default Header;
