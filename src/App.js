import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchases from './Pages/Purchase/Purchases';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login'
import SignUp from './Pages/Login/SignUp'
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import NotFound from "./Pages/Shared/NotFound"
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="portfolio" element={<Portfolio></Portfolio>} />
        <Route path="purchase" element={
          <RequireAuth>
            <Purchases></Purchases>
          </RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manageProducts" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path="manageOrders" element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
        </Route>
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
