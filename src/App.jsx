import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index";
import PreLogin from "./pages/PreLogin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/userlayout/Dashboard";
import { UserLayout } from "./pages/userlayout/UserLayout";
import Transaction from "./component/transaction/Transaction";
import Categories from "./pages/Categories";
import ToDoList from "./pages/ToDoList";
import UserProfile from "./pages/UserProfile";
import Notification from "./pages/Notification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/prelogin" element={<PreLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* //UserLayout */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="/user/dashboard" element={<Dashboard />} />
          {/* <Route path="/user/dashboard" element={<Body />} /> */}
          <Route path="transaction" element={<Transaction />} />
          <Route path="/user/category" element={<Categories />} />
          <Route path="todo" element={<ToDoList />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="notifications" element={<Notification />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <Index />
  );
}

export default App;
