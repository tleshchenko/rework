import { StrictMode } from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";


export default function DefaultLayout(props) {
    return (
        <StrictMode>
            <Header />
            <main>
                <Outlet />
            </main>
        </StrictMode>
    )
}