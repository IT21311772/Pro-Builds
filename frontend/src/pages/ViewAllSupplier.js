import React, { useEffect } from 'react';

import axios from 'axios';

import '../CSS/view_all_suppliers_css.css';
import { Link } from 'react-router-dom';

function ViewSuppliers() {

    const [supplier, setSupplier] = React.useState(null);

    // const [supplierID, setSupplierID] = React.useState(null);
    // const [businessName, setBusinessName] = React.useState(null);
    // const [fullName, setFullName] = React.useState(null);
    // const [tele, setTele] = React.useState(null);
    // const [email, setEmail] = React.useState(null);
    // const [address, setAddress] = React.useState(null);

    React.useEffect(() => {
        getSuppliers();
      }, []);

    function getSuppliers(){
        axios.get('http://localhost:8002/supplier/getAll').then((response) => {
            setSupplier(response.data.Result);
        });
    }  

  function deleteSupplier(id) {
    axios
      .delete(`http://localhost:8002/supplier/delete/${id}`)
      .then((response) => {
        getSuppliers();
      });
  }

    if(supplier == null){
        <div className='row'>
            <div className='col container view_all_suppliers_container'>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Supplier ID</th>
                            <th scope="col">Bussiness Name</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Telephone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        No Data
                    </tbody>
                </table>
            </div>
            <div className='col'></div>
        </div>
    }else{
        return(
            <div className='row'>
                <div className='col view_all_suppliers_container'>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Supplier ID</th>
                                <th scope="col">Bussiness Name</th>
                                <th scope="col">Supplier Name</th>
                                <th scope="col">Telephone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                supplier.map((su, index) => {
                                    return(
                                        <tr key={index}>
                                            <th scope="row">{su.supplierID}</th>
                                            <td>{su.businessName}</td>
                                            <td>{su.fullName}</td>
                                            <td>{su.tele}</td>
                                            <td>{su.email}</td>
                                            <td>{su.address}</td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => deleteSupplier(su._id)}>Delete</button>
                                            </td>
                                            <td>
                                                <Link to={`/updateSuppliers/${su._id}`}>
                                                    <button className='btn btn-success'>Update</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                  })
                            }
                        </tbody>
                    </table>
                </div>
                {/* <div className='col'></div> */}
            </div>
        )
    }
}

export default ViewSuppliers;