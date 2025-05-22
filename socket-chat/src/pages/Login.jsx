import React, { useEffect } from 'react'
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { jwtDecode } from "jwt-decode";

import axios from 'axios'
function Login() {
  const {register,handleSubmit,formState:{errors},}=useForm()
  const navigate = useNavigate()
  useEffect(() => {
    const token=sessionStorage.getItem("token")
    if (token) {
      navigate("/chat")

    }
  },[])
  useEffect(()=>{},[])
  const onSubmit=(data)=>{
    console.log(data);
    axios.post("https://chat-app-1-un0b.onrender.com/api/user/login",data)
    .then((res)=>{
      if (res.status===200) {
        // console.log(res)
        console.log(res.data.token);
        sessionStorage.setItem("token",res.data.token)

        
        const user = jwtDecode(res.data.token);
        sessionStorage.setItem("user",JSON.stringify(user))
        console.log(user,"user");
        
        alert("User Logined Successfully")
        navigate("/chat",{state:user})
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
      <Container maxWidth='md' sx={{ display: "flex", alignItems: "center", mt: 15 }}>
        <Grid container >
          <Grid size={6}>
            <Paper square sx={{
              bgcolor: "primary.main",
              color: "primar.ContrastText", p: 5,
              height: "100%",
              // border:(theme)=>console.log(theme),

            }}>
              <Box sx={{ p: 5 }}>


                <Typography variant='h4' gutterBottom sx={{ fontWeight: "600", mt: 3 }}>CHAT APP</Typography>
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
              <Box sx={{}} component={"form"} onSubmit={handleSubmit(onSubmit)}>


                <h1>login</h1>
                <TextField sx={{ mb: 3 }} fullWidth id="email" label="Email" variant="outlined"
                 {...register("email",{required:"this field reqired"})} error={!!errors.email} helperText={errors.email && errors.email.message} />
                <TextField sx={{ mb: 3 }} fullWidth id="password" label="Password" variant="outlined"
                {...register("password",{required:"this field reqired"})}  error={!!errors.password} helperText={errors.password && errors.password.message} />
                <Button type='submit' sx={{ py: 2 }} fullWidth variant="contained" >Login</Button>
                <Button sx={{ mt: 1 }} >
                  Forgot Password
                </Button>
              </Box>
              <Box sx={{ textAlign: "right", pr: 1 }}>
                <Typography variant='body2'>
                  Don't have an account <Button onClick={() => navigate("/register")}>Create Account</Button>
                </Typography>
              </Box>


            </Paper>

          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Login
