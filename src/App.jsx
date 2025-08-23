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
import AddTransaction from "./component/transaction/AddTransaction";

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
          {/* Route for adding new transaction */}
          <Route path="user/add-transaction" element={<AddTransaction />} />

          {/* Route for editing existing transaction */}
          <Route
            path="/user/add-transaction/:id"
            element={<AddTransaction />}
          />
          <Route path="/user/category" element={<Categories />} />
          <Route path="/user/todo" element={<ToDoList />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/notifications" element={<Notification />} />
          <Route path="/user/transaction/add" element={<AddTransaction />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <Index />
  );
}

export default App;
