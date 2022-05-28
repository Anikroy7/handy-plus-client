
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AllUser from './Pages/Dashboard/AllUser';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageAllProducts from './Pages/ManageAllProducts/ManageAllProducts';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard>
            </Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='alluser' element={
            <RequireAdmin>
              <AllUser></AllUser>
            </RequireAdmin>}>
          </Route>
        </Route>
        <Route path='purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='alltools' element={
          <RequireAuth>
            <RequireAdmin>
              <ManageAllProducts></ManageAllProducts>
            </RequireAdmin>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
