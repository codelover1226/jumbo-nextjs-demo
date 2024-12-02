interface UserProps {
  id: number;
  name: string;
  profile_pic: string;
  status: string;
}
interface MessagesProps {
  id: number;
  message_type: string;
  message: string;
  sent_at: string;
  sent_date?: string;
  unread: boolean;
  sent_by: number;
}
interface ConversationProps {
  id: number;
  first_user_id: number;
  second_user_id: number;
  messages: MessagesProps[];
  contact?: UserProps;
  last_message?: MessagesProps;
}

export { type ConversationProps, type MessagesProps, type UserProps };
