import axios from 'axios';
import '../CSS/PendingOrder.css';
import React from 'react';
function PendingOrders() {

    const [order, setOrder] = React.useState(null);
 
    const [userID, setuserID] = React.useState(null);
    const [itemID, setitemID] = React.useState(null);
    const [quantity, setquantity] = React.useState(null);
    const [totPrice, settotPrice] = React.useState(null);
    const [deliveryAddress, setdeliveryAddress] = React.useState(null);
    const [orderStatus, setorderStatus] = React.useState(null);
   
  

    React.useEffect(() => {
        axios.get('http://localhost:8002/order/getAllPendingOrders').then((response) => {
            setOrder(response.data.Result);
            console.log(response.data.Result);
        });
      }, []);

 
    if(order == null){
        <div className='row'>
            <div className='pendingOrderTable'>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Item ID</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Toatal Price</th>
                            <th scope="col">Dilivery Address</th>
                            <th scope="col">Order Status</th>
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
                <div className='pendingOrderTable'>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Item ID</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Toatal Price</th>
                            <th scope="col">Dilivery Address</th>
                            <th scope="col">Order Status</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.map((su, index) => {
                                    console.log('Inside map')
                                    return(
                                        <tr>
                                            <th scope="row">{su.userID}</th>
                                            <td>{su.itemID}</td>
                                            <td>{su.totPrice}</td>
                                            <td>{su.quantity}</td>
                                            <td>{su.deliveryAddress}</td>
                                            <td>{su.orderStatus}</td>
                                        </tr>
                                    )
                                  })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='col'></div>
            </div>
        )
    }
}

export default PendingOrders;