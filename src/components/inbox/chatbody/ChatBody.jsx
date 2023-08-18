// import Blank from "./Blank";
import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "../../../features/messages/messagesApi";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";

export default function ChatBody() {
  const { id } = useParams();
  const { data: messages, isLoading } = useGetMessagesQuery(id);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="w-full lg:col-span-2 lg:block">
      <div className="w-full grid conversation-row-grid">
        <ChatHead message={messages[0]} />
        <Messages messages={messages} />
        <Options />
        {/* <Blank /> */}
      </div>
    </div>
  );
}
