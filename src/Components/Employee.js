import React from "react";
import {Grid,TextField,Button} from '@mui/material'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Employee()
{
 var dispatch=useDispatch()
 var navigate=useNavigate()

 const [mobileNumber,setMobileNumber]=useState('')
const [emailId,setEmailId]=useState('')
const [name,setName]=useState('')
const [city,setCity]=useState('')
const [picture,setPicture]=useState('')

const handlePicture=(event)=>{
    setPicture(URL.createObjectURL(event.target.files[0]))
}

const handleDisplay=()=>{
navigate("/displayallemployee")
}

const handleSubmit=()=>{
    var body={mobileno:mobileNumber,emailid:emailId,name:name,city:city,picture:picture}
    dispatch({type:'ADD_EMPLOYEE',payload:[mobileNumber,body]})
}

    return(
        <div style={{display:'flex',justifyContent:'center',alignItem:'center'}}>
            <Grid container spacing={2} style={{width:300,marginTop:50}}>
                <Grid item xs={12}>
                    <TextField fullWidth  label="Mobile No" onChange={(event)=>setMobileNumber(event.target.value)}/>

                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth onChange={(event)=>setEmailId(event.target.value)} label="Email Id"/>

                </Grid>
                <Grid item xs={12}> 
                    <TextField fullWidth onChange={(event)=>setName(event.target.value)} label="Name"/>

                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth onChange={(event)=>setCity(event.target.value)} label="City"/>

                </Grid>
                <Grid item xs={12}>
                <Button fullWidth variant="contained" component="label">
        Upload Picture
        <input hidden accept="image/*" multiple type="file" onChange={handlePicture} />
      </Button>

                </Grid>

                <Grid  item xs={6}>
                    <Button fullWidth onClick={handleSubmit} > Submit </Button>
                </Grid>
                <Grid  item xs={6}>
                    <Button fullWidth onClick={handleDisplay} > list </Button>
                </Grid>


            </Grid>


        </div>
    )
}