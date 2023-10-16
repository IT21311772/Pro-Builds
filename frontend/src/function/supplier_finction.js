import axios from 'axios';

export const addSupplier = async (supplier) => {
    axios.post('http://localhost:8002/supplier/add', supplier, {
        headers: {
            'Content-type': 'application/json',
        }
    }).then((res) => {
        alert("Supplier Added Sucessfully")
    }).catch((err) => {
        console.log('err', err)
    })
}

// export const getAllTaxis = async () => {
//     let taxis = axios.get('http://localhost:8082/taxi/getAllTaxis').then((res) => {
//         let allTaxis = res.data.Result;
//         return allTaxis;
//     }).catch((err) => {
//         console.log('Error: ', err)
//     })
//     return taxis;
// }

// export const getTaxi = async (id) => {
//     let taxi = await axios.get(`http://localhost:8082/taxi/getTaxi/${id}`).then((res) => {
//         let taxiObj = res.data.Result;
//         return taxiObj;
//     }).catch((err) => {
//         console.log("Error", err)
//     })
//     return taxi;
// }

// export const deleteTaxi = async (id) => {
//     try{
//         await axios.delete(`http://localhost:8082/taxi/deleteTaxi/${id}`).then((res) => {
        
//         })
//     }catch(err){
//         console.log("Error", err)
//     }
// }


// export const updateTaxi = async (id, taxi) => {
//     await axios.put(`http://localhost:8082/taxi/updateTaxi/${id}`, taxi, {
//         headers: {'Content-type': 'multipart/form-data'} 
//     }).then((res) => {
//         alert("Updated Sucessfully");
//         // window.location.href = '../admin-viewAllTaxis'
//     }).catch(err => {
//         console.log("Error: ", err)
//     })
// }

// //========= BOOK TAXI FUNCTIONS ============================================
// export const bookTaxi = async (taxiBookDetails) => {
//     axios.post('http://localhost:8082/taxiBook/book', taxiBookDetails, {
//         headers: {
//             'Content-type': 'application/json',
//         }
//     }).then((res) => {
//         alert("Taxi Booked Sucessfully")
//     }).catch((err) => {
//         console.log('err', err)
//     })
// }

// export const getAllBookedTaxis = async () => {
//     let taxis = axios.get('http://localhost:8082/taxiBook/getAllBookedTaxis').then((res) => {
//         let allTaxis = res.data.Result;
//         return allTaxis;
//     }).catch((err) => {
//         console.log('Error: ', err)
//     })
//     return taxis;
// }

// export const deleteBookedTaxi = async (id) => {
//     try{
//         await axios.delete(`http://localhost:8082/taxiBook/deleteTaxi/${id}`).then((res) => {
            
//         })
//     }catch(err){
//         console.log("Error", err)
//     }
// }