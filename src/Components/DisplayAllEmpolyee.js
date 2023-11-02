import {useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import MaterialTable from "@material-table/core";
import { Avatar } from '@mui/material';
import Employee from './Employee';
export default function DisplayAllEmployee()
{  var employee=useSelector(state=>state.employee)

    const [refresh,setRefresh]=useState(false)

    var keys=Object.keys(employee)
    var employeeRecord=Object.values(employee)

    console.log("Employee",employee)
    console.log("Keys",keys)
    console.log("Values",employeeRecord)

    var dispatch=useDispatch()

    const deleteEmployee=(rowData)=>
    {
    dispatch({type:'DELETE_EMPLOYEE',payload:[rowData.mobileno]})
    alert('Employee Deleted')
    setRefresh(!refresh)
    }
    function displayEmployee() {
        return (
 
          <MaterialTable
            title="List of Employee"
            columns={[
              { title: 'Mobile', field: 'mobileno' },
              { title: 'Email', field: 'emailid' },
              { title: 'Name', field: 'name' },
              { title: 'City', field: 'city' },
              { title: 'Picture', field: 'picture',render:(rowData)=><Avatar src={`${rowData.picture}`} style={{width:40,height:40}} variant="rounded" />},
            ]}
            data={employeeRecord}        
            actions={[
              {
                icon: 'delete',
                tooltip: 'Remove Employee',
                onClick: (event, rowData) =>deleteEmployee(rowData)},
                {
                    icon: 'edit',
                    tooltip: 'Edit Employee',
                    onClick: (event, rowData) =>deleteEmployee(rowData)}
                
            ]}
          />
        )
      }
    

  return(<div>
    {displayEmployee()}
  </div>)  
}