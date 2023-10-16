import React, { useEffect, useState }from 'react';

import axios from 'axios';

import '../CSS/Addsupplier.css'

function UpdateSupplier() {

    const [supplier, setSupplier] = React.useState(null);

    const [supplierID, setSupplierID] = React.useState(null);
    const [businessName, setBusinessName] = useState("");
    const [fullName, setFullName] = React.useState(null);
    const [tele, setTele] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [address, setAddress] = React.useState(null);


    React.useEffect(() => {
        getSuppliers();
      }, []);

    function getSuppliers(){
        axios.get(`http://localhost:8002/supplier/get/${window.location.pathname.split('/')[2]}`).then((response) => {
            setSupplier(response.data.supplier);
        });
    }

  function updateSupplier() {
    axios
      .put(`http://localhost:8002/supplier/update/${supplier._id}`, {
        supplierID: supplierID ?? supplier.supplierID,
        businessName: businessName ?? supplier.businessName,
        fullName: fullName ?? supplier.fullName,
        tele: tele ?? supplier.tele,
        email: email ?? supplier.email,
        address: address ?? supplier.address,
      })
      .then((response) => {
        setSupplier(response.data.supplier);
      });
  }
 
    if(supplier == undefined){
        return <div></div>
    }else{
        return(
            <div>
            <br></br> 
                <div className='container row'>
                    <div >
                        <br></br><br></br><br></br>
                        <div className ="menuforminside col-md-9">       
                            <form>
                                <div className='title'>
                                    Update Supplier
                                </div>
                                <br></br><br></br>
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="fname">Supplier Business Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="fname" name="firstname" placeholder="Your company.." defaultValue={supplier.businessName} onChange={e => setBusinessName(e.target.value)}></input>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="fname">Supplier ID</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="fname" name="firstname" placeholder="Your id.." defaultValue={supplier.supplierID} onChange={e => {setSupplierID(e.target.value);}}></input>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="fname">Conatct Full Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="fname" name="firstname" placeholder="Your full name.." defaultValue={supplier.fullName} onChange={e => {setFullName(e.target.value);}}></input>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="fname">Telephone</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="fname" name="firstname" placeholder="Your phone number.." defaultValue={supplier.tele} onChange={e => {setTele(e.target.value);}}></input>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="fname">Email</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="fname" name="firstname" placeholder="Your email.." defaultValue={supplier.email} onChange={e => {setEmail(e.target.value);}}></input>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="fname">Address</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="fname" name="firstname" placeholder="Your address.." defaultValue={supplier.address} onChange={e => {setAddress(e.target.value);}}></input>
                                    </div>
                                </div>
                                <br></br> <br></br> <br></br> <br></br>
                                <div className="row" id="addsupplierbutton">
                                    <ul className='addsupplierul'>
                                    <button type="submit" className="savebutton" onClick={updateSupplier}>Update Supplier</button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button type="submit" className="cancelbutton">Cancel</button>
                                    </ul>
                            
                                </div>
                                <br></br>
                            </form>
                        </div>
                        <br></br><br></br><br></br>
                    </div>
                </div>
            </div>   
        )
    }    
}

export default UpdateSupplier;