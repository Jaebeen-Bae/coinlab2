import React, { useEffect } from 'react';
import { Timestamp } from 'firebase/firestore';
import * as styled from './Message.styles';
import { TimeRight } from './Message.styles';

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
    <styled.ChatBubble isCurrentUser={isCurrentUser}>
      {isCurrentUser ? (
        <styled.MessageRight>
          <styled.TimeRight>{formattedTime}</styled.TimeRight>
          <styled.UserMessage>{message.text}</styled.UserMessage>
        </styled.MessageRight>
      ) : (
        <styled.Wrapper>
          <styled.UserInfo>
            <styled.UserName>{message.name}</styled.UserName>
            <styled.UserId>{firstThreeChars}</styled.UserId>
          </styled.UserInfo>
          <styled.MessageLeft>
            <styled.UserMessage>{message.text}</styled.UserMessage>
            <styled.TimeLeft>{formattedTime}</styled.TimeLeft>
          </styled.MessageLeft>
        </styled.Wrapper>
      )}
    </styled.ChatBubble>
  );
};
export default Message;
