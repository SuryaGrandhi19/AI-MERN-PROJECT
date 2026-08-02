import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import "../styles/dashboard.css";
import Nav from "../components/Nav/Nav";

function DashboardLayout() {

    return (

        <div className="dashboard-layout">
            <Nav/>
            <Sidebar />

            <main className="dashboard-content">

                <Outlet />

            </main>

        </div>

    );

}

export default DashboardLayout;