import { Avatar, Card, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
   

function Header({user}) {
  return (
    <>
    <Card sx={{bgcolor:"primary.main",borderRadius:"0",color:"primary.contrastText"}}>

       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" sx={{}}>
            <MoreVertIcon />
          </IconButton>
        }
        title={user.name}
        subheader={<Typography variant='caption'>{user.email}</Typography>  }
      />
    </Card>
    </>
  )
}

export default Header
