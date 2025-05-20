import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./pages/publicRoutes";
import ProtectedRoutes from "./pages/protextedRoutes";
import Layout from "./pages/layout";
import { Toaster } from "react-hot-toast";
import Signup from "./components/auth/sign-up";
import VerificationSuccess from "./components/auth/verification-success";
import EmailVerification from "./components/auth/email-verification";
import ResetPassword from "./components/auth/reset-password";
import ForgotPassword from "./components/auth/forgot-password";
import PasswordResetEmailSent from "./components/auth/password-reset-email-sent";
import PasswordChangedSuccess from "./components/auth/password-changed-success";
import HomePage from "./pages/home";
import Login from "./components/auth";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verification-success" element={<VerificationSuccess />} />
          <Route path="/email-sent" element={<PasswordResetEmailSent />} />
          <Route path="/password-changed" element={<PasswordChangedSuccess />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
