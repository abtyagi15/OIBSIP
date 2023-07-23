import PublicHome from "./pages/PublicHome";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminHome from "./pages/AdminHome";
import UserHome from "./pages/UserHome";
import UsersList from "./pages/UsersList";
import PizzasList from "./pages/PizzasList";
import OrdersList from "./pages/OrdersList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PublicHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<UserHome />} />
          <Route path="/admin" element={<AdminHome />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin" element={<AdminHome/>}>
          <Route path="/admin/userlist" element={<UsersList/>} />
          <Route path="/admin/orderlist" element={<OrdersList/>} />
          <Route path="/admin/pizzalist" element={<PizzasList/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
