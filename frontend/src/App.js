import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Home from './pages/Home';
import AddSupplier from './pages/AddSupplier';
import Addproduct from './pages/Addproduct';
import ViewProduct from './pages/ViewProducts';
import PendingOrders from "./pages/PendingOrder";

import Navbar from './Components/Navbar';
import ViewSuppliers from "./pages/ViewAllSupplier";
import UpdateSupplier from "./pages/update_supplier";
import ChangeOrderStatus from "./pages/change_order_status";
import ViewInquiries from "./pages/view_inquiries";

function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/addsupplier' element={<AddSupplier/>} />
    <Route path='/addproduct' element={<Addproduct/>} />
    <Route path='/viewproduct' element={<ViewProduct/>} />
    <Route path='/viewsuppliers' element={<ViewSuppliers/>} />
    <Route path='/updateSuppliers/:id' element={<UpdateSupplier/>} />
    <Route path='/pendingOrders' element={<PendingOrders/>} />
    <Route path='/changeOrderStatus' element={<ChangeOrderStatus/>} />
    <Route path='/viewInquiries' element={<ViewInquiries/>} />
    </Routes>
   </Router>

  );
}

export default App;
