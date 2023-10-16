import React, { useEffect } from 'react';

import axios from 'axios';

import '../CSS/view_all_suppliers_css.css';

function ViewInquiries() {

    const [inquiry, setInquiries] = React.useState(null);

    // const [supplierID, setSupplierID] = React.useState(null);
    // const [businessName, setBusinessName] = React.useState(null);
    // const [fullName, setFullName] = React.useState(null);
    // const [tele, setTele] = React.useState(null);
    // const [email, setEmail] = React.useState(null);
    // const [address, setAddress] = React.useState(null);

    React.useEffect(() => {
        getInquiries();
      }, []);

    function getInquiries(){
        axios.get('http://localhost:8002/inquiry/getAll').then((response) => {
            setInquiries(response.data.Result);
        });
    }  

  function deleteInquiry(id) {
    axios
      .delete(`http://localhost:8002/inquiry/delete/${id}`)
      .then((response) => {
        getInquiries();
      });
  }

    if(inquiry == null){
        <div className='row'>
            <div className='col container view_all_suppliers_container'>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Inquiry Title</th>
                            <th scope="col">Inquiry Message</th>
                            <th scope="col">Delete</th>
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
                <div className='col view_all_inquiries_container'>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Inquiry Title</th>
                            <th scope="col">Inquiry Message</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                inquiry.map((inq, index) => {
                                    return(
                                        <tr key={index}>
                                            <th scope="row">{inq.orderID}</th>
                                            <td>{inq.title}</td>
                                            <td>{inq.message}</td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => deleteInquiry(inq._id)}>Delete</button>
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

export default ViewInquiries;