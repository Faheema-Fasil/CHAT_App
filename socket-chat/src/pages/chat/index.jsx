import { Paper } from "@mui/material";
import SideBar from "../../components/chat/sidebar/SideBar";
import ChatBox from "../../components/chat/mainchat/ChatBox";
import Profile from "../../components/chat/profile/Profile";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import io from "socket.io-client";
const Chat = () => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [isSocketConnected, setIsSocketConnected] = useState(false);
  const [roomData, setRoomData] = useState({
    room: null,
  });
  const [allmsg, setAllmsg] = useState([]);
  const PATH = "http://localhost:5000";
  const socketRef = useRef();
  const navigate = useNavigate();
  const { state } = useLocation("/");
  console.log(state, "state");

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
    const socket = io.connect(PATH);
    console.log(socket);
    socketRef.current = socket;
    socket.on("connect", () => setIsSocketConnected(true));
    socket.off("connect", () => setIsSocketConnected(false));
  }, []);
  
  useEffect(() => {
    if (isSocketConnected) {
      socketRef.current.emit("ADD_USER", state);
      socketRef.current.on("USER_ADDED", (data) => {
        console.log(data);
        setOnlineUsers(data);
      });
      socketRef.current.on("RECEIVED_MSG", (data) => {
        console.log("datadata", data);

        console.log(data, "from another user");
        setAllmsg((prevState) => [...prevState, data]);
      });
      return () => socketRef.current.disconnect();
    }
  }, [isSocketConnected]);

  if (!state) {
    return null;
  }
  const handleSendMsg = (msg) => {
    console.log(msg, "send msg");
    if (socketRef.current.connected) {
      const data = {
        msg,
        receiver: roomData.receiver,
        sender: state,
      };
      socketRef.current.emit("SEND_MSG", data);
      setAllmsg((prevState) => [...prevState, data]);
    }
  };
  console.log(allmsg);
  return (
    <>
      <Paper square elevation={0} sx={{ width: "100%", display: "flex", height: "100vh" }}>
        <SideBar
          user={state}
          onlineUsers={onlineUsers}
          setRoomData={setRoomData}
          roomData={roomData}
          setAllmsg={setAllmsg}
        />
        <ChatBox user={state} handleSendMsg={handleSendMsg} roomData={roomData} allmsg={allmsg} />
        <Profile user={state} />
      </Paper>
    </>
  );
};
export default Chat;
