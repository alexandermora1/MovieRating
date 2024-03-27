import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/shared/Header"
import { AboutPage } from "../pages/AboutPage"
import { ListsPage } from "../pages/ListsPage"
import { HomePage } from "../pages/HomePage"
import React from "react";


interface AppRouterProps {
    toggleTheme: () => void;
    currentMode: "light" | "dark";
}


export const AppRouter: React.FC<AppRouterProps> = ({ toggleTheme, currentMode}) => {

    return (
        <BrowserRouter>

            <Header toggleTheme={toggleTheme} currentMode={currentMode}/>
            <Routes>                
                <Route path="/" element={<HomePage />} />
                <Route path="/lists" element={<ListsPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    )
}