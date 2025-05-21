import React from "react";

import Header from "./Header";
import { Box } from "@mui/material";
import ChatArea from "./ChatArea";
import Footer from "./Footer";

function ChatBox({ roomData, handleSendMsg, allmsg, user }) {
  return (
    <>
      <Box sx={{ width: "50vw", display: "flex", height: "100%", flexDirection: "column" }}>
        {roomData.room ? (
          <>
            <Header roomData={roomData} />
            <ChatArea user={user} roomData={roomData} allmsg={allmsg} />
            <Footer handleSendMsg={handleSendMsg} />
          </>
        ) : (
          <>Please select your chat</>
        )}
      </Box>
    </>
  );
}

export default ChatBox;
