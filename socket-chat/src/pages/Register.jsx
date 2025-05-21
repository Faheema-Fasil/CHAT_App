import React, { useEffect } from 'react'
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import {useNavigate } from 'react-router-dom'
import {useForm}  from 'react-hook-form'
import axios from 'axios'
function Register() {
  const {register,handleSubmit,formState:{errors},}=useForm()
    const navigate=useNavigate();

    const token=sessionStorage.getItem("token")
    useEffect(() => {
      if (token) {
        navigate("/chat")
      }
    })
    const onSubmit=(data)=>{
      console.log(data);
      axios.post("http://localhost:5000/api/user/register",data)
      .then((res)=>{
        if (res.status==200) {
          navigate("/")
          console.log(res)
          alert("User Registered Successfully please Login")
        }
       })
      .catch((err)=>{
        alert(err)
        console.log(err);
        
      }
      )
       
    }
  return (
    <div>
      <Container maxWidth='md' sx={{ display: "flex", alignItems: "center",mt:6 }}>
        <Grid container >
          <Grid size={6}>
            <Paper square sx={{
              bgcolor: "primary.main",
              color: "primar.ContrastText", p: 5,
              height: "100%",
              // border:(theme)=>console.log(theme),

            }}>
              <Box sx={{ p: 5 ,textAlign:"center"}}>


                <Typography variant='h4' gutterBottom sx={{fontWeight:"600",mt:3}}>CHAT APP</Typography>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium rem quam. Eos, natus! Quidem rem, voluptatibus adipisci atque nam, natus recusandae qui ex, saepe harum voluptatum fuga velit porro.</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid size={6}>
            <Paper square sx={{
              height: "100%",
              display: "flex",
              alignItems: "center", p: 5, flexDirection: "column"


            }}>
              <Box sx={{p:5}} component={"form"} onSubmit={handleSubmit(onSubmit)}>


                <Typography variant='h5' sx={{mb:2,fontWeight:"500",textTransform:"uppercase"}}>Register</Typography>
                <TextField sx={{ mb: 3 }} fullWidth  id="name" label="Fullname" variant="outlined"
                {...register("name",{required:"this field reqired"})} error={!!errors.name} helperText={errors.name && errors.name.message}/>
                <TextField sx={{ mb: 3 }} fullWidth id="email" label="Email" variant="outlined" 
                {...register("email",{required:"this field reqired"})} error={!!errors.email} helperText={errors.email && errors.email.message}/>
                <TextField sx={{ mb: 3 }} fullWidth id="password" label="Password" variant="outlined" 
                {...register("password",{required:"this field reqired"})}  error={!!errors.password} helperText={errors.password && errors.password.message}/>
                {/* <TextField sx={{ mb: 3 }} fullWidth id="mobile" label="Mobile no." variant="outlined" /> */}
                <Button type='submit' sx={{ py: 2 }} fullWidth variant="contained" >Register</Button>
                
              </Box>
              <Box sx={{ textAlign: "right", pr: 1 }}>
                <Typography variant='body2'>
                Already have an account <Button onClick={()=>navigate("/")}>Login</Button>
                </Typography>
              </Box>


            </Paper>

          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Register
