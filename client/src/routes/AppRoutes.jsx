import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ResumeReviewer from "../pages/ResumeReview";
import PortfolioReviewer from "../pages/PortfolioReview";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import PublicResume from "../pages/PublicResume";
import PublicPortfolio from "../pages/PublicPortfolio";

function AppRoutes() {

    return (

        <Routes>

            {/* Landing Pages */}

            <Route element={<MainLayout />}>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />
                <Route path="/resume-demo" element={<PublicResume/>}/>
                <Route path="portfolio-demo" element={<PublicPortfolio/>}/>

            </Route>

            {/* Dashboard */}

            <Route
                element={
                    <ProtectedRoute>

                        <DashboardLayout />

                    </ProtectedRoute>
                }
            >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="dashboard/home" element={<Home />} />
                <Route
                    path="/resume-reviewer"
                    element={<ResumeReviewer />}
                />

                <Route
                    path="/portfolio-reviewer"
                    element={<PortfolioReviewer />}
                />

                <Route
                    path="/profile"
                    element={<Profile />}
                />
                

            </Route>

            <Route path="*" element={<NotFound />} />

        </Routes>

    );

}

export default AppRoutes;