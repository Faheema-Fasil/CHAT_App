import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile({user}) {
    const navigate=useNavigate()
    const logout=()=>{
        sessionStorage.removeItem("token")
        navigate("/ ")
    }
  return (
    <>
      <Box sx={{background:"#eee",width:"25vw", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:3}}>
        <Avatar src='https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?semt=ais_hybrid&w=740' 
        sx={{width:"156px",height:"156px" }}/>
        <Typography variant='h4' sx={{textTransform:"uppercase",color:"primary.light"}}>
            {user.name}
        </Typography>
        <Typography variant='subtitle1'>
            {user.email}
        </Typography>
        {/* <Typography variant='body2'>
            karthik
        </Typography> */}
        <Button onClick={logout} variant='contained'>Logout</Button>
      </Box>
    </>
  )
}

export default Profile
