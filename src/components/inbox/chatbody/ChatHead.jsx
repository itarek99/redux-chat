import gravatarUrl from "gravatar-url";
import { useSelector } from "react-redux";

export default function ChatHead({ message }) {
  const { user } = useSelector((state) => state.auth);
  const participant = message?.sender?.email === user?.email ? message?.receiver : message?.sender;

  return (
    <div className="relative flex items-center p-3 border-b border-gray-300">
      <img
        className="object-cover w-10 h-10 rounded-full"
        src={gravatarUrl(participant?.email)}
        alt={participant?.name}
      />
      <span className="block ml-2 font-bold text-gray-600">{participant?.name}</span>
    </div>
  );
}
