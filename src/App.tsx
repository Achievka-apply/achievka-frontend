import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Join from "./features/auth/pages/Join"
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import Survey from "./pages/Survey";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import GeneralDashboard from "./pages/GeneralDashboard"
import Favorites from "./pages/Favorites";
import Activity from "./pages/Activity" ;
import Documents from './pages/Documents';
import GeneralDocuments from './pages/GeneralDocuments';
import Resumes from './features/user/pages/Resumes';
import CoverLetters from './features/user/pages/CoverLetters';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Публичные роуты */}
        <Route path="/" element={<Welcome />} />
        <Route path="/join" element={<Join />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Приватные роуты */}
        <Route path="/survey" element={<Survey />} />
        
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<GeneralDashboard />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="activity" element={<Activity />} />
          </Route>

          <Route path="/documents" element={<Documents />}>
            <Route index element={<GeneralDocuments />} />
            <Route path="favorites" element={<Resumes />} />
            <Route path="activity" element={<CoverLetters />} />
          </Route>
        </Route>

        {/* Фолбэк */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
