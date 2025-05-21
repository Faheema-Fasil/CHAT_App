import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {EmojiEmotions} from '@mui/icons-material'

function Footer({handleSendMsg}) {
const [msg,setMsg]=useState("")
const handleChange=(e)=>{

    setMsg(e.target.value)
    console.log(e.target.value);
    
}
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(msg){

          console.log(msg,"send msg") ;
          handleSendMsg(msg)
        }
        setMsg('')

         
    }
  return (
    <div>
    <Box sx={{display:"flex",alignItems:"center"}}>
        <Box sx={{display:"flex",alignItems:"center"}}>

        <Button sx={{minWidth:"auto",mr:1}}>
            <MoreVertIcon/>
        </Button>
        <Button sx={{minWidth:"auto",mr:1}}>
            <EmojiEmotions/>
        </Button>
        </Box>
      <Box sx={{display:"flex",width:"100%",alignItems:"center"}} component='form' onSubmit={handleSubmit}>
        <TextField placeholder='Type something...' size='small' fullWidth onChange={handleChange} value={msg}/>
        <Button variant='outlined' sx={{borderRadius:0,minWidth:"auto",height:"100%" }} type='submit'>send</Button>
      </Box>
    </Box>
    </div>
  )
}

export default Footer
