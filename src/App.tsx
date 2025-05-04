import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./pages/technical_pages/NotFound";
import Welcome from "./pages/Welcome";
import JoinPage from "./features/auth/pages/JoinPage"
import RegisterPage from "./features/auth/pages/RegisterPage";
import LoginPage from "./features/auth/pages/LoginPage";
import ForgotPasswordPage from "./features/auth/pages/ForgotPasswordPage";
import SurveyPage from "./features/dashboard/pages/SurveyPage";
import ConfirmResetPage from './features/auth/pages/ConfirmResetPage';
import ResetPasswordPage from './features/auth/pages/ResetPasswordPage';
import DashboardPage from './features/dashboard/pages/DashboardPage';
import MainLayout from './components/main_layout/MainLayout';
import University from './features/universities/pages/University';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Публичные роуты */}
          <Route path="/" element={<Welcome />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/confirm-reset-password" element={<ConfirmResetPage />}/>
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* Приватные роуты */}
          <Route path="/survey" element={<SurveyPage />} />
          
          <Route path="/app" element={<MainLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="university" element={<University />}>

            </Route>
          </Route>

          {/* Фолбэк */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right" // положение
        autoClose={3000}      // закрытие через 3 секунды
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </>
  )
}

export default App
