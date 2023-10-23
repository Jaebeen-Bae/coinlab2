import React, { useEffect } from 'react';
import { Timestamp } from 'firebase/firestore';
import * as styled from './Message.styles';

export type MessageType = {
  uid: string;
  name: string;
  text: string;
  createdAt: Timestamp;
  id: string;
};

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const storedUid = localStorage.getItem('uid');
  const createdAt = message.createdAt.toDate();
  const firstThreeChars = message.uid.substring(0, 3);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const isCurrentUser = message.uid === storedUid;

  return (
    <styled.ChatBubble style={isCurrentUser ? { marginLeft: 'auto' } : {}}>
      <div>
        <styled.UserName>
          {message.name} {firstThreeChars}
        </styled.UserName>
        {isCurrentUser ? (
          <styled.MessageRight>
            <div>{formattedTime}</div>
            <styled.UserMessage style={{ marginLeft: '10px' }}>
              {message.text}
            </styled.UserMessage>
          </styled.MessageRight>
        ) : (
          <styled.MessageLeft>
            <styled.UserMessage style={{ marginRight: '10px' }}>
              {message.text}
            </styled.UserMessage>
            <div>{formattedTime}</div>
          </styled.MessageLeft>
        )}
      </div>
    </styled.ChatBubble>
  );
};
export default Message;
