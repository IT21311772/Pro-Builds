import React from 'react';

import axios from 'axios';

import '../CSS/Viewproduct.css';

function ViewProduct() {

    const [item, setItem] = React.useState(null);

    const [name, setname] = React.useState(null);
    const [unitPrice, setunitPrice] = React.useState(null);
    const [unitType, setunitType] = React.useState(null);
  

    React.useEffect(() => {
        axios.get('http://localhost:8002/item/getAll').then((response) => {
            setItem(response.data.Result);
            console.log(response.data.Result);
        });
      }, []);

 
    if(item == null){
        <div className='row'>
            <div className='viewProductTable '>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">UnitPrice</th>
                            <th scope="col">Unit Type</th>
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
                <div className='viewProductTable '>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">UnitPrice</th>
                                <th scope="col">Unit Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                item.map((su, index) => {
                                    console.log('Inside map')
                                    return(
                                        <tr>
                                            <th scope="row">{su.name}</th>
                                            <td>{su.unitPrice}</td>
                                            <td>{su.unitType}</td>
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

export default ViewProduct;