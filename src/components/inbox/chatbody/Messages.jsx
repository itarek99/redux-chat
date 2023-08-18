import { useSelector } from "react-redux";
import Message from "./Message";

export default function Messages({ messages = [] }) {
  const { user } = useSelector((state) => state.auth);

  if (messages.length === 0) {
    return <div className="p-4">No Messages Found!</div>;
  }

  return (
    <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
      <ul className="space-y-2">
        {messages
          .slice()
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((message) => (
            <Message
              justify={message.sender.email === user.email ? "end" : "start"}
              key={message.id}
              message={message.message}
            />
          ))}
      </ul>
    </div>
  );
}
