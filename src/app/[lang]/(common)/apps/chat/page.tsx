import { ContentPlaceholder } from '@app/_components/apps/chats/components/ChatAppContent';

const ChatAppPage = ({ params }: { params: { id: number } }) => {
  if (!params.id) return <ContentPlaceholder />;
};

export default ChatAppPage;
