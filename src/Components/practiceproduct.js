import {React,useState }from "react";
import { Grid,TextField,Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Product(){

    var dispatch=useDispatch()
    var navigate=useNavigate()

    const[productId,setProductId]=useState('')
    const[producName,setProductName]=useState('')
    const[saleYear,setSaleYear]=useState('')
    const[totalProduction,setTotalProdction]=useState('')
    const[picture,setPicture]=useState('')

    const handlePicture=(event)=>{
        setPicture(URL.createObjectURL(event.target.files[0]))
    }

    const handleSubmit=()=>{
        var body={productid:productId,productname:producName,saleyear:saleYear,totalproduction:totalProduction,picture:picture}

        dispatch({type:"Add_Product",payload:[productId,body]})
    }

    const handleDisplay=()=>{
navigate("/displayproduct")
    }


    return(
        <div style={{display:'flex',justifyContent:'center',alignItem:'center'}}>
            <Grid container spacing={2} style={{width:300,marginTop:50}}>
                <Grid item xs={12}>
                    <TextField fullWidth  label="Product id" onChange={(event)=>setProductId(event.target.value)}/>

                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth onChange={(event)=>setProductName(event.target.value)} label="Productname"/>

                </Grid>
                <Grid item xs={12}> 
                    <TextField fullWidth onChange={(event)=>setSaleYear(event.target.value)} label="SaleYear"/>

                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth onChange={(event)=>setTotalProdction(event.target.value)} label="TotalProduction"/>

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
