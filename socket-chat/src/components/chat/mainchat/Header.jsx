import React, { useEffect } from 'react'
import { Avatar, Button, Card, CardHeader, Icon, IconButton, Typography } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function Header({roomData}) {
    useEffect(() => {
        console.log(roomData,"roomdata");
    }, [roomData])
    return (
        <div>
            <Card sx={{  borderRadius: "0"}} elevation={0}>

                <CardHeader
                    avatar={
                        
                        <>
                        <Button>

                        <KeyboardBackspaceIcon/>
                        </Button>
                        <Avatar >
                            R
                        </Avatar>
                        </>
                    }
                    action={
                        <IconButton aria-label="settings" sx={{color:"primary.contrastText"}}>

                        </IconButton>
                    }
                    title={roomData.receiver.name}
                    subheader={<Typography variant='caption'>{roomData.receiver.name}</Typography>}
                />
            </Card>
        </div>
    )
}

export default Header
