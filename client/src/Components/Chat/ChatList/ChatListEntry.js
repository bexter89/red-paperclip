/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import '../Chats.css';
import Avatar from '@mui/material/Avatar';
import timeago from 'epoch-timeago';
import Divider from '@mui/material/Divider';
import { ItemsContext } from '../../ItemsContext';

export default function ChatListEntry({ entryObj, clicked }) {
  const { currentUserState } = useContext(ItemsContext);
  const [currentUser, setCurrentUser] = currentUserState;
  const {
    trader1,
    trader1Photo,
    trader1ItemPhoto,
    trader2,
    trader2Photo,
    trader2ItemPhoto,
    timestamp,
    lastMessage,
    chatId,
  } = entryObj;

  let shortStr = lastMessage;
  shortStr = `${shortStr.slice(0, 7)}...`;
  // onclick function
  // once clicked
  // sets the global state of currentChatRoom

  const TimeAgo = ({ time }) => (
    <time dateTime={new Date(time).toISOString()}>{timeago(time)}</time>
  );

  const epochTimeStamp1 = Date.now() - 60000 * 22;
  <TimeAgo time={epochTimeStamp1} />;

  const epochTimeStamp2 = Date.now() - 60000 * 48;
  <TimeAgo time={epochTimeStamp2} />;

  const epochTimeStamp3 = Date.now() - 60000 * 71;
  <TimeAgo time={epochTimeStamp3} />;

  const epochTimeStamp4 = Date.now() - 60000 * 12;
  <TimeAgo time={epochTimeStamp3} />;

  const epochTimeStamp5 = Date.now() - 60000 * 139;
  <TimeAgo time={epochTimeStamp3} />;

  const epochTimeStamp6 = Date.now() - 60000 * 71;
  <TimeAgo time={epochTimeStamp3} />;

  const epochTimeStamp7 = Date.now() - 60000 * 8;
  <TimeAgo time={epochTimeStamp3} />;

  const epochTimeStamp8 = Date.now() - 60000 * 283;
  <TimeAgo time={epochTimeStamp3} />;

  const epochTimeStamp9 = Date.now() - 60000 * 618;
  <TimeAgo time={epochTimeStamp3} />;

  const useRandomTime = [
    epochTimeStamp1,
    epochTimeStamp2,
    epochTimeStamp3,
    epochTimeStamp4,
    epochTimeStamp5,
    epochTimeStamp6,
    epochTimeStamp7,
    epochTimeStamp8,
    epochTimeStamp9,
  ];

  return (
    <>
      {trader1 === currentUser.firstName ? (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <>
          <div className="chat" onClick={() => clicked(chatId)}>
            <Avatar className="chat_image" src={trader2Photo} />
            <h3>{trader2}</h3>
            <div className="chat_details">
              <p>{shortStr}</p>
            </div>
            <p className="chat_timestamp">
              <TimeAgo
                time={
                  useRandomTime[
                    Math.floor(Math.random() * useRandomTime.length)
                  ]
                }
                className="timestamp"
              />
            </p>
          </div>
          <Divider />
        </>
      ) : (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <>
          <div className="chat" onClick={() => clicked(chatId)}>
            <Avatar className="chat_image" src={trader1Photo} />
            <h3>{trader1}</h3>
            <div className="chat_details">
              <p>{shortStr}</p>
            </div>
            <TimeAgo
              time={
                useRandomTime[Math.floor(Math.random() * useRandomTime.length)]
              }
              className="timestamp"
            />
          </div>
          <Divider />
        </>
      )}
    </>
  );
}
