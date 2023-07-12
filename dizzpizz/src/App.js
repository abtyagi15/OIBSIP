import PublicHome from "./pages/PublicHome";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminHome from "./pages/AdminHome";
import UserHome from "./pages/UserHome";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<PublicHome />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/user" element={<UserHome/>} />
          <Route path="/admin" element={<AdminHome/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
