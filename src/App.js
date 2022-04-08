import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePages from "./pages/HomePages";
import AboutPage from "./pages/AboutPage";
import NotFounPage from "./pages/NotFounPage";
import Navbart from "./components/navbar/Navbart";
import UsersPage from "./pages/UserPage";
import Loginpage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbart/>
    
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/users/:id" element={<UsersPage />} />
        <Route path="*" element={<NotFounPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
