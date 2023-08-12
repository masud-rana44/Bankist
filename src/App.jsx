import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppLayout />}>
          <Route index element={<Navigate replace to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="app" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
