import { MessagesProps } from '@app/_components/apps/_types/ChatTypes';
import { Div } from '@jumbo/shared';
import Chip from '@mui/material/Chip';
import React from 'react';
import { ReceivedMessageContent } from '../ReceivedMessageContent';
import { SentMessageContent } from '../SentMessageContent';
/** todo any convert to real props */
const ActiveConversationChat = ({ conversation }: any) => {
  return (
    <React.Fragment>
      <Div
        sx={{
          position: 'relative',
          textAlign: 'center',
          mb: 2,

          '&:after': {
            display: 'inline-block',
            content: "''",
            position: 'absolute',
            left: 0,
            right: 0,
            height: '1px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'divider',
          },
        }}
      >
        <Chip
          label={conversation?.sent_date}
          variant='outlined'
          sx={{
            position: 'relative',
            zIndex: 1,
            bgcolor: (theme) => theme.palette.background.paper,
            borderColor: 'divider',
            borderRadius: 2,
          }}
        />
      </Div>
      {conversation.messages.map((message: MessagesProps, index: number) => {
        return (
          <React.Fragment key={index}>
            {message?.sent_by === 1 ? (
              <SentMessageContent message={message} />
            ) : (
              <ReceivedMessageContent message={message} />
            )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
export { ActiveConversationChat };
