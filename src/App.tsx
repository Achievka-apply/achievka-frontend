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
import ConfirmResetPassword from './features/auth/pages/ConfirmResetPassword';
import ResetPassword from './features/auth/pages/ResetPassword';
import Dashboard from './features/dashboard/pages/Dashboard';
import MainLayout from './components/main_layout/MainLayout';
import University from './features/universities/pages/University';

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
          
          <Route path="/app" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
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
