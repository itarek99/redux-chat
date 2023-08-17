import gravatarUrl from "gravatar-url";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetConversationsQuery } from "../../features/conversations/conversationsApi";
import Error from "./../ui/Error";
import ChatItem from "./ChatItem";

export default function ChatItems() {
  const { user } = useSelector((state) => state.auth);
  const { data: conversations, isLoading, isError } = useGetConversationsQuery(user?.email);

  if (isLoading) {
    return (
      <ul>
        <li className="m-2 text-center">Conversations Loading...</li>
      </ul>
    );
  }
  if (!isLoading && isError) {
    return (
      <ul>
        <li className="m-2 text-center">
          <Error message={"Something Went Wrong :("} />
        </li>
      </ul>
    );
  }
  if (!isLoading && !isError && conversations?.length === 0) {
    return (
      <ul>
        <li className="m-2 text-center">No Conversations Found</li>;
      </ul>
    );
  }

  return (
    <ul>
      {conversations?.length > 0 &&
        conversations.map((conversation) => {
          const participant = conversation.users.find((participantUser) => participantUser.email !== user.email);

          return (
            <li key={conversation.id}>
              <Link to={`/inbox/${conversation.id}`}>
                <ChatItem
                  avatar={gravatarUrl(participant.email, { size: 100 })}
                  name={participant.name}
                  lastMessage={conversation.message}
                  lastTime={moment(conversation.timestamp).fromNow()}
                />
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
