// import {useEffect,useState} from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import MaterialTable from "@material-table/core";
// import { Avatar } from '@mui/material';
// import Product from './practiceproduct';


// export default function DisplayProduct(){
//     var product=useSelector(state=>state.products)

//     var dispatch=useDispatch()
//     const [refresh,setRefresh]=useState(false)

//    var key=Object.keys(product)
//    var productRecord=Object.values(product)

//    console.log("PRODUCT",product)
//    console.log("Keys",key)
//    console.log("values",productRecord)

//    const deleteProduct=(rowData)=>
//     {
//     dispatch({type:'DELETE_PRODUCT',payload:[rowData.productid]})
//     alert('Product Deleted')
//     setRefresh(!refresh)
//     }

//    function displayproduct() {
//     return (

//       <MaterialTable
//         title="List of Product"
//         columns={[
//           { title: 'ProductId', field: 'productid' },
//           { title: 'ProductName', field: 'productname' },
//           { title: 'SaleYear', field: 'saleyear' },
//           { title: 'TotalProduction', field: 'totalproduction' },
//           { title: 'Picture', field: 'picture',render:(rowData)=><Avatar src={`${rowData.picture}`} style={{width:40,height:40}} variant="rounded" />},
//         ]}
//         data={productRecord}        
//         actions={[
//           {
//             icon: 'delete',
//             tooltip: 'Remove Employee',
//             onClick: (event, rowData) =>deleteProduct(rowData)
//                 },
//             {
//                 icon: 'edit',
//                 tooltip: 'Edit Employee',
//                 onClick: (event, rowData)=>handleSetDataForDialog(rowData)
//                 }
            
//         ]}
//       />
//     )
//   }


   

//     return(<div>
//    {displayproduct()}
//     </div>)

// }