import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./pages/technical_pages/NotFound";
import Welcome from "./pages/Welcome";
import Join from "./features/auth/pages/Join"
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import Survey from "./features/dashboard/pages/Survey";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./features/dashboard/pages/Dashboard";
import GeneralDashboard from "./features/dashboard/pages/GeneralDashboard"
import Favorites from "./features/dashboard/pages/Favorites";
import Activity from "./features/dashboard/pages/Activity" ;
import Documents from './features/dashboard/pages/Documents';
import GeneralDocuments from './features/dashboard/pages/GeneralDocuments';
import Resumes from './features/user/pages/Resumes';
import CoverLetters from './features/user/pages/CoverLetters';
import ConfirmResetPassword from './features/auth/pages/ConfirmResetPassword';
import ResetPassword from './features/auth/pages/ResetPassword';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Публичные роуты */}
          <Route path="/" element={<Welcome />} />
          <Route path="/join" element={<Join />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/confirm-reset-password" element={<ConfirmResetPassword />}/>
          <Route path="/reset-password" element={<ResetPassword />} />

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
