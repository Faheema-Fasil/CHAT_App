import { Avatar, Box, Chip, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

function ChatArea({allmsg,user}) {

    return (
        <>
            <Box sx={{ overflowY: "auto", flex: "1 0 0", }}>
                <Stack direction="row" justifyContent={"center"} sx={{ py: 2, position: "sticky", top: 0, zIndex: 2 }} >
                    <Chip label="today " />

                </Stack>
                <List sx={{ p:0,overflowY:"auto",flex:"1 0 0",gap:5,display:"flex",flexDirection:"column" }}>
                    {
                        allmsg.map((item) => (

                    <ListItem sx={item.sender._id===user._id? {flexDirection:"row-reverse",mb:2}:{mb:2}} alignItems="flex-start">
                        <Box sx={item.sender._id===user._id? {display: "flex", width: "80%",flexDirection:"row-reverse"}:{ display: "flex", width: "80%" }} >
                        <ListItemAvatar sx={item.sender._id===user._id? {display:"flex",flexDirection:"row-reverse"}:{}}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>

                            <Paper sx={item.sender._id===user._id?{p: 1.5, width: "100%",bgcolor:"primary.light"}:{ p: 1.5, width: "100%" }}>

                                <ListItemText
                                    primary={item.sender.name}
                                    sx={{ m: 0 }}
                                    secondary={
                                        <Typography
                                            variant='caption'>
                                            {item.msg}
                                        </Typography>
                                    }
                                />
                                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",mt:1}}>
                                    <Typography variant='body2'>
                                       <span>{new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                                    
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </ListItem>
                        ))
                    }
                    {/* <Divider component="li" /> */}
                    {/* <ListItem sx={{flexDirection:"row-reverse",mb:2}}>
                        <Box sx={{ display: "flex", width: "80%",flexDirection:"row-reverse" }}>
                        <ListItemAvatar sx={{display:"flex",flexDirection:"row-reverse"}}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>

                            <Paper sx={{ p: 1.5, width: "100%",bgcolor:"primary.light" }}>

                                <ListItemText
                                    primary="name"
                                    sx={{ m: 0 }}
                                    secondary={
                                        <Typography
                                            variant='caption'>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, illum atque excepturi numquam dolores facere deleniti architecto at fugiat consectetur unde rerum reiciendis quibusdam recusandae asperiores cupiditate repudiandae. Commodi, quibusdam?
                                        </Typography>
                                    }
                                />
                                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",mt:1}}>
                                    <Typography variant='body2'>
                                        12pm
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </ListItem> */}

                </List>
            </Box>

        </>
    )
}

export default ChatArea
