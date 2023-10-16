import React from 'react';
import '../CSS/Addproduct.css'
import {Link} from 'react-router-dom';
import axios from 'axios';

function Addproduct() {
    const [product, setProduct] = React.useState(null);

    const [productID, setProductID] = React.useState(null);
    const [supplierName, setSupplierName] = React.useState(null);
    const [name, setName] = React.useState(null);
    const [unitPrice, setUnitPrice] = React.useState(null);
    const [unitType, setUnitType] = React.useState(null);
    const [quantity, setQuantity] = React.useState(null);
    const [description,setDescription] = React.useState(null);
 
    function addProduct() {
        axios
          .post('http://localhost:8002/item/add', {
            name: name,
            unitPrice: unitPrice,
            unitType: unitType
          })
          .then((response) => {
            alert("Product Added");
            setProduct(response.data);
          });
      }

    return(
        <div className='container row'>
        <br></br>
        <div>
        <Link to='/viewproduct'>
            <button className='viewbutton'><span>
                View All Products
            </span></button>
        </Link>
            
            <div >
            <br></br>
        <div>
            <form>
            <br></br>
           <br></br>
           <ul className='addproductul'>
           <div class="row">
                <div class="row">
                    <label for="fname">Product ID</label>
                </div>
                <div class="row">
                    <input type="text" id="fname" name="firstname" size="23" placeholder="Product id.." onChange={e => {setProductID(e.target.value);}}></input>
                </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="row">
                <div class="row">
                    <label for="fname">Product Name</label>
                </div>
                <div class="row">
                    <input type="text" id="fname" name="productname" size="23" placeholder="Product name.." onChange={e => {setName(e.target.value);}}></input>
                </div>
            </div>
           </ul>
           <br></br> <br></br> <br></br>   <br></br> <br></br> 
           <ul className='addproductul'>
           <div class="row">
                <div class="row">
                    <label for="fname">Supplier       </label>
                </div>
                <div class="row">
                    <input type="text" id="fname" name="suppliername" size="25" placeholder="Supplier name.." onChange={e => {setSupplierName(e.target.value);}}></input>
                </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="row">
                <div class="row">
                    <label for="fname">Price Range   </label>
                </div>
                <div class="row">
                    <input type="text" id="fname" name="pricerange" size="25" placeholder="Price range.." onChange={e => {setUnitPrice(e.target.value);}}></input>
                </div>
            </div>
           </ul>
           <br></br> <br></br> <br></br><br></br> <br></br>
           <ul className='addproductul'>
           <div class="row">
                <div class="row">
                    <label for="fname">Quantity Type</label>
                </div>
                <div class="row">
                    <input type="text" id="fname" name="quantitytype" size="20" placeholder="Quantity Type.." onChange={e => {setUnitType(e.target.value);}}></input>
                </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="row">
                <div class="row">
                    <label for="fname">Quantity     </label>
                </div>
                <div class="row">
                    <input type="text" id="fname" name="quantity" size="26" placeholder="Quantity      " onChange={e => {setQuantity(e.target.value);}}></input>
                </div>
            </div>
           </ul>
            <br></br><br></br><br></br><br></br><br></br>
            <div class="row description-style">
                <div class="row">
                    <label for="fname">Description</label>
                </div>
                <div class="row">
                    <textarea type="text" id="fname" name="discription" size="20" placeholder="Description.." onChange={e => {setDescription(e.target.value);}}></textarea>
                </div>
            </div>
            <br></br> <br></br> <br></br> <br></br>
            <div class="row" id="addsupplierbutton">
                <ul className='addsupplierul'>
                <button type="submit" className="addproductbutton" onClick={addProduct}>Save Product</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" className="cancelproductbutton">Cancel</button>
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

export default Addproduct;