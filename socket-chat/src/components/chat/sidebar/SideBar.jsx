import React, { Fragment, useState } from "react";
import Header from "./Header";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import axios from "axios";
function SideBar({ setAllmsg, user, onlineUsers, roomData, setRoomData }) {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleChatRoom = (item) => {
    console.log("handleChatRoom", item);

    setRoomData({
      ...roomData,
      room: "test",
      receiver: item,
    });
    axios
      .get(`http://localhost:5000/api/message/${user._id}/${item._id}`)
      .then((res) => {
        console.log(res);
        setAllmsg(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Box sx={{ width: "25vw", display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header user={user} />
        <Tabs value={value} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<ChatBubbleOutlineIcon />} iconPosition="start" label="Chat List" sx={{ minHeight: "inherit" }} />
          <Tab icon={<PersonIcon />} iconPosition="start" label="User List" sx={{ minHeight: "inherit" }} />
        </Tabs>
        {value === 0 && (
          <List sx={{ p: 0, overflow: "auto", flex: "1 0 0" }}>
            {onlineUsers
              .filter((ele) => ele._id != user._id)
              .map((item) => (
                <Fragment key={item._id}>
                  <ListItem alignItems="flex-start" onClick={() => handleChatRoom(item)}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.name}
                      secondary={<Typography variant="caption">{item.email}</Typography>}
                    />
                  </ListItem>
                  <Divider component="li" />
                </Fragment>
              ))}
          </List>
        )}
        {value === 1 && (
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText primary="name" secondary={<Typography variant="caption">Ali Connors</Typography>} />
            </ListItem>
            <Divider component="li" />
          </List>
        )}
      </Box>
    </>
  );
}

export default SideBar;
